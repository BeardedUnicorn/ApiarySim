import { useState, useEffect } from 'react';
import { Frame } from '../data/frameData';
import { produceCells, updateCellLifecycle } from '../utils/frameUtils';

const useFrameLifecycle = (frames: (Frame | null)[], workers: number) => {
  const [updatedFrames, setUpdatedFrames] = useState<(Frame | null)[]>(frames);

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdatedFrames((prevFrames) => produceCells(prevFrames, workers));
      setUpdatedFrames((prevFrames) => updateCellLifecycle(prevFrames));
    }, 10000);

    return () => clearInterval(interval);
  }, [workers]);

  return updatedFrames;
};

export default useFrameLifecycle;
