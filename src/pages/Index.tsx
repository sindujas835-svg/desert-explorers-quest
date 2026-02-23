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

const Index = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10" style={{
        background: "linear-gradient(160deg, hsl(195 80% 80%) 0%, hsl(145 40% 85%) 40%, hsl(45 30% 93%) 100%)"
      }} />

      {/* Floating decorations */}
      <div className="fixed top-10 left-10 text-5xl opacity-20 tree-sway select-none">🌿</div>
      <div className="fixed top-20 right-16 text-4xl opacity-15 tree-sway select-none" style={{ animationDelay: "1s" }}>🦋</div>
      <div className="fixed bottom-20 left-20 text-6xl opacity-15 tree-sway select-none" style={{ animationDelay: "2s" }}>🌻</div>

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
