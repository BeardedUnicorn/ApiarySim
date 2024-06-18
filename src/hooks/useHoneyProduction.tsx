import { useState, useEffect } from 'react';
import { Frame, HoneyStage } from '../data/frameData';
import { useResource } from '../context/ResourceContext';

const useHoneyProduction = (
  frames: (Frame | null)[],
  selectedFrame: Frame,
  workers: number,
) => {
  const [honey, setHoney] = useState(0);
  const { addHoney } = useResource();

  useEffect(() => {
    const interval = setInterval(() => {
      let newHoney = 0;
      const honeyPerWorker = selectedFrame.maxHoney / 1000;

      const updatedFrames = frames.map((frame, index) => {
        if (frame && frame.currentCells.length < frame.maxCells) {
          const cellsToAdd = Math.min(
            workers,
            frame.maxCells - frame.currentCells.length,
          );
          for (let i = 0; i < cellsToAdd; i++) {
            frame.currentCells.push({
              type: index < Math.floor(frames.length / 2) ? 'brood' : 'honey',
              stage: HoneyStage.NectarCollection,
              subStage: 0,
            });
          }
        }

        if (
          frame &&
          frame.currentCells.length > 0 &&
          frame.currentCells[0].type === 'honey'
        ) {
          const honeyProduced = Math.min(
            frame.maxHoney - frame.currentHoney,
            workers * honeyPerWorker,
          );
          newHoney += honeyProduced;
          frame.currentHoney += honeyProduced;
        }
        return frame;
      });

      setHoney((prev) => prev + newHoney);
      addHoney(newHoney);
    }, 10000);

    return () => clearInterval(interval);
  }, [frames, workers]);

  return honey;
};

export default useHoneyProduction;
