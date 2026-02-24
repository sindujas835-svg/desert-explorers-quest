import { useParams, useNavigate } from "react-router-dom";
import { getGame } from "./registry";
import ForestBackground from "@/components/ForestBackground";
import OceanBackground from "@/components/OceanBackground";
import DesertBackground from "@/components/DesertBackground";
import MemoryMatchEngine from "./engines/MemoryMatchEngine";
import QuizEngine from "./engines/QuizEngine";
import SortingEngine from "./engines/SortingEngine";
import TapEngine from "./engines/TapEngine";
import SimulationEngine from "./engines/SimulationEngine";
import type { MemoryConfig, QuizConfig, SortConfig, TapConfig, SimConfig } from "./types";

const backgrounds: Record<string, React.ComponentType> = {
  forest: ForestBackground,
  ocean: OceanBackground,
  desert: DesertBackground,
};

const GamePage = () => {
  const { world, gameId } = useParams<{ world: string; gameId: string }>();
  const navigate = useNavigate();

  if (!world || !gameId) return <div>Invalid game</div>;

  const entry = getGame(world, gameId);
  const Bg = backgrounds[world] || ForestBackground;
  const backPath = `/${world}`;

  if (!entry) {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <Bg />
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-10 text-center max-w-md mx-4 shadow-2xl">
          <div className="text-7xl mb-4">🚧</div>
          <h1 className="text-2xl font-bold text-foreground mb-4">Game Not Found</h1>
          <button onClick={() => navigate(backPath)} className="px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform">← Go Back</button>
        </div>
      </div>
    );
  }

  const props = { title: entry.title, emoji: entry.emoji, backPath, Background: Bg };

  switch (entry.type) {
    case "memory": return <MemoryMatchEngine {...props} config={entry.config as MemoryConfig} />;
    case "quiz": return <QuizEngine {...props} config={entry.config as QuizConfig} />;
    case "sorting": return <SortingEngine {...props} config={entry.config as SortConfig} />;
    case "tap": return <TapEngine {...props} config={entry.config as TapConfig} />;
    case "simulation": return <SimulationEngine {...props} config={entry.config as SimConfig} />;
    default: return <div>Unknown game type</div>;
  }
};

export default GamePage;
