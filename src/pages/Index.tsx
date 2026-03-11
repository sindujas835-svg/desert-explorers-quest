import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const worlds = [
  {
    id: "forest",
    emoji: "🌲",
    title: "Forest World",
    subtitle: "Explore the woodland kingdom",
    description: "Plant trees, protect wildlife, and become a Forest Guardian!",
    cardClass: "world-card-forest",
    path: "/forest",
    ageRange: "Ages 6–18",
    gameCount: 50,
  },
  {
    id: "ocean",
    emoji: "🌊",
    title: "Ocean World",
    subtitle: "Dive into the deep blue",
    description: "Clean oceans, save marine life, and become an Ocean Protector!",
    cardClass: "world-card-ocean",
    path: "/ocean",
    ageRange: "Ages 6–18",
    gameCount: 50,
  },
  {
    id: "desert",
    emoji: "🏜️",
    title: "Desert World",
    subtitle: "Survive the golden sands",
    description: "Find water, harness solar energy, and become a Desert Explorer!",
    cardClass: "world-card-desert",
    path: "/desert",
    ageRange: "Ages 6–18",
    gameCount: 50,
  },
];

const IndexBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; top: string; delay: string; duration: string; size: string; color: string }>>([]);

  useEffect(() => {
    const colors = [
      "hsl(145 63% 55%)", "hsl(200 75% 60%)", "hsl(38 92% 65%)",
      "hsl(145 50% 70%)", "hsl(195 60% 70%)", "hsl(42 90% 75%)",
      "hsl(160 60% 50%)", "hsl(220 70% 55%)", "hsl(30 80% 60%)",
    ];
    const p = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${10 + Math.random() * 80}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${4 + Math.random() * 6}s`,
      size: `${3 + Math.random() * 8}px`,
      color: colors[i % colors.length],
    }));
    setParticles(p);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated multi-world gradient */}
      <div className="absolute inset-0 eco-gradient-bg" />

      {/* Large pulsing orbs */}
      <div className="absolute w-[600px] h-[600px] rounded-full opacity-[0.1] blur-3xl eco-orb-forest" style={{ top: "-15%", left: "-10%" }} />
      <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.1] blur-3xl eco-orb-ocean" style={{ top: "25%", right: "-12%" }} />
      <div className="absolute w-[550px] h-[550px] rounded-full opacity-[0.08] blur-3xl eco-orb-desert" style={{ bottom: "-15%", left: "25%" }} />
      <div className="absolute w-[300px] h-[300px] rounded-full opacity-[0.06] blur-2xl eco-orb-accent" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />

      {/* Animated wave layers */}
      <div className="absolute bottom-0 left-0 right-0 h-40 eco-wave eco-wave-1" />
      <div className="absolute bottom-0 left-0 right-0 h-32 eco-wave eco-wave-2" />
      <div className="absolute bottom-0 left-0 right-0 h-24 eco-wave eco-wave-3" />

      {/* Nature icons carousel */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-around items-end">
        {["🌲", "🐠", "🌵", "🌳", "🐙", "🏜️", "🌴", "🐚", "🦋", "🌊"].map((e, i) => (
          <div key={i} className="tree-sway" style={{ animationDelay: `${i * 0.35}s` }}>
            <div className="text-2xl md:text-4xl opacity-[0.15] select-none">{e}</div>
          </div>
        ))}
      </div>

      {/* Sparkle particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="eco-sparkle"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
            background: p.color,
          }}
        />
      ))}

      {/* Floating creatures */}
      <div className="absolute eco-creature" style={{ top: "10%", left: "5%", animationDuration: "18s" }}>🕊️</div>
      <div className="absolute eco-creature" style={{ top: "6%", right: "15%", animationDuration: "22s", animationDelay: "3s" }}>🦋</div>
      <div className="absolute eco-creature" style={{ top: "18%", left: "55%", animationDuration: "25s", animationDelay: "6s" }}>🦅</div>
      <div className="absolute eco-creature" style={{ top: "30%", right: "30%", animationDuration: "20s", animationDelay: "9s" }}>🐬</div>
    </div>
  );
};

const Index = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <IndexBackground />

      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero */}
        <div className={`text-center mb-16 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-6xl md:text-8xl mb-4 select-none">🌍</div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
            EcoQuest
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-body">
            Learn to protect our planet through fun games and adventures!
          </p>
          <div className="badge-container mt-6 mx-auto w-fit">
            <span>🎮</span>
            <span>120+ Educational Games</span>
            <span>•</span>
            <span>Ages 6–18</span>
          </div>
        </div>

        {/* World cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {worlds.map((world, i) => (
            <div
              key={world.id}
              className={`world-card ${world.cardClass} transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
              onClick={() => navigate(world.path)}
            >
              <div className="text-6xl md:text-7xl mb-4 select-none">{world.emoji}</div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                {world.title}
              </h2>
              <p className="text-white/80 text-sm mb-4">{world.subtitle}</p>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {world.description}
              </p>
              <div className="flex items-center justify-between text-white/90 text-xs font-semibold">
                <span className="bg-white/20 px-3 py-1 rounded-full">{world.ageRange}</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">{world.gameCount} Games</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
