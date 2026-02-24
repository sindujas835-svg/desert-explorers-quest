import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SimConfig } from "../types";

interface Props { config: SimConfig; title: string; emoji: string; backPath: string; Background: React.ComponentType; }

const SimulationEngine = ({ config, title, emoji, backPath, Background }: Props) => {
  const navigate = useNavigate();
  const [state, setState] = useState<"ready"|"playing"|"done">("ready");
  const [vars, setVars] = useState(config.variables.map(v => ({ ...v })));
  const [round, setRound] = useState(1);
  const [log, setLog] = useState<string[]>([]);
  const [lastAction, setLastAction] = useState<string|null>(null);

  const start = useCallback(() => {
    setVars(config.variables.map(v => ({ ...v })));
    setRound(1);
    setLog([]);
    setLastAction(null);
    setState("playing");
  }, [config]);

  const act = (action: typeof config.actions[0]) => {
    if (state !== "playing") return;
    const next = vars.map(v => {
      const eff = action.effects[v.name] || 0;
      return { ...v, value: Math.max(0, Math.min(100, v.value + eff)) };
    });
    // Random event
    const eventRoll = Math.random();
    let eventMsg = "";
    if (eventRoll < 0.2) {
      const ri = Math.floor(Math.random() * next.length);
      const delta = Math.floor(Math.random() * 15) - 7;
      next[ri].value = Math.max(0, Math.min(100, next[ri].value + delta));
      eventMsg = delta > 0 ? ` 🎉 Bonus: ${next[ri].name} +${delta}!` : ` ⚠️ Event: ${next[ri].name} ${delta}`;
    }
    setVars(next);
    setLog(l => [...l, `R${round}: ${action.emoji} ${action.name}${eventMsg}`]);
    setLastAction(`${action.emoji} ${action.name}${eventMsg}`);

    const failed = next.some(v => v.value <= 0);
    if (failed || round >= config.rounds) {
      setState("done");
    } else {
      setRound(r => r + 1);
    }
  };

  const won = vars.every(v => v.value > 20);

  const panel = (child: React.ReactNode) => (
    <div className="min-h-screen relative flex items-center justify-center"><Background />{child}</div>
  );

  if (state === "ready") return panel(
    <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-10 text-center max-w-md mx-4 shadow-2xl">
      <div className="text-7xl mb-4 select-none">{emoji}</div>
      <h1 className="text-3xl font-display font-bold text-foreground mb-3">{title}</h1>
      <p className="text-muted-foreground mb-2">Manage resources over {config.rounds} rounds.</p>
      <p className="text-sm text-muted-foreground mb-6">{config.winText}</p>
      <button onClick={start} className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-xl hover:scale-105 transition-transform shadow-lg">🎯 Start!</button>
      <button onClick={() => navigate(backPath)} className="block mx-auto mt-4 text-sm text-muted-foreground hover:text-foreground">← Back</button>
    </div>
  );

  if (state === "done") return panel(
    <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-10 text-center max-w-md mx-4 shadow-2xl">
      <div className="text-7xl mb-4 select-none">{won ? "🏆" : "💀"}</div>
      <h1 className="text-3xl font-display font-bold text-foreground mb-2">{won ? "Success!" : "Failed!"}</h1>
      <div className="space-y-2 mb-4">
        {vars.map(v => (
          <div key={v.name} className="flex items-center gap-2">
            <span className="text-lg">{v.emoji}</span>
            <span className="text-sm font-semibold w-24 text-left text-foreground">{v.name}</span>
            <div className="flex-1 h-3 rounded-full bg-muted overflow-hidden">
              <div className={`h-full rounded-full transition-all ${v.value > 50 ? "bg-green-500" : v.value > 20 ? "bg-yellow-500" : "bg-red-500"}`} style={{ width: `${v.value}%` }} />
            </div>
            <span className="text-sm font-bold w-8 text-right text-foreground">{v.value}</span>
          </div>
        ))}
      </div>
      <p className="text-muted-foreground mb-6">Completed {round}/{config.rounds} rounds</p>
      <div className="flex gap-3 justify-center">
        <button onClick={start} className="px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform">🔄 Again</button>
        <button onClick={() => navigate(backPath)} className="px-6 py-3 rounded-2xl bg-muted text-foreground font-bold hover:scale-105 transition-transform">← Back</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative">
      <Background />
      <div className="container mx-auto px-4 py-4 max-w-2xl">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <button onClick={() => navigate(backPath)} className="text-sm font-semibold text-primary hover:underline">← Back</button>
          <span className="text-sm font-bold text-foreground">Round {round}/{config.rounds}</span>
        </div>
        <h2 className="text-center text-lg font-bold text-foreground mb-4">{emoji} {title}</h2>
        {/* Variables */}
        <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg mb-4 space-y-3">
          {vars.map(v => (
            <div key={v.name} className="flex items-center gap-2">
              <span className="text-xl">{v.emoji}</span>
              <span className="text-sm font-semibold w-28 text-foreground">{v.name}</span>
              <div className="flex-1 h-4 rounded-full bg-muted overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-500 ${v.value > 50 ? "bg-green-500" : v.value > 20 ? "bg-yellow-500" : "bg-red-500"}`} style={{ width: `${v.value}%` }} />
              </div>
              <span className="text-sm font-bold w-8 text-right text-foreground">{v.value}</span>
            </div>
          ))}
        </div>
        {lastAction && (
          <p className="text-center text-sm font-semibold text-muted-foreground mb-3">{lastAction}</p>
        )}
        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          {config.actions.map(a => (
            <button key={a.name} onClick={() => act(a)}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 text-left border-2 border-border hover:border-primary hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">{a.emoji}</span>
                <span className="font-bold text-foreground text-sm">{a.name}</span>
              </div>
              <p className="text-xs text-muted-foreground">{a.desc}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {Object.entries(a.effects).map(([k, v]) => (
                  <span key={k} className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${v > 0 ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>
                    {k} {v > 0 ? "+" : ""}{v}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
        {/* Log */}
        {log.length > 0 && (
          <div className="mt-4 bg-card/60 rounded-xl p-3 max-h-32 overflow-y-auto">
            {log.slice(-5).map((l, i) => <p key={i} className="text-xs text-muted-foreground">{l}</p>)}
          </div>
        )}
      </div>
    </div>
  );
};

export default SimulationEngine;
