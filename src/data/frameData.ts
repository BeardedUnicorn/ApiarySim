export enum BroodStage {
  Egg = 0,
  Larva = 1,
  Pupa = 2,
  Adult = 3,
}

export enum HoneyStage {
  NectarCollection = 0,
  NectarProcessing = 1,
  DepositionEvaporation = 2,
  ConversionRipening = 3,
  Capping = 4,
}

export enum BroodSubStage {
  Egg = 3,
  Larva = 6,
  Pupa = 12,
  Adult = 0,
}

export enum HoneySubStage {
  NectarCollection = 1,
  NectarProcessing = 1,
  DepositionEvaporation = 3,
  ConversionRipening = 9,
  Capping = 7,
}

export type Cell = {
  type: 'brood' | 'honey';
  stage: BroodStage | HoneyStage;
  subStage: number;
};

export type Frame = {
  type: 'deep' | 'medium' | 'shallow';
  description: string;
  dimensions: string;
  currentHoney: number; // Current amount of honey in pounds
  maxHoney: number; // Maximum amount of honey in pounds
  currentCells: Cell[]; // List of cells in the frame
  maxCells: number; // Maximum number of cells per frame
};

export const frameOptions: Frame[] = [
  {
    type: 'deep',
    description: 'Deep frames have the highest capacity for honey storage.',
    dimensions: 'Approximately 9 1/8 inches in height by 19 inches in width',
    currentHoney: 0,
    maxHoney: 8, // Maximum capacity in pounds
    currentCells: [],
    maxCells: 8000, // Maximum number of cells
  },
  {
    type: 'medium',
    description:
      'Medium frames provide a balanced capacity and ease of handling.',
    dimensions: 'Approximately 6 1/4 inches in height by 19 inches in width',
    currentHoney: 0,
    maxHoney: 4, // Maximum capacity in pounds
    currentCells: [],
    maxCells: 6000, // Maximum number of cells
  },
  {
    type: 'shallow',
    description:
      'Shallow frames are easy to handle but have the least capacity.',
    dimensions: 'Approximately 5 3/8 inches in height by 19 inches in width',
    currentHoney: 0,
    maxHoney: 3, // Maximum capacity in pounds
    currentCells: [],
    maxCells: 4000, // Maximum number of cells
  },
];
