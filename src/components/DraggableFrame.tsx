import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import FrameSlot from './FrameSlot';
import { Frame } from '../data/frameData';

type DraggableFrameProps = {
  frame: Frame | null;
  index: number;
  onDragEnd: (fromIndex: number, toIndex: number) => void;
};

const DraggableFrame: React.FC<DraggableFrameProps> = ({
  frame,
  index,
  onDragEnd,
}) => {
  const translateY = useSharedValue(0);
  const initialPositionY = index * 100;

  const gesture = Gesture.Pan()
    .onStart(() => {
      translateY.value = initialPositionY;
    })
    .onUpdate((event) => {
      translateY.value = initialPositionY + event.translationY;
    })
    .onEnd(() => {
      const toIndex = Math.round(translateY.value / 100);
      translateY.value = withSpring(initialPositionY);
      console.log(`From: ${index} To: ${toIndex}`);
      runOnJS(onDragEnd)(index, toIndex);
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.draggableItem, animatedStyle]}>
        <FrameSlot index={index} frame={frame} />
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  draggableItem: {
    width: '100%',
    height: 100, // Ensure each frame has a fixed height to avoid overlapping
  },
});

export default DraggableFrame;
