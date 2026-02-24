import { GameEntry } from "../types";
import { forestGames } from "./forestGames";
import { oceanGames } from "./oceanGames";
import { desertGames } from "./desertGames";

const allGames: Record<string, Record<string, GameEntry>> = {
  forest: forestGames,
  ocean: oceanGames,
  desert: desertGames,
};

export function getGame(world: string, gameId: string): GameEntry | null {
  return allGames[world]?.[gameId] ?? null;
}

export { forestGames, oceanGames, desertGames };
