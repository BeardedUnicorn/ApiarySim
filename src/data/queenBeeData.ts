export type QueenBee = {
  species: string;
  eggLayingRate: number; // Number of eggs laid per cycle
};

export const queenBeeOptions: QueenBee[] = [
  {
    species: 'Italian Honey Bee',
    eggLayingRate: 1500,
  },
  {
    species: 'Carniolan Honey Bee',
    eggLayingRate: 1200,
  },
  {
    species: 'Russian Honey Bee',
    eggLayingRate: 1000,
  },
];
