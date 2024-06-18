import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type NucleusColonyInfoProps = {
  onNext: () => void;
  selectedFrame: string;
  onSetInitialBees: (workers: number, drones: number) => void;
};

const NucleusColonyInfo: React.FC<NucleusColonyInfoProps> = ({
  onNext,
  selectedFrame,
  onSetInitialBees,
}) => {
  const initializeBeesAndContinue = () => {
    let minBees: number, maxBees: number;

    switch (selectedFrame) {
      case 'deep':
        minBees = 2000;
        maxBees = 3000;
        break;
      case 'medium':
        minBees = 1500;
        maxBees = 2000;
        break;
      case 'shallow':
        minBees = 1000;
        maxBees = 1500;
        break;
      default:
        minBees = 1000;
        maxBees = 1500;
    }

    const totalBees =
      Math.floor(Math.random() * (maxBees - minBees + 1)) + minBees;
    const workers = Math.floor(totalBees * 0.8);
    const drones = totalBees - workers;

    onSetInitialBees(workers, drones);
    onNext();
  };

  return (
    <View style={styles.container}>
      <Text>Your hive will start with a successful Nucleus Colony!</Text>
      <Button title="Let's Get Started" onPress={initializeBeesAndContinue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: 'lightgreen',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default NucleusColonyInfo;
