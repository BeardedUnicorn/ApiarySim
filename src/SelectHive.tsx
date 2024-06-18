import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { hiveOptions, Hive } from './data/hiveData'; // Ensure this path is correct

type SelectHiveProps = {
  onSelectHive: (hive: Hive) => void;
};

const SelectHive: React.FC<SelectHiveProps> = ({ onSelectHive }) => {
  return (
    <View style={styles.container}>
      <Text>Select a Hive for your Apiary:</Text>
      {hiveOptions.map((hive, index) => (
        <View key={index} style={styles.option}>
          <Text>
            {hive.company} - {hive.productName}
          </Text>
          <Text>Honey Production Rate: {hive.honeyProductionRate}</Text>
          <Text>Number of Frames: {hive.numberOfFrames}</Text>
          <Text>Max Frames per Box: {hive.maxFramesPerBox}</Text>
          <Text>Can Be Stacked: {hive.canBeStacked ? 'Yes' : 'No'}</Text>
          <Text>Max Stacked Hives: {hive.maxStackedHives}</Text>
          <Button title="Select" onPress={() => onSelectHive(hive)} />
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

export default SelectHive;
