import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ResourceProvider, useResource} from './src/context/ResourceContext.tsx';
import BeeHive from './src/BeeHive.tsx';

const App = () => {
  return (
    <ResourceProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <ResourceDisplay />
          <BeeHive id={1} />
          <BeeHive id={2} />
          {/* Add more hives as needed */}
        </ScrollView>
      </SafeAreaView>
    </ResourceProvider>
  );
};

const ResourceDisplay = () => {
  const {food, totalHoney} = useResource();
  return (
    <View style={styles.resources}>
      <Text>Food: {food}</Text>
      <Text>Total Honey: {totalHoney}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    alignItems: 'center',
  },
  resources: {
    padding: 10,
    margin: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default App;
