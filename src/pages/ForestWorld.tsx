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

const games: Record<string, Array<{ id: string; emoji: string; title: string; desc: string; path: string }>> = {
  "6-8": [
    { id: "tree-match", emoji: "🌳", title: "Tree Match Memory", desc: "Match leaves to their correct tree!", path: "/forest/tree-match" },
    { id: "animal-habitat", emoji: "🦊", title: "Animal Habitat Sorting", desc: "Place animals in the right habitat", path: "/forest/animal-habitat" },
    { id: "save-sapling", emoji: "🌱", title: "Save the Sapling", desc: "Keep your sapling hydrated!", path: "/forest/save-sapling" },
    { id: "forest-sounds", emoji: "🔊", title: "Forest Sound Guessing", desc: "Guess the animal by its sound", path: "/forest/forest-sounds" },
    { id: "clean-forest", emoji: "🗑️", title: "Clean the Forest", desc: "Remove trash to save the forest", path: "/forest/clean-forest" },
    { id: "seed-planting", emoji: "🌰", title: "Seed Planting Game", desc: "Plant seeds and grow trees", path: "/forest/seed-planting" },
    { id: "insect-sorting", emoji: "🐛", title: "Insect Sorting", desc: "Sort friendly vs harmful insects", path: "/forest/insect-sorting" },
    { id: "bird-nest", emoji: "🪺", title: "Build a Bird Nest", desc: "Assemble a cozy nest", path: "/forest/bird-nest" },
    { id: "hidden-animals", emoji: "🔍", title: "Find Hidden Animals", desc: "Spot animals in the forest", path: "/forest/hidden-animals" },
    { id: "rain-cycle", emoji: "🌧️", title: "Rain Cycle Animation", desc: "Complete the water cycle", path: "/forest/rain-cycle" },
  ],
  "9-11": [
    { id: "mini-forest", emoji: "🏗️", title: "Build Your Mini Forest", desc: "Create a balanced ecosystem", path: "/forest/mini-forest" },
    { id: "food-chain", emoji: "🔗", title: "Food Chain Builder", desc: "Build correct food chains", path: "/forest/food-chain" },
    { id: "fire-prevention", emoji: "🔥", title: "Fire Prevention Strategy", desc: "Protect the forest from fire", path: "/forest/fire-prevention" },
    { id: "poacher-catcher", emoji: "🕵️", title: "Poacher Catcher", desc: "Make ethical decisions", path: "/forest/poacher-catcher" },
    { id: "tree-growth", emoji: "📈", title: "Tree Growth Simulation", desc: "Grow a tree to full size", path: "/forest/tree-growth" },
    { id: "endangered-rescue", emoji: "🦁", title: "Endangered Species Rescue", desc: "Save endangered animals", path: "/forest/endangered-rescue" },
    { id: "ecosystem-balance", emoji: "⚖️", title: "Ecosystem Balance", desc: "Keep everything in balance", path: "/forest/ecosystem-balance" },
    { id: "water-cycle", emoji: "💧", title: "Water Cycle Adventure", desc: "Master the water cycle", path: "/forest/water-cycle" },
    { id: "reforestation", emoji: "🗺️", title: "Reforestation Strategy", desc: "Plan smart planting", path: "/forest/reforestation" },
    { id: "quiz-quest", emoji: "❓", title: "Forest Quiz Quest", desc: "Test your forest knowledge", path: "/forest/quiz-quest" },
  ],
  "12-14": [
    { id: "deforestation-sim", emoji: "📊", title: "Deforestation Simulator", desc: "Manage forest resources", path: "/forest/deforestation-sim" },
    { id: "conservation-budget", emoji: "💰", title: "Conservation Budget", desc: "Allocate funds wisely", path: "/forest/conservation-budget" },
    { id: "climate-challenge", emoji: "🌡️", title: "Climate Change Challenge", desc: "Fight climate impacts", path: "/forest/climate-challenge" },
    { id: "carbon-capture", emoji: "♻️", title: "Carbon Capture Strategy", desc: "Achieve net negative emissions", path: "/forest/carbon-capture" },
    { id: "invasive-species", emoji: "🌿", title: "Invasive Species Control", desc: "Defend the ecosystem", path: "/forest/invasive-species" },
    { id: "biodiversity", emoji: "🦋", title: "Biodiversity Tracker", desc: "Monitor species diversity", path: "/forest/biodiversity" },
    { id: "debate-mode", emoji: "🗣️", title: "Save vs Develop Debate", desc: "Make policy decisions", path: "/forest/debate-mode" },
    { id: "policy-builder", emoji: "📜", title: "Forest Policy Builder", desc: "Craft forest policies", path: "/forest/policy-builder" },
    { id: "sustainable-logging", emoji: "🪵", title: "Sustainable Logging", desc: "Balance logging and growth", path: "/forest/sustainable-logging" },
    { id: "guardian-challenge", emoji: "🛡️", title: "Guardian Leadership", desc: "Lead in crisis scenarios", path: "/forest/guardian-challenge" },
  ],
  "15-17": [
    { id: "economy-ecology", emoji: "💹", title: "Economy vs Ecology", desc: "Balance GDP and forest cover", path: "/forest/economy-ecology" },
    { id: "ngo-management", emoji: "🏢", title: "NGO Management", desc: "Run a conservation NGO", path: "/forest/ngo-management" },
    { id: "smart-forestry", emoji: "🛰️", title: "Smart Forestry (GIS)", desc: "Plan forest zones", path: "/forest/smart-forestry" },
    { id: "rewilding", emoji: "🐺", title: "Rewilding Strategy", desc: "Restore wild ecosystems", path: "/forest/rewilding" },
    { id: "carbon-trading", emoji: "📈", title: "Carbon Trading", desc: "Trade forest carbon credits", path: "/forest/carbon-trading" },
    { id: "crisis-mgmt", emoji: "🚒", title: "Crisis Management", desc: "Handle wildfire scenarios", path: "/forest/crisis-mgmt" },
    { id: "community", emoji: "🤝", title: "Community Engagement", desc: "Manage stakeholders", path: "/forest/community" },
    { id: "campaign", emoji: "📢", title: "Conservation Campaign", desc: "Build awareness campaigns", path: "/forest/campaign" },
    { id: "data-analysis", emoji: "📊", title: "Global Forest Data", desc: "Analyze deforestation data", path: "/forest/data-analysis" },
    { id: "sustainability", emoji: "🌱", title: "Sustainability Planner", desc: "Plan for 20 years", path: "/forest/sustainability" },
  ],
  "17-18": [
    { id: "treaty", emoji: "🌐", title: "International Forest Treaty", desc: "Negotiate global treaties", path: "/forest/treaty" },
    { id: "climate-negotiation", emoji: "🇺🇳", title: "Climate Negotiation", desc: "UN-style diplomacy", path: "/forest/climate-negotiation" },
    { id: "ecosystem-model", emoji: "🧬", title: "Ecosystem Modeling", desc: "Dynamic 30-year model", path: "/forest/ecosystem-model" },
    { id: "entrepreneurship", emoji: "💼", title: "Forestry Entrepreneurship", desc: "Build sustainable business", path: "/forest/entrepreneurship" },
    { id: "ai-reforestation", emoji: "🤖", title: "AI Reforestation", desc: "Predictive planting strategy", path: "/forest/ai-reforestation" },
    { id: "carbon-market", emoji: "💱", title: "Carbon Credit Market", desc: "Advanced carbon trading", path: "/forest/carbon-market" },
    { id: "legal-case", emoji: "⚖️", title: "Legal: Indigenous Land", desc: "Legal simulation", path: "/forest/legal-case" },
    { id: "restoration-plan", emoji: "🗺️", title: "Restoration Master Plan", desc: "National-level planning", path: "/forest/restoration-plan" },
    { id: "multi-country", emoji: "🌍", title: "Multi-Country Biodiversity", desc: "Global collaboration", path: "/forest/multi-country" },
    { id: "impact-assessment", emoji: "📋", title: "Impact Assessment", desc: "Environmental review", path: "/forest/impact-assessment" },
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
        <button onClick={() => navigate("/")} className="mb-6 text-sm font-semibold text-primary hover:underline flex items-center gap-2">← Back to Worlds</button>
        <div className={`text-center mb-10 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">🌲 Forest World</h1>
          <p className="text-muted-foreground">Choose your age group and start your adventure!</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {ageGroups.map((ag) => (
            <button key={ag.id} onClick={() => setActiveAge(ag.id)} className={`age-badge ${activeAge === ag.id ? "age-badge-active" : "age-badge-inactive"}`}>
              <span>{ag.label}</span>
              <span className="hidden md:inline text-xs opacity-70 ml-1">({ag.subtitle})</span>
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {currentGames.map((game, i) => (
            <div key={game.id} onClick={() => navigate(game.path)}
              className={`game-card transition-all duration-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="text-4xl mb-3 select-none">{game.emoji}</div>
              <h3 className="font-display font-bold text-foreground text-lg mb-1">{game.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{game.desc}</p>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">▶ Play Now</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForestWorld;
