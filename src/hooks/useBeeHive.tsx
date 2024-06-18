import { useState, useEffect, useRef } from 'react';
import { Frame } from '../data/frameData';
import { QueenBee } from '../data/queenBeeData';
import { Hive } from '../data/hiveData';
import useFrameLifecycle from './useFrameLifecycle';
import useHoneyProduction from './useHoneyProduction';
import useColonyHealth from './useColonyHealth';
import { initializeFrames } from '../utils/frameUtils';

const useBeeHive = (
  selectedHive: Hive,
  selectedQueen: QueenBee,
  selectedFrame: Frame,
  initialWorkers: number,
  initialDrones: number,
) => {
  const [colonySize, setColonySize] = useState(initialWorkers + initialDrones);
  const [workers, setWorkers] = useState(initialWorkers);
  const [drones, setDrones] = useState(initialDrones);
  const [frames, setFrames] = useState<(Frame | null)[]>(
    initializeFrames(selectedFrame, selectedHive.maxFramesPerBox),
  );

  const framesRef = useRef(frames);
  framesRef.current = frames;

  const honey = useHoneyProduction(frames, selectedFrame, workers);
  const { health, feedBees } = useColonyHealth();

  const updatedFrames = useFrameLifecycle(frames, workers);
  useEffect(() => setFrames(updatedFrames), [updatedFrames]);

  useEffect(() => {
    const layEggs = () => {
      const eggsLaid = selectedQueen.eggLayingRate;
      const newWorkers = Math.floor(eggsLaid * 0.85);
      const newDrones = Math.floor(eggsLaid * 0.15);

      setWorkers((prev) => prev + newWorkers);
      setDrones((prev) => prev + newDrones);
      setColonySize((prev) => prev + newWorkers + newDrones);

      // Update frames based on the current state
      const updatedFrames = useFrameLifecycle(framesRef.current, newWorkers);
      setFrames(updatedFrames);
    };

    const interval = setInterval(() => {
      layEggs();
    }, 10000);

    return () => clearInterval(interval);
  }, [selectedQueen]);

  return {
    health,
    honey,
    colonySize,
    workers,
    drones,
    frames,
    feedBees,
    setFrames,
  };
};

export default useBeeHive;
