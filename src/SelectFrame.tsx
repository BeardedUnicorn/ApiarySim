import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { frameOptions, Frame } from './data/frameData';

type SelectFrameProps = {
  onSelectFrame: (frame: Frame) => void;
};

const SelectFrame: React.FC<SelectFrameProps> = ({ onSelectFrame }) => {
  return (
    <View style={styles.container}>
      <Text>Select Frame Type for your Hive:</Text>
      {frameOptions.map((frame, index) => (
        <View key={index} style={styles.option}>
          <Text>
            {frame.type.charAt(0).toUpperCase() + frame.type.slice(1)} Frame
          </Text>
          <Text>{frame.description}</Text>
          <Text>Dimensions: {frame.dimensions}</Text>
          <Text>Max Honey Capacity: {frame.maxHoney} lbs</Text>
          <Text>Max Cells: {frame.maxCells}</Text>
          <Button title="Select" onPress={() => onSelectFrame(frame)} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: 'lightyellow',
    borderRadius: 5,
  },
  option: {
    marginVertical: 5,
  },
});

export default SelectFrame;
