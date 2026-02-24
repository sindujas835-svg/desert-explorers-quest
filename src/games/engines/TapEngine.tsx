import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TapConfig } from "../types";

interface Props { config: TapConfig; title: string; emoji: string; backPath: string; Background: React.ComponentType; }

interface Spawn { id: number; target: TapConfig["targets"][0]; x: number; y: number; alive: boolean; }

const TapEngine = ({ config, title, emoji, backPath, Background }: Props) => {
  const navigate = useNavigate();
  const [state, setState] = useState<"ready"|"playing"|"done">("ready");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(config.timeLimit);
  const [spawns, setSpawns] = useState<Spawn[]>([]);
  const idRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval>|null>(null);
  const spawnRef = useRef<ReturnType<typeof setInterval>|null>(null);

  const stop = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (spawnRef.current) clearInterval(spawnRef.current);
  }, []);

  const start = useCallback(() => {
    setScore(0);
    setTime(config.timeLimit);
    setSpawns([]);
    idRef.current = 0;
    setState("playing");
  }, [config]);

  useEffect(() => {
    if (state !== "playing") { stop(); return; }
    timerRef.current = setInterval(() => {
      setTime(t => { if (t <= 1) { setState("done"); return 0; } return t - 1; });
    }, 1000);
    spawnRef.current = setInterval(() => {
      const t = config.targets[Math.floor(Math.random() * config.targets.length)];
      const s: Spawn = { id: idRef.current++, target: t, x: 10 + Math.random() * 75, y: 10 + Math.random() * 60, alive: true };
      setSpawns(prev => [...prev.slice(-15), s]);
      setTimeout(() => {
        setSpawns(prev => prev.map(sp => sp.id === s.id ? { ...sp, alive: false } : sp));
      }, 2000);
    }, config.spawnInterval);
    return stop;
  }, [state, config, stop]);

  useEffect(() => {
    if (state === "playing" && score >= config.goalScore) setState("done");
  }, [score, state, config.goalScore]);

  const tap = (s: Spawn) => {
    if (!s.alive || state !== "playing") return;
    setScore(sc => sc + s.target.points);
    setSpawns(prev => prev.map(sp => sp.id === s.id ? { ...sp, alive: false } : sp));
  };

  const won = score >= config.goalScore;

  const panel = (child: React.ReactNode) => (
    <div className="min-h-screen relative flex items-center justify-center"><Background />{child}</div>
  );

  if (state === "ready") return panel(
    <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-10 text-center max-w-md mx-4 shadow-2xl">
      <div className="text-7xl mb-4 select-none">{emoji}</div>
      <h1 className="text-3xl font-display font-bold text-foreground mb-3">{title}</h1>
      <p className="text-muted-foreground mb-6">Tap targets to reach {config.goalScore} points! Avoid bad items.</p>
      <button onClick={start} className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-xl hover:scale-105 transition-transform shadow-lg">👆 Start!</button>
      <button onClick={() => navigate(backPath)} className="block mx-auto mt-4 text-sm text-muted-foreground hover:text-foreground">← Back</button>
    </div>
  );

  if (state === "done") return panel(
    <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-10 text-center max-w-md mx-4 shadow-2xl">
      <div className="text-7xl mb-4 select-none">{won ? "🏆" : "⏰"}</div>
      <h1 className="text-3xl font-display font-bold text-foreground mb-2">{won ? "Great Job!" : "Time's Up!"}</h1>
      <div className="text-5xl font-bold text-primary mb-2">{score}</div>
      <p className="text-muted-foreground mb-6">Goal: {config.goalScore} points</p>
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
          <button onClick={() => { stop(); navigate(backPath); }} className="text-sm font-semibold text-primary hover:underline">← Back</button>
          <div className="flex items-center gap-4">
            <span className="score-display">⭐ {score}/{config.goalScore}</span>
            <span className={`timer-display ${time <= 10 ? "text-destructive" : ""}`}>⏱️ {time}s</span>
          </div>
        </div>
        <div className="relative w-full mx-auto rounded-3xl overflow-hidden border-2 border-border/50 bg-card/20 backdrop-blur-sm" style={{ height: "70vh" }}>
          {spawns.filter(s => s.alive).map(s => (
            <button key={s.id} onClick={() => tap(s)}
              className={`absolute transition-all duration-200 text-4xl md:text-5xl hover:scale-125 cursor-pointer select-none ${s.target.good ? "" : "grayscale"}`}
              style={{ left: `${s.x}%`, top: `${s.y}%`, animation: "bounce-in 0.3s ease-out" }}>
              {s.target.emoji}
            </button>
          ))}
          {spawns.filter(s => s.alive).length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-lg">Wait for targets...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TapEngine;
