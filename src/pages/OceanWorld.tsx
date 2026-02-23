import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OceanBackground from "@/components/OceanBackground";

const ageGroups = [
  { id: "6-8", label: "🐠 Ages 6–8", subtitle: "Ocean Protectors" },
  { id: "9-11", label: "🐙 Ages 9–11", subtitle: "Young Ocean Rangers" },
  { id: "12-14", label: "🧠 Ages 12–14", subtitle: "Advanced Strategy" },
  { id: "15-17", label: "🌍 Ages 15–17", subtitle: "Pre-Policy" },
  { id: "17-18", label: "🌐 Ages 17–18", subtitle: "Global Policy" },
];

const games: Record<string, Array<{ id: string; emoji: string; title: string; desc: string; path?: string }>> = {
  "6-8": [
    { id: "ocean-cleanup", emoji: "🧹", title: "Ocean Cleanup Catch", desc: "Remove floating trash before time runs out!" },
    { id: "fish-plastic", emoji: "🐟", title: "Fish vs Plastic Sorting", desc: "Sort fish from plastic items" },
    { id: "coral-color", emoji: "🪸", title: "Coral Color Puzzle", desc: "Match colors to restore coral reef" },
    { id: "build-reef", emoji: "🏗️", title: "Build a Healthy Reef", desc: "Add correct reef elements" },
    { id: "sea-creature-match", emoji: "🦑", title: "Sea Creature Matching", desc: "Match sea creatures in pairs" },
    { id: "turtle-maze", emoji: "🐢", title: "Save the Turtle Maze", desc: "Guide turtle safely to the exit" },
    { id: "trash-pop", emoji: "💥", title: "Floating Trash Pop", desc: "Tap to pop 20 trash items" },
    { id: "ocean-sound", emoji: "🔊", title: "Ocean Sound Quiz", desc: "Guess which sea animal made the sound" },
    { id: "water-sorting", emoji: "💧", title: "Healthy vs Dirty Water", desc: "Classify water quality" },
    { id: "submarine", emoji: "🚢", title: "Mini Submarine Explorer", desc: "Find 5 hidden ocean treasures" },
  ],
  "9-11": [
    { id: "coastal-cleanup", emoji: "🏖️", title: "Coastal Cleanup Strategy", desc: "Assign volunteers to clean the coast" },
    { id: "overfishing", emoji: "🐟", title: "Overfishing Balance", desc: "Manage fish population sustainably" },
    { id: "coral-bleaching", emoji: "🌡️", title: "Coral Bleaching Prevention", desc: "Manage ocean temperature" },
    { id: "marine-food-chain", emoji: "🔗", title: "Marine Food Chain Builder", desc: "Build correct ocean food chains" },
    { id: "oil-spill", emoji: "🛢️", title: "Oil Spill Response", desc: "Manage oil spill cleanup" },
    { id: "plastic-policy", emoji: "📜", title: "Plastic Production Policy", desc: "Make policy decisions on plastic" },
    { id: "turtle-migration", emoji: "🐢", title: "Sea Turtle Migration", desc: "Guide turtle through safe path" },
    { id: "marine-protected", emoji: "🗺️", title: "Marine Protected Areas", desc: "Plan ocean zoning strategy" },
    { id: "tourism-manager", emoji: "🏝️", title: "Underwater Tourism Manager", desc: "Balance tourism and reef health" },
    { id: "storm-defense", emoji: "🌊", title: "Ocean Storm Defense", desc: "Protect coast from storms" },
  ],
  "12-14": [
    { id: "acidification", emoji: "🧪", title: "Ocean Acidification Simulator", desc: "Manage ocean chemistry balance" },
    { id: "fisheries-mgmt", emoji: "🎣", title: "Sustainable Fisheries", desc: "Set fishing quotas wisely" },
    { id: "carbon-sink", emoji: "🌿", title: "Marine Carbon Sink Strategy", desc: "Build blue carbon ecosystems" },
    { id: "dead-zone", emoji: "☠️", title: "Dead Zone Prevention", desc: "Prevent nutrient runoff damage" },
    { id: "plastic-trade", emoji: "🌐", title: "Global Plastic Trade", desc: "Manage international waste trade" },
    { id: "offshore-wind", emoji: "💨", title: "Offshore Wind vs Marine Life", desc: "Plan marine spatial layout" },
    { id: "climate-refugee", emoji: "🏠", title: "Climate Refugee Coastal", desc: "Plan for sea-level rise" },
    { id: "shark-conservation", emoji: "🦈", title: "Shark Conservation", desc: "Balance predator-prey ecosystem" },
    { id: "arctic-ice", emoji: "🧊", title: "Arctic Ocean Ice Melt", desc: "Manage polar ecosystem" },
    { id: "marine-treaty", emoji: "📝", title: "International Marine Treaty", desc: "Negotiate ocean agreements" },
  ],
  "15-17": [
    { id: "global-ocean-economy", emoji: "💹", title: "Global Ocean Economy", desc: "20-year ocean macro-simulation" },
    { id: "deep-sea-mining", emoji: "⛏️", title: "Deep Sea Mining Decisions", desc: "Policy on deep-sea mining" },
    { id: "fisheries-conflict", emoji: "⚔️", title: "International Fisheries Conflict", desc: "Manage shared ocean territory" },
    { id: "ocean-carbon-credit", emoji: "📈", title: "Ocean Carbon Credit Market", desc: "Blue carbon trading simulation" },
    { id: "circular-plastic", emoji: "♻️", title: "Plastic Circular Economy", desc: "Build circular plastic economy" },
    { id: "marine-heatwave", emoji: "🌡️", title: "Marine Heatwave Prediction", desc: "Climate forecasting simulation" },
    { id: "coastal-megacity", emoji: "🏙️", title: "Coastal Megacity Adaptation", desc: "Urban coastal planning" },
    { id: "high-seas-treaty", emoji: "📋", title: "High Seas Biodiversity Treaty", desc: "International governance" },
    { id: "ocean-tech", emoji: "🤖", title: "Ocean Tech Innovation Lab", desc: "R&D innovation simulation" },
    { id: "fisheries-collapse", emoji: "📉", title: "Climate Migration & Fisheries", desc: "Crisis-response scenario" },
  ],
  "17-18": [
    { id: "global-governance", emoji: "🌐", title: "Global Ocean Governance", desc: "30-year governance simulation" },
    { id: "climate-ocean-feedback", emoji: "🔄", title: "Climate–Ocean Feedback Model", desc: "Climate-ocean interaction" },
    { id: "blue-economy", emoji: "💰", title: "Global Blue Economy Strategy", desc: "Macroeconomic ocean strategy" },
    { id: "carbon-blue-integration", emoji: "🌿", title: "Carbon + Blue Carbon Market", desc: "Global carbon market simulator" },
    { id: "high-seas-negotiation", emoji: "🤝", title: "High Seas Treaty Negotiation", desc: "Diplomatic negotiation" },
    { id: "biodiversity-collapse", emoji: "⚠️", title: "Biodiversity Collapse Scenario", desc: "Collapse-risk simulator" },
    { id: "arctic-strategic", emoji: "🧊", title: "Arctic Ocean Strategic Sim", desc: "Geopolitical Arctic simulation" },
    { id: "adaptation-finance", emoji: "💵", title: "Climate Adaptation Finance", desc: "Climate finance allocation" },
    { id: "ai-monitoring", emoji: "🛰️", title: "AI Ocean Monitoring", desc: "Predictive enforcement dashboard" },
    { id: "planetary-boundary", emoji: "🌍", title: "Planetary Boundary Model", desc: "Planetary-boundary integration" },
  ],
};

