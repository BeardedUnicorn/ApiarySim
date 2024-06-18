import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { QueenBee, queenBeeOptions } from './data/queenBeeData.ts';

type SelectQueenProps = {
  onSelectQueen: (queen: QueenBee) => void;
};

const SelectQueen: React.FC<SelectQueenProps> = ({ onSelectQueen }) => {
  return (
    <View style={styles.container}>
      <Text>Select a Queen Bee for this Hive:</Text>
      {queenBeeOptions.map((queen, index) => (
        <View key={index} style={styles.option}>
          <Text>{queen.species}</Text>
          <Button title="Select" onPress={() => onSelectQueen(queen)} />
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

export default SelectQueen;
