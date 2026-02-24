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

const games: Record<string, Array<{ id: string; emoji: string; title: string; desc: string; path: string }>> = {
  "6-8": [
    { id: "ocean-cleanup", emoji: "🧹", title: "Ocean Cleanup Catch", desc: "Remove floating trash before time runs out!", path: "/ocean/ocean-cleanup" },
    { id: "fish-plastic", emoji: "🐟", title: "Fish vs Plastic Sorting", desc: "Sort fish from plastic items", path: "/ocean/fish-plastic" },
    { id: "coral-color", emoji: "🪸", title: "Coral Color Puzzle", desc: "Match colors to restore coral reef", path: "/ocean/coral-color" },
    { id: "build-reef", emoji: "🏗️", title: "Build a Healthy Reef", desc: "Add correct reef elements", path: "/ocean/build-reef" },
    { id: "sea-creature-match", emoji: "🦑", title: "Sea Creature Matching", desc: "Match sea creatures in pairs", path: "/ocean/sea-creature-match" },
    { id: "turtle-maze", emoji: "🐢", title: "Save the Turtle Maze", desc: "Guide turtle safely to the exit", path: "/ocean/turtle-maze" },
    { id: "trash-pop", emoji: "💥", title: "Floating Trash Pop", desc: "Tap to pop 20 trash items", path: "/ocean/trash-pop" },
    { id: "ocean-sound", emoji: "🔊", title: "Ocean Sound Quiz", desc: "Guess which sea animal made the sound", path: "/ocean/ocean-sound" },
    { id: "water-sorting", emoji: "💧", title: "Healthy vs Dirty Water", desc: "Classify water quality", path: "/ocean/water-sorting" },
    { id: "submarine", emoji: "🚢", title: "Mini Submarine Explorer", desc: "Find 5 hidden ocean treasures", path: "/ocean/submarine" },
  ],
  "9-11": [
    { id: "coastal-cleanup", emoji: "🏖️", title: "Coastal Cleanup Strategy", desc: "Assign volunteers to clean the coast", path: "/ocean/coastal-cleanup" },
    { id: "overfishing", emoji: "🐟", title: "Overfishing Balance", desc: "Manage fish population sustainably", path: "/ocean/overfishing" },
    { id: "coral-bleaching", emoji: "🌡️", title: "Coral Bleaching Prevention", desc: "Manage ocean temperature", path: "/ocean/coral-bleaching" },
    { id: "marine-food-chain", emoji: "🔗", title: "Marine Food Chain Builder", desc: "Build correct ocean food chains", path: "/ocean/marine-food-chain" },
    { id: "oil-spill", emoji: "🛢️", title: "Oil Spill Response", desc: "Manage oil spill cleanup", path: "/ocean/oil-spill" },
    { id: "plastic-policy", emoji: "📜", title: "Plastic Production Policy", desc: "Make policy decisions on plastic", path: "/ocean/plastic-policy" },
    { id: "turtle-migration", emoji: "🐢", title: "Sea Turtle Migration", desc: "Guide turtle through safe path", path: "/ocean/turtle-migration" },
    { id: "marine-protected", emoji: "🗺️", title: "Marine Protected Areas", desc: "Plan ocean zoning strategy", path: "/ocean/marine-protected" },
    { id: "tourism-manager", emoji: "🏝️", title: "Underwater Tourism Manager", desc: "Balance tourism and reef health", path: "/ocean/tourism-manager" },
    { id: "storm-defense", emoji: "🌊", title: "Ocean Storm Defense", desc: "Protect coast from storms", path: "/ocean/storm-defense" },
  ],
  "12-14": [
    { id: "acidification", emoji: "🧪", title: "Ocean Acidification Simulator", desc: "Manage ocean chemistry balance", path: "/ocean/acidification" },
    { id: "fisheries-mgmt", emoji: "🎣", title: "Sustainable Fisheries", desc: "Set fishing quotas wisely", path: "/ocean/fisheries-mgmt" },
    { id: "carbon-sink", emoji: "🌿", title: "Marine Carbon Sink Strategy", desc: "Build blue carbon ecosystems", path: "/ocean/carbon-sink" },
    { id: "dead-zone", emoji: "☠️", title: "Dead Zone Prevention", desc: "Prevent nutrient runoff damage", path: "/ocean/dead-zone" },
    { id: "plastic-trade", emoji: "🌐", title: "Global Plastic Trade", desc: "Manage international waste trade", path: "/ocean/plastic-trade" },
    { id: "offshore-wind", emoji: "💨", title: "Offshore Wind vs Marine Life", desc: "Plan marine spatial layout", path: "/ocean/offshore-wind" },
    { id: "climate-refugee", emoji: "🏠", title: "Climate Refugee Coastal", desc: "Plan for sea-level rise", path: "/ocean/climate-refugee" },
    { id: "shark-conservation", emoji: "🦈", title: "Shark Conservation", desc: "Balance predator-prey ecosystem", path: "/ocean/shark-conservation" },
    { id: "arctic-ice", emoji: "🧊", title: "Arctic Ocean Ice Melt", desc: "Manage polar ecosystem", path: "/ocean/arctic-ice" },
    { id: "marine-treaty", emoji: "📝", title: "International Marine Treaty", desc: "Negotiate ocean agreements", path: "/ocean/marine-treaty" },
  ],
  "15-17": [
    { id: "global-ocean-economy", emoji: "💹", title: "Global Ocean Economy", desc: "20-year ocean macro-simulation", path: "/ocean/global-ocean-economy" },
    { id: "deep-sea-mining", emoji: "⛏️", title: "Deep Sea Mining Decisions", desc: "Policy on deep-sea mining", path: "/ocean/deep-sea-mining" },
    { id: "fisheries-conflict", emoji: "⚔️", title: "International Fisheries Conflict", desc: "Manage shared ocean territory", path: "/ocean/fisheries-conflict" },
    { id: "ocean-carbon-credit", emoji: "📈", title: "Ocean Carbon Credit Market", desc: "Blue carbon trading simulation", path: "/ocean/ocean-carbon-credit" },
    { id: "circular-plastic", emoji: "♻️", title: "Plastic Circular Economy", desc: "Build circular plastic economy", path: "/ocean/circular-plastic" },
    { id: "marine-heatwave", emoji: "🌡️", title: "Marine Heatwave Prediction", desc: "Climate forecasting simulation", path: "/ocean/marine-heatwave" },
    { id: "coastal-megacity", emoji: "🏙️", title: "Coastal Megacity Adaptation", desc: "Urban coastal planning", path: "/ocean/coastal-megacity" },
    { id: "high-seas-treaty", emoji: "📋", title: "High Seas Biodiversity Treaty", desc: "International governance", path: "/ocean/high-seas-treaty" },
    { id: "ocean-tech", emoji: "🤖", title: "Ocean Tech Innovation Lab", desc: "R&D innovation simulation", path: "/ocean/ocean-tech" },
    { id: "fisheries-collapse", emoji: "📉", title: "Climate Migration & Fisheries", desc: "Crisis-response scenario", path: "/ocean/fisheries-collapse" },
  ],
  "17-18": [
    { id: "global-governance", emoji: "🌐", title: "Global Ocean Governance", desc: "30-year governance simulation", path: "/ocean/global-governance" },
    { id: "climate-ocean-feedback", emoji: "🔄", title: "Climate–Ocean Feedback Model", desc: "Climate-ocean interaction", path: "/ocean/climate-ocean-feedback" },
    { id: "blue-economy", emoji: "💰", title: "Global Blue Economy Strategy", desc: "Macroeconomic ocean strategy", path: "/ocean/blue-economy" },
    { id: "carbon-blue-integration", emoji: "🌿", title: "Carbon + Blue Carbon Market", desc: "Global carbon market simulator", path: "/ocean/carbon-blue-integration" },
    { id: "high-seas-negotiation", emoji: "🤝", title: "High Seas Treaty Negotiation", desc: "Diplomatic negotiation", path: "/ocean/high-seas-negotiation" },
    { id: "biodiversity-collapse", emoji: "⚠️", title: "Biodiversity Collapse Scenario", desc: "Collapse-risk simulator", path: "/ocean/biodiversity-collapse" },
    { id: "arctic-strategic", emoji: "🧊", title: "Arctic Ocean Strategic Sim", desc: "Geopolitical Arctic simulation", path: "/ocean/arctic-strategic" },
    { id: "adaptation-finance", emoji: "💵", title: "Climate Adaptation Finance", desc: "Climate finance allocation", path: "/ocean/adaptation-finance" },
    { id: "ai-monitoring", emoji: "🛰️", title: "AI Ocean Monitoring", desc: "Predictive enforcement dashboard", path: "/ocean/ai-monitoring" },
    { id: "planetary-boundary", emoji: "🌍", title: "Planetary Boundary Model", desc: "Planetary-boundary integration", path: "/ocean/planetary-boundary" },
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
        <button onClick={() => navigate("/")} className="mb-6 text-sm font-semibold text-white/80 hover:text-white flex items-center gap-2">← Back to Worlds</button>
        <div className={`text-center mb-10 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">🌊 Ocean World</h1>
          <p className="text-white/80">Dive deep and protect our oceans!</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {ageGroups.map((ag) => (
            <button key={ag.id} onClick={() => setActiveAge(ag.id)}
              className={`px-5 py-3 rounded-full font-bold cursor-pointer transition-all duration-300 text-sm border-2 ${activeAge === ag.id ? "bg-white/30 text-white border-white/60 shadow-lg" : "bg-white/10 text-white/80 border-white/20 hover:border-white/40"}`}>
              <span>{ag.label}</span>
              <span className="hidden md:inline text-xs opacity-70 ml-1">({ag.subtitle})</span>
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {currentGames.map((game, i) => (
            <div key={game.id} onClick={() => navigate(game.path)}
              className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:shadow-xl ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 60}ms`, background: "hsl(210 80% 20% / 0.6)", backdropFilter: "blur(8px)", border: "1px solid hsl(200 75% 45% / 0.3)" }}>
              <div className="text-4xl mb-3 select-none">{game.emoji}</div>
              <h3 className="font-display font-bold text-white text-lg mb-1">{game.title}</h3>
              <p className="text-white/60 text-sm mb-3">{game.desc}</p>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white">▶ Play Now</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OceanWorld;
