export type Hive = {
  company: string;
  productName: string;
  honeyProductionRate: 'slow' | 'medium' | 'high';
  numberOfFrames: number;
  maxFramesPerBox: number;
  canBeStacked: boolean;
  maxStackedHives: number;
};

export const hiveOptions: Hive[] = [
  {
    company: 'BeeMaster',
    productName: 'HoneyMax Pro',
    honeyProductionRate: 'high',
    numberOfFrames: 10,
    maxFramesPerBox: 20,
    canBeStacked: true,
    maxStackedHives: 3,
  },
  {
    company: 'HoneyBee Inc.',
    productName: 'SweetHome 2000',
    honeyProductionRate: 'medium',
    numberOfFrames: 8,
    maxFramesPerBox: 16,
    canBeStacked: true,
    maxStackedHives: 2,
  },
  {
    company: 'NectarWorks',
    productName: 'BuzzBox Basic',
    honeyProductionRate: 'slow',
    numberOfFrames: 5,
    maxFramesPerBox: 10,
    canBeStacked: false,
    maxStackedHives: 1,
  },
];
