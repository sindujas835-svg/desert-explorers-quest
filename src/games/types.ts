export interface MemoryPair { id: string; emoji: string; name: string; }
export interface MemoryConfig { pairs: MemoryPair[]; timeLimit: number; }

export interface QuizQuestion { question: string; options: string[]; correct: number; explanation: string; }
export interface QuizConfig { questions: QuizQuestion[]; }

export interface SortCategory { name: string; emoji: string; }
export interface SortItem { name: string; emoji: string; category: string; }
export interface SortConfig { categories: SortCategory[]; items: SortItem[]; timeLimit: number; }

export interface TapTarget { emoji: string; name: string; points: number; good: boolean; }
export interface TapConfig { targets: TapTarget[]; timeLimit: number; goalScore: number; spawnInterval: number; }

export interface SimVariable { name: string; emoji: string; value: number; }
export interface SimAction { name: string; emoji: string; desc: string; effects: Record<string, number>; }
export interface SimConfig { variables: SimVariable[]; rounds: number; actions: SimAction[]; winText: string; }

export type GameEntry =
  | { type: "memory"; title: string; emoji: string; config: MemoryConfig }
  | { type: "quiz"; title: string; emoji: string; config: QuizConfig }
  | { type: "sorting"; title: string; emoji: string; config: SortConfig }
  | { type: "tap"; title: string; emoji: string; config: TapConfig }
  | { type: "simulation"; title: string; emoji: string; config: SimConfig };
