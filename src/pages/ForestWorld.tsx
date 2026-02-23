import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ForestBackground from "@/components/ForestBackground";

const ageGroups = [
  { id: "6-8", label: "🌱 Ages 6–8", subtitle: "Little Explorers" },
  { id: "9-11", label: "🌿 Ages 9–11", subtitle: "Young Rangers" },
  { id: "12-14", label: "🌳 Ages 12–14", subtitle: "Eco Warriors" },
  { id: "15-17", label: "🌲 Ages 15–17", subtitle: "Green Leaders" },
  { id: "17-18", label: "🌍 Ages 17–18", subtitle: "Earth Champions" },
];

const games: Record<string, Array<{ id: string; emoji: string; title: string; desc: string; path?: string }>> = {
  "6-8": [
    { id: "tree-match", emoji: "🌳", title: "Tree Match Memory", desc: "Match leaves to their correct tree!", path: "/forest/tree-match" },
    { id: "animal-habitat", emoji: "🦊", title: "Animal Habitat Sorting", desc: "Place animals in the right habitat" },
    { id: "save-sapling", emoji: "🌱", title: "Save the Sapling", desc: "Keep your sapling hydrated!" },
    { id: "forest-sounds", emoji: "🔊", title: "Forest Sound Guessing", desc: "Guess the animal by its sound" },
    { id: "clean-forest", emoji: "🗑️", title: "Clean the Forest", desc: "Remove trash to save the forest" },
    { id: "seed-planting", emoji: "🌰", title: "Seed Planting Game", desc: "Plant seeds and grow trees" },
    { id: "insect-sorting", emoji: "🐛", title: "Insect Sorting", desc: "Sort friendly vs harmful insects" },
    { id: "bird-nest", emoji: "🪺", title: "Build a Bird Nest", desc: "Assemble a cozy nest" },
    { id: "hidden-animals", emoji: "🔍", title: "Find Hidden Animals", desc: "Spot animals in the forest" },
    { id: "rain-cycle", emoji: "🌧️", title: "Rain Cycle Animation", desc: "Complete the water cycle" },
  ],
  "9-11": [
    { id: "mini-forest", emoji: "🏗️", title: "Build Your Mini Forest", desc: "Create a balanced ecosystem" },
    { id: "food-chain", emoji: "🔗", title: "Food Chain Builder", desc: "Build correct food chains" },
    { id: "fire-prevention", emoji: "🔥", title: "Fire Prevention Strategy", desc: "Protect the forest from fire" },
    { id: "poacher-catcher", emoji: "🕵️", title: "Poacher Catcher", desc: "Make ethical decisions" },
    { id: "tree-growth", emoji: "📈", title: "Tree Growth Simulation", desc: "Grow a tree to full size" },
    { id: "endangered-rescue", emoji: "🦁", title: "Endangered Species Rescue", desc: "Save endangered animals" },
    { id: "ecosystem-balance", emoji: "⚖️", title: "Ecosystem Balance", desc: "Keep everything in balance" },
    { id: "water-cycle", emoji: "💧", title: "Water Cycle Adventure", desc: "Master the water cycle" },
    { id: "reforestation", emoji: "🗺️", title: "Reforestation Strategy", desc: "Plan smart planting" },
    { id: "quiz-quest", emoji: "❓", title: "Forest Quiz Quest", desc: "Test your forest knowledge" },
  ],
  "12-14": [
    { id: "deforestation-sim", emoji: "📊", title: "Deforestation Simulator", desc: "Manage forest resources" },
    { id: "conservation-budget", emoji: "💰", title: "Conservation Budget", desc: "Allocate funds wisely" },
    { id: "climate-challenge", emoji: "🌡️", title: "Climate Change Challenge", desc: "Fight climate impacts" },
    { id: "carbon-capture", emoji: "♻️", title: "Carbon Capture Strategy", desc: "Achieve net negative emissions" },
    { id: "invasive-species", emoji: "🌿", title: "Invasive Species Control", desc: "Defend the ecosystem" },
    { id: "biodiversity", emoji: "🦋", title: "Biodiversity Tracker", desc: "Monitor species diversity" },
    { id: "debate-mode", emoji: "🗣️", title: "Save vs Develop Debate", desc: "Make policy decisions" },
    { id: "policy-builder", emoji: "📜", title: "Forest Policy Builder", desc: "Craft forest policies" },
    { id: "sustainable-logging", emoji: "🪵", title: "Sustainable Logging", desc: "Balance logging and growth" },
    { id: "guardian-challenge", emoji: "🛡️", title: "Guardian Leadership", desc: "Lead in crisis scenarios" },
  ],
  "15-17": [
    { id: "economy-ecology", emoji: "💹", title: "Economy vs Ecology", desc: "Balance GDP and forest cover" },
    { id: "ngo-management", emoji: "🏢", title: "NGO Management", desc: "Run a conservation NGO" },
    { id: "smart-forestry", emoji: "🛰️", title: "Smart Forestry (GIS)", desc: "Plan forest zones" },
    { id: "rewilding", emoji: "🐺", title: "Rewilding Strategy", desc: "Restore wild ecosystems" },
    { id: "carbon-trading", emoji: "📈", title: "Carbon Trading", desc: "Trade forest carbon credits" },
    { id: "crisis-mgmt", emoji: "🚒", title: "Crisis Management", desc: "Handle wildfire scenarios" },
    { id: "community", emoji: "🤝", title: "Community Engagement", desc: "Manage stakeholders" },
    { id: "campaign", emoji: "📢", title: "Conservation Campaign", desc: "Build awareness campaigns" },
    { id: "data-analysis", emoji: "📊", title: "Global Forest Data", desc: "Analyze deforestation data" },
    { id: "sustainability", emoji: "🌱", title: "Sustainability Planner", desc: "Plan for 20 years" },
  ],
  "17-18": [
    { id: "treaty", emoji: "🌐", title: "International Forest Treaty", desc: "Negotiate global treaties" },
    { id: "climate-negotiation", emoji: "🇺🇳", title: "Climate Negotiation", desc: "UN-style diplomacy" },
    { id: "ecosystem-model", emoji: "🧬", title: "Ecosystem Modeling", desc: "Dynamic 30-year model" },
    { id: "entrepreneurship", emoji: "💼", title: "Forestry Entrepreneurship", desc: "Build sustainable business" },
    { id: "ai-reforestation", emoji: "🤖", title: "AI Reforestation", desc: "Predictive planting strategy" },
    { id: "carbon-market", emoji: "💱", title: "Carbon Credit Market", desc: "Advanced carbon trading" },
    { id: "legal-case", emoji: "⚖️", title: "Legal: Indigenous Land", desc: "Legal simulation" },
    { id: "restoration-plan", emoji: "🗺️", title: "Restoration Master Plan", desc: "National-level planning" },
    { id: "multi-country", emoji: "🌍", title: "Multi-Country Biodiversity", desc: "Global collaboration" },
    { id: "impact-assessment", emoji: "📋", title: "Impact Assessment", desc: "Environmental review" },
  ],
};

