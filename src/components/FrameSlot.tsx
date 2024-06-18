import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Frame } from '../data/frameData';

type FrameSlotProps = {
  frame: Frame | null;
};

const FrameSlot: React.FC<FrameSlotProps> = ({ frame }) => {
  if (!frame) {
    return (
      <View style={styles.frameSlot}>
        <Text>Empty</Text>
      </View>
    );
  }

  const broodCount = frame.currentCells.filter(
    (cell) => cell.type === 'brood',
  ).length;
  const honeyCount = frame.currentCells.filter(
    (cell) => cell.type === 'honey',
  ).length;

  return (
    <View style={styles.frameSlot}>
      <Text>
        {frame.type} H: {frame.currentHoney}/{frame.maxHoney} C:{' '}
        {frame.currentCells.length}/{frame.maxCells} BC: {broodCount} HC:{' '}
        {honeyCount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameSlot: {
    width: '100%',
    padding: 5,
    margin: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default FrameSlot;
