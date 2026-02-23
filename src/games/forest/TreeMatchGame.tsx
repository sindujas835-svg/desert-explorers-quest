import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ForestBackground from "@/components/ForestBackground";

interface TreeType {
  id: string;
  name: string;
  treeEmoji: string;
  leafEmoji: string;
}

const TREES: TreeType[] = [
  { id: "oak", name: "Oak", treeEmoji: "🌳", leafEmoji: "🍂" },
  { id: "maple", name: "Maple", treeEmoji: "🍁", leafEmoji: "🍁" },
  { id: "pine", name: "Pine", treeEmoji: "🌲", leafEmoji: "🌿" },
  { id: "palm", name: "Palm", treeEmoji: "🌴", leafEmoji: "🥥" },
  { id: "cherry", name: "Cherry", treeEmoji: "🌸", leafEmoji: "🌸" },
  { id: "cactus", name: "Cactus", treeEmoji: "🌵", leafEmoji: "🏜️" },
];

type GameState = "ready" | "playing" | "won" | "lost";

const TreeMatchGame = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<GameState>("ready");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [treeHealth, setTreeHealth] = useState(0);
  const [matchedTrees, setMatchedTrees] = useState<Set<string>>(new Set());
  const [flippedLeaf, setFlippedLeaf] = useState<string | null>(null);
  const [shakingTree, setShakingTree] = useState<string | null>(null);
  const [shuffledLeaves, setShuffledLeaves] = useState<TreeType[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const shuffle = (arr: TreeType[]) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const startGame = useCallback(() => {
    setGameState("playing");
    setScore(0);
    setTime(60);
    setTreeHealth(0);
    setMatchedTrees(new Set());
    setFlippedLeaf(null);
    setShakingTree(null);
    setIsProcessing(false);
    setShuffledLeaves(shuffle(TREES));
  }, []);

  // Timer
  useEffect(() => {
    if (gameState !== "playing") {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          setGameState("lost");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [gameState]);

  // Win check
  useEffect(() => {
    if (matchedTrees.size === 6 && gameState === "playing") {
      setGameState("won");
    }
  }, [matchedTrees, gameState]);

  const handleLeafClick = (leaf: TreeType) => {
    if (isProcessing || matchedTrees.has(leaf.id) || gameState !== "playing") return;
    setFlippedLeaf(flippedLeaf === leaf.id ? null : leaf.id);
  };

  const handleTreeClick = (tree: TreeType) => {
    if (!flippedLeaf || isProcessing || matchedTrees.has(tree.id) || gameState !== "playing") return;

    setIsProcessing(true);

    if (flippedLeaf === tree.id) {
      // Correct match!
      setScore((s) => s + 10);
      setTreeHealth((h) => Math.min(h + 5, 100));
      setMatchedTrees((prev) => new Set([...prev, tree.id]));
      setFlippedLeaf(null);
      setTimeout(() => setIsProcessing(false), 300);
    } else {
      // Wrong match
      setShakingTree(tree.id);
      setTimeout(() => {
        setShakingTree(null);
        setFlippedLeaf(null);
        setIsProcessing(false);
      }, 600);
    }
  };

  const timerColor = time <= 15 ? "text-destructive" : time <= 30 ? "text-secondary" : "text-foreground";

  if (gameState === "ready") {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <ForestBackground />
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-10 text-center max-w-md mx-4 shadow-2xl">
          <div className="text-7xl mb-4 select-none">🌳</div>
          <h1 className="text-3xl font-display font-bold text-foreground mb-3">Tree Match Memory</h1>
          <p className="text-muted-foreground mb-2">Match each leaf to its correct tree within 60 seconds!</p>
          <div className="text-sm text-muted-foreground mb-6 space-y-1">
            <p>🍂 Flip a leaf card, then tap its matching tree</p>
            <p>✅ Correct match = +10 points</p>
            <p>❌ No penalty for wrong guesses</p>
          </div>
          <button
            onClick={startGame}
            className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-display font-bold text-xl hover:scale-105 transition-transform shadow-lg"
          >
            🌱 Start Game!
          </button>
          <button
            onClick={() => navigate("/forest")}
            className="block mx-auto mt-4 text-sm text-muted-foreground hover:text-foreground"
          >
            ← Back to Forest World
          </button>
        </div>
      </div>
    );
  }

  if (gameState === "won" || gameState === "lost") {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <ForestBackground />
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-10 text-center max-w-md mx-4 shadow-2xl animate-bounce-in">
          <div className="text-7xl mb-4 select-none">
            {gameState === "won" ? "🏆" : "⏰"}
          </div>
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">
            {gameState === "won" ? "Amazing! You Did It!" : "Time's Up!"}
          </h1>
          {gameState === "won" && (
            <div className="badge-container mx-auto mb-4">
              <span>🌲</span>
              <span>Forest Helper Badge Earned!</span>
            </div>
          )}
          <div className="text-5xl font-display font-bold text-primary mb-2">{score}</div>
          <p className="text-muted-foreground mb-1">Total Score</p>
          <p className="text-sm text-muted-foreground mb-6">
            {matchedTrees.size}/6 trees matched • Tree Health: {treeHealth}%
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={startGame}
              className="px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-display font-bold hover:scale-105 transition-transform"
            >
              🔄 Play Again
            </button>
            <button
              onClick={() => navigate("/forest")}
              className="px-6 py-3 rounded-2xl bg-muted text-foreground font-display font-bold hover:scale-105 transition-transform"
            >
              🌲 More Games
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <ForestBackground />

      <div className="container mx-auto px-4 py-4">
        {/* HUD */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <button
            onClick={() => navigate("/forest")}
            className="text-sm font-semibold text-primary hover:underline"
          >
            ← Back
          </button>
          <div className="flex items-center gap-4">
            <div className="score-display">⭐ {score}</div>
            <div className={`timer-display ${timerColor}`}>⏱️ {time}s</div>
          </div>
          <div className="text-sm font-semibold text-muted-foreground">
            {matchedTrees.size}/6 Matched
          </div>
        </div>

        {/* Tree Health Bar */}
        <div className="max-w-md mx-auto mb-6">
          <div className="flex justify-between text-xs font-semibold text-muted-foreground mb-1">
            <span>🌲 Tree Health</span>
            <span>{treeHealth}%</span>
          </div>
          <div className="health-bar">
            <div className="health-bar-fill" style={{ width: `${treeHealth}%` }} />
          </div>
        </div>

        {/* Trees row */}
        <div className="mb-8">
          <h2 className="text-center text-sm font-semibold text-muted-foreground mb-4">
            🌳 Tap a leaf below, then tap its matching tree!
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-3xl mx-auto">
            {TREES.map((tree) => (
              <div
                key={tree.id}
                onClick={() => handleTreeClick(tree)}
                className={`tree-slot ${matchedTrees.has(tree.id) ? "matched" : ""} ${shakingTree === tree.id ? "wrong" : ""}`}
              >
                <div className="text-4xl md:text-5xl select-none">{tree.treeEmoji}</div>
                <span className="text-xs font-bold text-foreground">{tree.name}</span>
                {matchedTrees.has(tree.id) && (
                  <span className="text-xs text-success font-bold">✅</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Leaf cards */}
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {shuffledLeaves.map((leaf) => {
            const isMatched = matchedTrees.has(leaf.id);
            const isFlipped = flippedLeaf === leaf.id;

            if (isMatched) {
              return (
                <div key={leaf.id} className="w-20 h-28 md:w-24 md:h-32 rounded-2xl bg-success/20 border-2 border-success/40 flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
              );
            }

            return (
              <div
                key={leaf.id}
                onClick={() => handleLeafClick(leaf)}
                className="w-20 h-28 md:w-24 md:h-32 cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="relative w-full h-full transition-transform duration-500"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Back (default - face down) */}
                  <div
                    className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center shadow-lg border-3"
                    style={{
                      background: "linear-gradient(135deg, hsl(145 63% 40%), hsl(150 70% 30%))",
                      borderColor: "hsl(145 63% 25%)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <span className="text-3xl select-none">🍃</span>
                    <span className="text-[10px] text-white/70 font-bold mt-1">FLIP</span>
                  </div>
                  {/* Front (revealed) */}
                  <div
                    className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center shadow-lg border-3"
                    style={{
                      background: "linear-gradient(135deg, hsl(145 63% 85%), hsl(140 50% 90%))",
                      borderColor: isFlipped ? "hsl(38 92% 50%)" : "hsl(145 63% 60%)",
                      boxShadow: isFlipped ? "0 0 15px hsl(38 92% 50% / 0.4)" : undefined,
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <span className="text-4xl select-none">{leaf.leafEmoji}</span>
                    <span className="text-[10px] text-foreground/70 font-bold mt-1">{leaf.name}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TreeMatchGame;
