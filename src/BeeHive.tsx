import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';
import { Hive } from './data/hiveData';
import { QueenBee } from './data/queenBeeData';
import { Frame, frameOptions } from './data/frameData';
import useBeeHive from './hooks/useBeeHive';
import FrameSlot from './components/FrameSlot';

type BeeHiveProps = {
  id: number;
  selectedHive: Hive;
  selectedQueen: QueenBee;
  selectedFrame: Frame;
  initialWorkers: number;
  initialDrones: number;
};

const BeeHive: React.FC<BeeHiveProps> = ({
  id,
  selectedHive,
  selectedQueen,
  selectedFrame,
  initialWorkers,
  initialDrones,
}) => {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const {
    health,
    honey,
    colonySize,
    workers,
    drones,
    frames,
    feedBees,
    setFrames,
  } = useBeeHive(
    selectedHive,
    selectedQueen,
    selectedFrame,
    initialWorkers,
    initialDrones,
  );

  const handleFrameTypeSelect = (frameType: Frame) => {
    if (selectedSlot !== null) {
      const updatedFrames = [...frames];
      updatedFrames[selectedSlot] = {
        ...frameType,
        currentHoney: 0,
        currentCells: [],
      };
      setFrames(updatedFrames);
      setSelectedSlot(null);
      setModalVisible(false);
    }
  };

  const handleSlotClick = (index: number) => {
    setSelectedSlot(index);
    setModalVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.hive}>
        <Text>Hive {id}</Text>
        <Text>Queen: {selectedQueen.species}</Text>
        <Text>Health: {health}</Text>
        <Text>Honey: {honey}</Text>
        <Text>Colony Size: {Math.floor(colonySize)}</Text>
        <Text>Workers: {workers}</Text>
        <Text>Drones: {drones}</Text>
        <Text>Hive: {selectedHive.productName}</Text>
        <View style={styles.frames}>
          {frames.map((frame, index) => (
            <View
              key={index}
              style={styles.frameContainer}
              onTouchEnd={() => handleSlotClick(index)}
            >
              <FrameSlot frame={frame} />
            </View>
          ))}
        </View>
        <Button title="Feed Bees" onPress={feedBees} />
        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Select a Frame Type</Text>
              {frameOptions.map((frameOption, index) => (
                <Button
                  key={index}
                  title={
                    frameOption.type.charAt(0).toUpperCase() +
                    frameOption.type.slice(1)
                  }
                  onPress={() => handleFrameTypeSelect(frameOption)}
                />
              ))}
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hive: {
    padding: 10,
    margin: 10,
    backgroundColor: 'lightyellow',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  frames: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  frameContainer: {
    width: '100%',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default BeeHive;
