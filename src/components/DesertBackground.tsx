import { useEffect, useState } from "react";

const DesertBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: string; size: string }>>([]);

  useEffect(() => {
    const p = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 6}s`,
      size: `${2 + Math.random() * 5}px`,
    }));
    setParticles(p);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, hsl(35 80% 75%) 0%, hsl(38 92% 65%) 40%, hsl(30 50% 50%) 80%, hsl(25 40% 35%) 100%)"
      }} />

      {/* Dunes */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end opacity-25 select-none">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="tree-sway" style={{ animationDelay: `${i * 0.6}s` }}>
            <div className="text-4xl md:text-6xl">
              {i % 4 === 0 ? "🌵" : i % 4 === 1 ? "🏜️" : i % 4 === 2 ? "🐫" : "☀️"}
            </div>
          </div>
        ))}
      </div>

      {/* Sand particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="floating-particle"
          style={{
            left: p.left,
            bottom: "15%",
            animationDelay: p.delay,
            width: p.size,
            height: p.size,
            background: "hsl(38 80% 70%)",
          }}
        />
      ))}

      {/* Birds */}
      <div className="absolute top-[12%] left-[10%] animate-[float-up_10s_ease-in-out_infinite] text-2xl opacity-20">🦅</div>
      <div className="absolute top-[8%] right-[25%] animate-[float-up_12s_ease-in-out_infinite_2s] text-xl opacity-15">🦅</div>
    </div>
  );
};

export default DesertBackground;
