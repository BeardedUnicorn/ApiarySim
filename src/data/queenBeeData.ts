export type QueenBee = {
  species: string;
  productionRate: number; // Affects honey production
  droneProductionRate: number; // Affects drone production
  workerProductionRate: number; // Affects worker production
};

export const queenBeeOptions: QueenBee[] = [
  {
    species: 'Italian Honey Bee',
    productionRate: 1.2,
    droneProductionRate: 0.8,
    workerProductionRate: 1.5,
  },
  {
    species: 'Carniolan Honey Bee',
    productionRate: 1.0,
    droneProductionRate: 1.0,
    workerProductionRate: 1.2,
  },
  {
    species: 'Russian Honey Bee',
    productionRate: 0.9,
    droneProductionRate: 1.1,
    workerProductionRate: 1.0,
  },
];
