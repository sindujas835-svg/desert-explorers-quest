import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizConfig } from "../types";

interface Props { config: QuizConfig; title: string; emoji: string; backPath: string; Background: React.ComponentType; }

const QuizEngine = ({ config, title, emoji, backPath, Background }: Props) => {
  const navigate = useNavigate();
  const [state, setState] = useState<"ready"|"playing"|"done">("ready");
  const [qi, setQi] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number|null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const q = config.questions[qi];
  const total = config.questions.length;

  const pick = (i: number) => {
    if (showAnswer) return;
    setSelected(i);
    setShowAnswer(true);
    if (i === q.correct) setScore(s => s + 10);
  };

  const next = () => {
    if (qi + 1 >= total) { setState("done"); return; }
    setQi(qi + 1);
    setSelected(null);
    setShowAnswer(false);
  };

  const restart = () => { setQi(0); setScore(0); setSelected(null); setShowAnswer(false); setState("playing"); };

  const panel = (child: React.ReactNode) => (
    <div className="min-h-screen relative flex items-center justify-center"><Background />{child}</div>
  );

  if (state === "ready") return panel(
    <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-10 text-center max-w-md mx-4 shadow-2xl">
      <div className="text-7xl mb-4 select-none">{emoji}</div>
      <h1 className="text-3xl font-display font-bold text-foreground mb-3">{title}</h1>
      <p className="text-muted-foreground mb-6">Answer {total} questions to test your knowledge!</p>
      <button onClick={() => setState("playing")} className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-xl hover:scale-105 transition-transform shadow-lg">🧠 Start Quiz!</button>
      <button onClick={() => navigate(backPath)} className="block mx-auto mt-4 text-sm text-muted-foreground hover:text-foreground">← Back</button>
    </div>
  );

  if (state === "done") return panel(
    <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-10 text-center max-w-md mx-4 shadow-2xl">
      <div className="text-7xl mb-4 select-none">{score >= total * 7 ? "🏆" : "📚"}</div>
      <h1 className="text-3xl font-display font-bold text-foreground mb-2">Quiz Complete!</h1>
      <div className="text-5xl font-bold text-primary mb-2">{score}/{total * 10}</div>
      <p className="text-muted-foreground mb-6">{score >= total * 7 ? "Excellent work!" : "Keep learning!"}</p>
      <div className="flex gap-3 justify-center">
        <button onClick={restart} className="px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform">🔄 Retry</button>
        <button onClick={() => navigate(backPath)} className="px-6 py-3 rounded-2xl bg-muted text-foreground font-bold hover:scale-105 transition-transform">← Back</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative">
      <Background />
      <div className="container mx-auto px-4 py-6 max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => navigate(backPath)} className="text-sm font-semibold text-primary hover:underline">← Back</button>
          <span className="score-display">⭐ {score}</span>
          <span className="text-sm font-semibold text-muted-foreground">{qi + 1}/{total}</span>
        </div>
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-6">
            <span className="text-4xl mb-2 block select-none">{emoji}</span>
            <h2 className="text-xl font-bold text-foreground">{q.question}</h2>
          </div>
          <div className="space-y-3 mb-6">
            {q.options.map((opt, i) => (
              <button key={i} onClick={() => pick(i)} disabled={showAnswer}
                className={`w-full text-left px-5 py-4 rounded-2xl font-semibold transition-all border-2 ${
                  showAnswer
                    ? i === q.correct ? "bg-green-100 border-green-500 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                      i === selected ? "bg-red-100 border-red-500 text-red-800 dark:bg-red-900/30 dark:text-red-300" :
                      "bg-muted border-transparent text-muted-foreground"
                    : "bg-card border-border hover:border-primary/50 hover:shadow-md text-foreground cursor-pointer"
                }`}>
                {opt}
              </button>
            ))}
          </div>
          {showAnswer && (
            <div className="mb-4">
              <p className={`text-sm font-semibold mb-1 ${selected === q.correct ? "text-green-600" : "text-red-600"}`}>
                {selected === q.correct ? "✅ Correct!" : "❌ Wrong!"}
              </p>
              <p className="text-sm text-muted-foreground">{q.explanation}</p>
            </div>
          )}
          {showAnswer && (
            <button onClick={next} className="w-full py-3 rounded-2xl bg-primary text-primary-foreground font-bold hover:scale-[1.02] transition-transform">
              {qi + 1 >= total ? "See Results" : "Next Question →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizEngine;
