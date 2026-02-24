import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MemoryConfig } from "../types";

interface Props { config: MemoryConfig; title: string; emoji: string; backPath: string; Background: React.ComponentType; }

interface Card { id: string; pairId: string; emoji: string; name: string; }

const MemoryMatchEngine = ({ config, title, emoji, backPath, Background }: Props) => {
  const navigate = useNavigate();
  const [state, setState] = useState<"ready"|"playing"|"won"|"lost">("ready");
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(config.timeLimit);
  const [busy, setBusy] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval>|null>(null);

  const start = useCallback(() => {
    const c: Card[] = [];
    config.pairs.forEach(p => {
      c.push({ id: p.id + "a", pairId: p.id, emoji: p.emoji, name: p.name });
      c.push({ id: p.id + "b", pairId: p.id, emoji: p.emoji, name: p.name });
    });
    for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [c[i], c[j]] = [c[j], c[i]]; }
    setCards(c);
    setFlipped([]);
    setMatched(new Set());
    setScore(0);
    setTime(config.timeLimit);
    setBusy(false);
    setState("playing");
  }, [config]);

  useEffect(() => {
    if (state !== "playing") { if (timer.current) clearInterval(timer.current); return; }
    timer.current = setInterval(() => {
      setTime(t => { if (t <= 1) { setState("lost"); return 0; } return t - 1; });
    }, 1000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [state]);

  useEffect(() => {
    if (matched.size === config.pairs.length && state === "playing") setState("won");
  }, [matched, state, config.pairs.length]);

  const handleClick = (idx: number) => {
    if (busy || state !== "playing" || flipped.includes(idx) || matched.has(cards[idx].pairId)) return;
    const next = [...flipped, idx];
    setFlipped(next);
    if (next.length === 2) {
      setBusy(true);
      if (cards[next[0]].pairId === cards[next[1]].pairId) {
        setScore(s => s + 10);
        setMatched(prev => new Set([...prev, cards[next[0]].pairId]));
        setTimeout(() => { setFlipped([]); setBusy(false); }, 400);
      } else {
        setTimeout(() => { setFlipped([]); setBusy(false); }, 800);
      }
    }
  };

  const panel = (child: React.ReactNode) => (
    <div className="min-h-screen relative flex items-center justify-center"><Background />{child}</div>
  );

  if (state === "ready") return panel(
    <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-10 text-center max-w-md mx-4 shadow-2xl">
      <div className="text-7xl mb-4 select-none">{emoji}</div>
      <h1 className="text-3xl font-display font-bold text-foreground mb-3">{title}</h1>
      <p className="text-muted-foreground mb-6">Find all matching pairs before time runs out!</p>
      <button onClick={start} className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-xl hover:scale-105 transition-transform shadow-lg">🎮 Start!</button>
      <button onClick={() => navigate(backPath)} className="block mx-auto mt-4 text-sm text-muted-foreground hover:text-foreground">← Back</button>
    </div>
  );

  if (state === "won" || state === "lost") return panel(
    <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-10 text-center max-w-md mx-4 shadow-2xl">
      <div className="text-7xl mb-4 select-none">{state === "won" ? "🏆" : "⏰"}</div>
      <h1 className="text-3xl font-display font-bold text-foreground mb-2">{state === "won" ? "You Won!" : "Time's Up!"}</h1>
      <div className="text-5xl font-bold text-primary mb-2">{score}</div>
      <p className="text-muted-foreground mb-6">{matched.size}/{config.pairs.length} pairs matched</p>
      <div className="flex gap-3 justify-center">
        <button onClick={start} className="px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform">🔄 Again</button>
        <button onClick={() => navigate(backPath)} className="px-6 py-3 rounded-2xl bg-muted text-foreground font-bold hover:scale-105 transition-transform">← Back</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative">
      <Background />
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <button onClick={() => navigate(backPath)} className="text-sm font-semibold text-primary hover:underline">← Back</button>
          <div className="flex items-center gap-4">
            <span className="score-display">⭐ {score}</span>
            <span className={`timer-display ${time <= 10 ? "text-destructive" : ""}`}>⏱️ {time}s</span>
          </div>
          <span className="text-sm font-semibold text-muted-foreground">{matched.size}/{config.pairs.length}</span>
        </div>
        <h2 className="text-center text-lg font-bold text-foreground mb-4">{emoji} {title}</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-w-3xl mx-auto">
          {cards.map((card, idx) => {
            const isFlipped = flipped.includes(idx);
            const isMatched = matched.has(card.pairId);
            return (
              <div key={card.id} onClick={() => handleClick(idx)}
                className={`aspect-square rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border-2 shadow-md ${
                  isMatched ? "bg-green-100 border-green-400 dark:bg-green-900/30" :
                  isFlipped ? "bg-card border-secondary shadow-lg scale-105" :
                  "bg-primary/80 border-primary/60 hover:scale-105"
                }`}>
                {isFlipped || isMatched ? (
                  <>
                    <span className="text-3xl md:text-4xl select-none">{card.emoji}</span>
                    <span className="text-[10px] font-bold text-foreground mt-1">{card.name}</span>
                  </>
                ) : (
                  <span className="text-2xl select-none">❓</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MemoryMatchEngine;
