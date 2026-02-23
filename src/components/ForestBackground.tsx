import { useEffect, useState } from "react";

const ForestBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: string; size: string }>>([]);

  useEffect(() => {
    const p = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: `${4 + Math.random() * 8}px`,
    }));
    setParticles(p);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, hsl(195 80% 75%) 0%, hsl(190 60% 85%) 30%, hsl(145 40% 80%) 60%, hsl(145 50% 65%) 100%)"
      }} />
      
      {/* Trees */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="tree-sway" style={{ animationDelay: `${i * 0.5}s` }}>
            <div className="text-5xl md:text-7xl opacity-30 select-none">
              {i % 3 === 0 ? "🌲" : i % 3 === 1 ? "🌳" : "🌴"}
            </div>
          </div>
        ))}
      </div>

      {/* Sparkle particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="floating-particle bg-amber-light"
          style={{
            left: p.left,
            bottom: "20%",
            animationDelay: p.delay,
            width: p.size,
            height: p.size,
          }}
        />
      ))}

      {/* Birds */}
      <div className="absolute top-[15%] left-0 animate-[float-up_8s_ease-in-out_infinite] text-2xl opacity-30">🕊️</div>
      <div className="absolute top-[10%] right-[20%] animate-[float-up_10s_ease-in-out_infinite_2s] text-xl opacity-20">🕊️</div>
    </div>
  );
};

export default ForestBackground;
