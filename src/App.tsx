import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SelectHive from './SelectHive';
import SelectFrame from './SelectFrame';
import SelectQueen from './SelectQueen';
import NucleusColonyInfo from './NucleusColonyInfo';
import BeeHive from './BeeHive';
import { ResourceProvider } from './context/ResourceContext';
import { Hive } from './data/hiveData';
import { QueenBee } from './data/queenBeeData';
import { Frame } from './data/frameData';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  const [step, setStep] = useState(1);
  const [selectedHive, setSelectedHive] = useState<Hive | null>(null);
  const [selectedFrame, setSelectedFrame] = useState<Frame | null>(null);
  const [selectedQueen, setSelectedQueen] = useState<QueenBee | null>(null);
  const [initialWorkers, setInitialWorkers] = useState(0);
  const [initialDrones, setInitialDrones] = useState(0);

  const handleSelectHive = (hive: Hive) => {
    setSelectedHive(hive);
    setStep(2);
  };

  const handleSelectFrame = (frame: Frame) => {
    setSelectedFrame(frame);
    setStep(3);
  };

  const handleSelectQueen = (queen: QueenBee) => {
    setSelectedQueen(queen);
    setStep(4);
  };

  const handleSetInitialBees = (workers: number, drones: number) => {
    setInitialWorkers(workers);
    setInitialDrones(drones);
  };

  const handleNext = () => {
    setStep(5);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ResourceProvider>
        <SafeAreaView style={styles.container}>
          {step === 1 && <SelectHive onSelectHive={handleSelectHive} />}
          {step === 2 && <SelectFrame onSelectFrame={handleSelectFrame} />}
          {step === 3 && <SelectQueen onSelectQueen={handleSelectQueen} />}
          {step === 4 && selectedFrame && (
            <NucleusColonyInfo
              onNext={handleNext}
              selectedFrame={selectedFrame.type}
              onSetInitialBees={handleSetInitialBees}
            />
          )}
          {step === 5 && selectedHive && selectedQueen && selectedFrame && (
            <BeeHive
              id={1}
              selectedHive={selectedHive}
              selectedQueen={selectedQueen}
              selectedFrame={selectedFrame}
              initialWorkers={initialWorkers}
              initialDrones={initialDrones}
            />
          )}
        </SafeAreaView>
      </ResourceProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