const ForestWorld = () => {
  const navigate = useNavigate();
  const [activeAge, setActiveAge] = useState("6-8");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  const currentGames = games[activeAge] || [];

  return (
    <div className="min-h-screen relative">
      <ForestBackground />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <button
          onClick={() => navigate("/")}
          className="mb-6 text-sm font-semibold text-primary hover:underline flex items-center gap-2"
        >
          ← Back to Worlds
        </button>

        <div className={`text-center mb-10 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
            🌲 Forest World
          </h1>
          <p className="text-muted-foreground">Choose your age group and start your adventure!</p>
        </div>

        {/* Age group tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {ageGroups.map((ag) => (
            <button
              key={ag.id}
              onClick={() => setActiveAge(ag.id)}
              className={`age-badge ${activeAge === ag.id ? "age-badge-active" : "age-badge-inactive"}`}
            >
              <span>{ag.label}</span>
              <span className="hidden md:inline text-xs opacity-70 ml-1">({ag.subtitle})</span>
            </button>
          ))}
        </div>

        {/* Games grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {currentGames.map((game, i) => (
            <div
              key={game.id}
              onClick={() => game.path && navigate(game.path)}
              className={`game-card ${!game.path ? "game-card-locked" : ""} transition-all duration-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-4xl mb-3 select-none">{game.emoji}</div>
              <h3 className="font-display font-bold text-foreground text-lg mb-1">{game.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{game.desc}</p>
              {game.path ? (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
                  ▶ Play Now
                </span>
              ) : (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-muted text-muted-foreground">
                  🔒 Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForestWorld;
