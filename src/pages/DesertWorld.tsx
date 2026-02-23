import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DesertBackground from "@/components/DesertBackground";

const ageGroups = [
  { id: "6-8", label: "🌵 Ages 6–8", subtitle: "Little Desert Explorers" },
  { id: "9-11", label: "🐪 Ages 9–11", subtitle: "Young Desert Rangers" },
  { id: "12-14", label: "🏜️ Ages 12–14", subtitle: "Desert Strategists" },
  { id: "15-17", label: "☀️ Ages 15–17", subtitle: "Desert Leaders" },
  { id: "17-18", label: "🌍 Ages 17–18", subtitle: "Earth Champions" },
];

const games: Record<string, Array<{ id: string; emoji: string; title: string; desc: string; path?: string }>> = {
  "6-8": [
    { id: "find-water", emoji: "💧", title: "Find Water Source", desc: "Dig sand tiles to find hidden water!" },
    { id: "desert-match", emoji: "🐫", title: "Desert Animal Match", desc: "Match desert animal pairs" },
    { id: "solar-builder", emoji: "☀️", title: "Solar Energy Builder", desc: "Connect solar panels to power the hut" },
    { id: "cactus-care", emoji: "🌵", title: "Cactus Care Simulator", desc: "Keep your cactus healthy!" },
    { id: "shade-shelter", emoji: "🏠", title: "Build a Shade Shelter", desc: "Assemble a desert survival shelter" },
    { id: "survival-quiz", emoji: "❓", title: "Desert Survival Quiz", desc: "Test your desert knowledge" },
    { id: "camel-journey", emoji: "🐪", title: "Camel Journey Resource", desc: "Guide your camel to the oasis" },
    { id: "sandstorm-dodge", emoji: "🌪️", title: "Sandstorm Dodge Challenge", desc: "Dodge desert sandstorms" },
    { id: "heat-cool-sort", emoji: "🧊", title: "Heat vs Cool Sorting", desc: "Sort items for desert survival" },
    { id: "solar-village", emoji: "🏘️", title: "Mini Solar Village Builder", desc: "Build a solar-powered village" },
  ],
  "9-11": [
    { id: "oasis-builder", emoji: "🏝️", title: "Oasis Builder Simulation", desc: "Build a thriving oasis ecosystem" },
    { id: "solar-farm", emoji: "⚡", title: "Solar Farm Setup", desc: "Place solar panels strategically" },
    { id: "desert-food-chain", emoji: "🔗", title: "Desert Food Chain Builder", desc: "Build desert ecosystem chains" },
    { id: "water-conservation", emoji: "💧", title: "Water Conservation Challenge", desc: "Manage water supply for 12 rounds" },
    { id: "sandstorm-alert", emoji: "🌪️", title: "Sandstorm Alert Strategy", desc: "Prepare for incoming storms" },
    { id: "wildlife-survival", emoji: "🦎", title: "Wildlife Survival Mission", desc: "Protect desert wildlife habitat" },
    { id: "irrigation-plan", emoji: "🚿", title: "Irrigation Planning Game", desc: "Route water canals efficiently" },
    { id: "desert-farming", emoji: "🌾", title: "Desert Farming Puzzle", desc: "Select optimal desert crops" },
    { id: "energy-balance", emoji: "⚖️", title: "Energy Balance Game", desc: "Balance hybrid energy sources" },
    { id: "desert-quiz-quest", emoji: "🗺️", title: "Desert Quiz Adventure", desc: "Journey through desert checkpoints" },
  ],
  "12-14": [
    { id: "desertification-sim", emoji: "📊", title: "Desertification Simulator", desc: "Combat desert expansion" },
    { id: "water-politics", emoji: "💰", title: "Water Resource Politics", desc: "Manage water distribution fairly" },
    { id: "climate-desert", emoji: "🌡️", title: "Climate Impact on Deserts", desc: "Fight climate change effects" },
    { id: "renewable-desert", emoji: "♻️", title: "Renewable Energy Strategy", desc: "Build sustainable desert energy" },
    { id: "species-protection", emoji: "🦂", title: "Desert Species Protection", desc: "Save endangered desert species" },
    { id: "sand-mining", emoji: "⛏️", title: "Sand Mining Challenge", desc: "Balance mining with conservation" },
    { id: "trade-routes", emoji: "🛤️", title: "Ancient Trade Routes", desc: "Optimize desert trade paths" },
    { id: "dust-storm-mgmt", emoji: "🌫️", title: "Dust Storm Management", desc: "Mitigate storm damage" },
    { id: "solar-policy", emoji: "📜", title: "Solar Energy Policy", desc: "Craft energy regulations" },
    { id: "desert-guardian", emoji: "🛡️", title: "Desert Guardian Challenge", desc: "Lead through desert crises" },
  ],
  "15-17": [
    { id: "desert-economy", emoji: "💹", title: "Desert Economy vs Ecology", desc: "Balance development and nature" },
    { id: "water-treaty", emoji: "🤝", title: "Water Treaty Negotiation", desc: "International water agreements" },
    { id: "smart-irrigation", emoji: "🛰️", title: "Smart Irrigation (GIS)", desc: "AI-powered water management" },
    { id: "rewilding-desert", emoji: "🌿", title: "Desert Rewilding Strategy", desc: "Restore arid ecosystems" },
    { id: "carbon-desert", emoji: "📈", title: "Desert Carbon Projects", desc: "Carbon capture in arid zones" },
    { id: "heat-crisis", emoji: "🔥", title: "Extreme Heat Crisis", desc: "Manage heat wave emergencies" },
    { id: "community-desert", emoji: "👥", title: "Desert Community Engagement", desc: "Unite stakeholders" },
    { id: "green-belt", emoji: "🌳", title: "Green Belt Campaign", desc: "Build anti-desertification barriers" },
    { id: "data-desert", emoji: "📊", title: "Desert Climate Data Analysis", desc: "Analyze desertification trends" },
    { id: "sustainability-desert", emoji: "🌱", title: "Desert Sustainability Plan", desc: "Long-term arid zone planning" },
  ],
  "17-18": [
    { id: "global-desertification", emoji: "🌐", title: "Global Desertification Treaty", desc: "Negotiate international agreements" },
    { id: "climate-migration", emoji: "🏃", title: "Climate Migration Sim", desc: "Manage desert climate refugees" },
    { id: "ecosystem-restoration", emoji: "🧬", title: "Ecosystem Restoration Model", desc: "30-year restoration plan" },
    { id: "solar-entrepreneurship", emoji: "💼", title: "Solar Entrepreneurship", desc: "Build sustainable solar business" },
    { id: "ai-water", emoji: "🤖", title: "AI Water Management", desc: "Predictive water allocation" },
    { id: "land-rights", emoji: "⚖️", title: "Land Rights Legal Case", desc: "Indigenous land protection" },
    { id: "restoration-master", emoji: "🗺️", title: "Restoration Master Plan", desc: "National-level desert recovery" },
    { id: "multi-nation-desert", emoji: "🌍", title: "Multi-Nation Desert Alliance", desc: "Global desert cooperation" },
    { id: "impact-desert", emoji: "📋", title: "Environmental Impact Review", desc: "Assess desert development projects" },
    { id: "planetary-desert", emoji: "🪐", title: "Planetary Boundary: Deserts", desc: "Keep desert systems in balance" },
  ],
};

const DesertWorld = () => {
  const navigate = useNavigate();
  const [activeAge, setActiveAge] = useState("6-8");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  const currentGames = games[activeAge] || [];

  return (
    <div className="min-h-screen relative">
      <DesertBackground />

      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate("/")}
          className="mb-6 text-sm font-semibold text-white/80 hover:text-white flex items-center gap-2"
        >
          ← Back to Worlds
        </button>

        <div className={`text-center mb-10 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
            🏜️ Desert World
          </h1>
          <p className="text-white/80">Survive, adapt, and protect the golden sands!</p>
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
                background: "hsl(30 50% 20% / 0.6)",
                backdropFilter: "blur(8px)",
                border: "1px solid hsl(38 92% 50% / 0.3)",
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

export default DesertWorld;
