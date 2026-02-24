import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SortConfig } from "../types";

interface Props { config: SortConfig; title: string; emoji: string; backPath: string; Background: React.ComponentType; }

const SortingEngine = ({ config, title, emoji, backPath, Background }: Props) => {
  const navigate = useNavigate();
  const [state, setState] = useState<"ready"|"playing"|"done">("ready");
  const [items, setItems] = useState(config.items);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [feedback, setFeedback] = useState<string|null>(null);
  const [time, setTime] = useState(config.timeLimit);
  const [timerId, setTimerId] = useState<ReturnType<typeof setInterval>|null>(null);

  const start = useCallback(() => {
    const shuffled = [...config.items];
    for (let i = shuffled.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; }
    setItems(shuffled);
    setCurrent(0);
    setScore(0);
    setWrong(0);
    setFeedback(null);
    setTime(config.timeLimit);
    setState("playing");
    const id = setInterval(() => {
      setTime(t => {
        if (t <= 1) { setState("done"); clearInterval(id); return 0; }
        return t - 1;
      });
    }, 1000);
    setTimerId(id);
  }, [config]);

  const sortTo = (cat: string) => {
    if (state !== "playing" || current >= items.length) return;
    const item = items[current];
    if (item.category === cat) {
      setScore(s => s + 10);
      setFeedback("✅ Correct!");
    } else {
      setWrong(w => w + 1);
      setFeedback(`❌ ${item.name} belongs to ${cat === item.category ? cat : config.categories.find(c => c.name === item.category)?.name || item.category}`);
    }
    setTimeout(() => {
      setFeedback(null);
      if (current + 1 >= items.length) {
        setState("done");
        if (timerId) clearInterval(timerId);
      } else {
        setCurrent(c => c + 1);
      }
    }, 600);
  };

  const panel = (child: React.ReactNode) => (
    <div className="min-h-screen relative flex items-center justify-center"><Background />{child}</div>
  );

  if (state === "ready") return panel(
    <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-10 text-center max-w-md mx-4 shadow-2xl">
      <div className="text-7xl mb-4 select-none">{emoji}</div>
      <h1 className="text-3xl font-display font-bold text-foreground mb-3">{title}</h1>
      <p className="text-muted-foreground mb-6">Sort {config.items.length} items into the right categories!</p>
      <button onClick={start} className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-xl hover:scale-105 transition-transform shadow-lg">🗂️ Start!</button>
      <button onClick={() => navigate(backPath)} className="block mx-auto mt-4 text-sm text-muted-foreground hover:text-foreground">← Back</button>
    </div>
  );

  if (state === "done") return panel(
    <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-10 text-center max-w-md mx-4 shadow-2xl">
      <div className="text-7xl mb-4 select-none">{score > wrong * 10 ? "🏆" : "📦"}</div>
      <h1 className="text-3xl font-display font-bold text-foreground mb-2">Sorting Done!</h1>
      <div className="text-5xl font-bold text-primary mb-2">{score}</div>
      <p className="text-muted-foreground mb-6">✅ {Math.round(score/10)} correct • ❌ {wrong} wrong</p>
      <div className="flex gap-3 justify-center">
        <button onClick={start} className="px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform">🔄 Again</button>
        <button onClick={() => navigate(backPath)} className="px-6 py-3 rounded-2xl bg-muted text-foreground font-bold hover:scale-105 transition-transform">← Back</button>
      </div>
    </div>
  );

  const item = items[current];

  return (
    <div className="min-h-screen relative">
      <Background />
      <div className="container mx-auto px-4 py-4 max-w-2xl">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <button onClick={() => { if (timerId) clearInterval(timerId); navigate(backPath); }} className="text-sm font-semibold text-primary hover:underline">← Back</button>
          <div className="flex items-center gap-4">
            <span className="score-display">⭐ {score}</span>
            <span className={`timer-display ${time <= 10 ? "text-destructive" : ""}`}>⏱️ {time}s</span>
          </div>
          <span className="text-sm font-semibold text-muted-foreground">{current + 1}/{items.length}</span>
        </div>
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl text-center mb-6">
          <p className="text-sm text-muted-foreground mb-2">Sort this item:</p>
          <div className="text-6xl mb-3 select-none">{item.emoji}</div>
          <h2 className="text-2xl font-bold text-foreground">{item.name}</h2>
          {feedback && <p className="mt-3 text-lg font-bold">{feedback}</p>}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {config.categories.map(cat => (
            <button key={cat.name} onClick={() => sortTo(cat.name)}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 text-center border-2 border-border hover:border-primary hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer">
              <div className="text-4xl mb-2 select-none">{cat.emoji}</div>
              <span className="font-bold text-foreground">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortingEngine;
