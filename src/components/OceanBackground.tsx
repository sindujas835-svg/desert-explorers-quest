import { useEffect, useState } from "react";

const OceanBackground = () => {
  const [bubbles, setBubbles] = useState<Array<{ id: number; left: string; delay: string; size: string }>>([]);

  useEffect(() => {
    const b = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: `${3 + Math.random() * 8}px`,
    }));
    setBubbles(b);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, hsl(195 80% 75%) 0%, hsl(200 75% 55%) 30%, hsl(210 80% 40%) 70%, hsl(220 70% 25%) 100%)"
      }} />

      {/* Waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="text-5xl md:text-7xl opacity-20 select-none flex justify-around items-end">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="tree-sway" style={{ animationDelay: `${i * 0.7}s` }}>
              {i % 3 === 0 ? "🐠" : i % 3 === 1 ? "🐙" : "🐚"}
            </div>
          ))}
        </div>
      </div>

      {/* Coral bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end opacity-25 select-none">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="text-3xl md:text-5xl tree-sway" style={{ animationDelay: `${i * 0.3}s` }}>
            {i % 4 === 0 ? "🪸" : i % 4 === 1 ? "🌊" : i % 4 === 2 ? "🐡" : "🦀"}
          </div>
        ))}
      </div>

      {/* Bubbles */}
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="floating-particle"
          style={{
            left: b.left,
            bottom: "10%",
            animationDelay: b.delay,
            width: b.size,
            height: b.size,
            background: "hsl(200 80% 80%)",
            borderRadius: "50%",
          }}
        />
      ))}

      {/* Fish */}
      <div className="absolute top-[25%] left-0 animate-[float-up_9s_ease-in-out_infinite] text-2xl opacity-25">🐋</div>
      <div className="absolute top-[40%] right-[15%] animate-[float-up_7s_ease-in-out_infinite_3s] text-xl opacity-20">🐬</div>
    </div>
  );
};

export default OceanBackground;