const OceanWorld = () => {
  const navigate = useNavigate();
  const [activeAge, setActiveAge] = useState("6-8");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  const currentGames = games[activeAge] || [];

  return (
    <div className="min-h-screen relative">
      <OceanBackground />

      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate("/")}
          className="mb-6 text-sm font-semibold text-white/80 hover:text-white flex items-center gap-2"
        >
          ← Back to Worlds
        </button>

        <div className={`text-center mb-10 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
            🌊 Ocean World
          </h1>
          <p className="text-white/80">Dive deep and protect our oceans!</p>
        </div>

        {/* Age group tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {ageGroups.map((ag) => (
            <button
              key={ag.id}
              onClick={() => setActiveAge(ag.id)}
              className={`px-5 py-3 rounded-full font-bold cursor-pointer transition-all duration-300 text-sm border-2 ${
                activeAge === ag.id
                  ? "bg-white/30 text-white border-white/60 shadow-lg"
                  : "bg-white/10 text-white/80 border-white/20 hover:border-white/40"
              }`}
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
              className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-500 ${
                game.path
                  ? "cursor-pointer hover:scale-[1.02] hover:shadow-xl"
                  : "opacity-70 cursor-default"
              } ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: `${i * 60}ms`,
                background: "hsl(210 80% 20% / 0.6)",
                backdropFilter: "blur(8px)",
                border: "1px solid hsl(200 75% 45% / 0.3)",
              }}
            >
              <div className="text-4xl mb-3 select-none">{game.emoji}</div>
              <h3 className="font-display font-bold text-white text-lg mb-1">{game.title}</h3>
              <p className="text-white/60 text-sm mb-3">{game.desc}</p>
              {game.path ? (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white">
                  ▶ Play Now
                </span>
              ) : (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white/50">
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

export default OceanWorld;
