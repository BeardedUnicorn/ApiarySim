export type Frame = {
  type: 'deep' | 'medium' | 'shallow';
  description: string;
  capacity: number; // Honey capacity for each frame type
};

export const frameOptions: Frame[] = [
  {
    type: 'deep',
    description: 'Deep frames have the highest capacity for honey storage.',
    capacity: 50,
  },
  {
    type: 'medium',
    description:
      'Medium frames provide a balanced capacity and ease of handling.',
    capacity: 30,
  },
  {
    type: 'shallow',
    description:
      'Shallow frames are easy to handle but have the least capacity.',
    capacity: 20,
  },
];
