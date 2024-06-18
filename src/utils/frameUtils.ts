import {
  Frame,
  BroodStage,
  HoneyStage,
  BroodSubStage,
  HoneySubStage,
} from '../data/frameData';

export const initializeFrames = (selectedFrame: Frame, totalFrames: number) => {
  const halfMaxFrames = Math.floor(totalFrames / 2);
  const broodFramesCount = Math.floor(halfMaxFrames / 2);
  const honeyFramesCount = halfMaxFrames - broodFramesCount;

  const emptyFrame = null;
  const broodFrames = Array(broodFramesCount)
    .fill(null)
    .map(() => ({
      ...selectedFrame,
      currentHoney: 0,
      currentCells: Array(selectedFrame.maxCells).fill({
        type: 'brood',
        stage: BroodStage.Egg,
        subStage: 0,
      }),
    }));
  const honeyFrames = Array(honeyFramesCount)
    .fill(null)
    .map(() => ({
      ...selectedFrame,
      currentHoney: selectedFrame.maxHoney,
      currentCells: Array(selectedFrame.maxCells).fill({
        type: 'honey',
        stage: HoneyStage.NectarCollection,
        subStage: 0,
      }),
    }));

  // Create the initial frames layout with equal empty frames on each side
  const initialFrames = [
    emptyFrame,
    ...honeyFrames.slice(0, Math.ceil(honeyFramesCount / 2)),
    ...broodFrames,
    ...honeyFrames.slice(Math.ceil(honeyFramesCount / 2)),
    emptyFrame,
  ];

  const totalInitialFrames = initialFrames.length;
  const emptyFramesCount = (totalFrames - totalInitialFrames) / 2;
  const emptyFrames = Array(emptyFramesCount).fill(null);
  return [...emptyFrames, ...initialFrames, ...emptyFrames];
};

export const produceCells = (frames: (Frame | null)[], workers: number) => {
  return frames.map((frame, index) => {
    if (frame && frame.currentCells.length < frame.maxCells) {
      const cellsToAdd = Math.min(
        workers,
        frame.maxCells - frame.currentCells.length,
      );
      for (let i = 0; i < cellsToAdd; i++) {
        frame.currentCells.push({
          type: index < Math.floor(frames.length / 2) ? 'brood' : 'honey',
          stage:
            index < Math.floor(frames.length / 2)
              ? BroodStage.Egg
              : HoneyStage.NectarCollection,
          subStage: 0,
        });
      }
    }
    return frame;
  });
};

export const updateCellLifecycle = (frames: (Frame | null)[]) => {
  return frames.map((frame) => {
    if (frame) {
      frame.currentCells.forEach((cell) => {
        if (cell.type === 'brood') {
          if (
            cell.stage === BroodStage.Egg &&
            cell.subStage < BroodSubStage.Egg - 1
          ) {
            cell.subStage++;
          } else if (
            cell.stage === BroodStage.Egg &&
            cell.subStage === BroodSubStage.Egg - 1
          ) {
            cell.stage = BroodStage.Larva;
            cell.subStage = 0;
          } else if (
            cell.stage === BroodStage.Larva &&
            cell.subStage < BroodSubStage.Larva - 1
          ) {
            cell.subStage++;
          } else if (
            cell.stage === BroodStage.Larva &&
            cell.subStage === BroodSubStage.Larva - 1
          ) {
            cell.stage = BroodStage.Pupa;
            cell.subStage = 0;
          } else if (
            cell.stage === BroodStage.Pupa &&
            cell.subStage < BroodSubStage.Pupa - 1
          ) {
            cell.subStage++;
          } else if (
            cell.stage === BroodStage.Pupa &&
            cell.subStage === BroodSubStage.Pupa - 1
          ) {
            cell.stage = BroodStage.Adult;
            cell.subStage = 0;
          }
        } else if (cell.type === 'honey') {
          if (
            cell.stage === HoneyStage.NectarCollection &&
            cell.subStage < HoneySubStage.NectarCollection - 1
          ) {
            cell.subStage++;
          } else if (
            cell.stage === HoneyStage.NectarCollection &&
            cell.subStage === HoneySubStage.NectarCollection - 1
          ) {
            cell.stage = HoneyStage.NectarProcessing;
            cell.subStage = 0;
          } else if (
            cell.stage === HoneyStage.NectarProcessing &&
            cell.subStage < HoneySubStage.NectarProcessing - 1
          ) {
            cell.subStage++;
          } else if (
            cell.stage === HoneyStage.NectarProcessing &&
            cell.subStage === HoneySubStage.NectarProcessing - 1
          ) {
            cell.stage = HoneyStage.DepositionEvaporation;
            cell.subStage = 0;
          } else if (
            cell.stage === HoneyStage.DepositionEvaporation &&
            cell.subStage < HoneySubStage.DepositionEvaporation - 1
          ) {
            cell.subStage++;
          } else if (
            cell.stage === HoneyStage.DepositionEvaporation &&
            cell.subStage === HoneySubStage.DepositionEvaporation - 1
          ) {
            cell.stage = HoneyStage.ConversionRipening;
            cell.subStage = 0;
          } else if (
            cell.stage === HoneyStage.ConversionRipening &&
            cell.subStage < HoneySubStage.ConversionRipening - 1
          ) {
            cell.subStage++;
          } else if (
            cell.stage === HoneyStage.ConversionRipening &&
            cell.subStage === HoneySubStage.ConversionRipening - 1
          ) {
            cell.stage = HoneyStage.Capping;
            cell.subStage = 0;
          } else if (
            cell.stage === HoneyStage.Capping &&
            cell.subStage < HoneySubStage.Capping - 1
          ) {
            cell.subStage++;
          }
        }
      });
    }
    return frame;
  });
};
