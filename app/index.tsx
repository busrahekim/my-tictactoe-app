import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import Colors from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import {
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { getRandomColor } from "@/utils/getRandomColor";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import FloatingButton from "@/components/FloatingButton";

const Page = () => {
  const { top } = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();

  const leftColor = useSharedValue("blue");
  const rightColor = useSharedValue("gray");

  useEffect(() => {
    leftColor.value = withTiming(getRandomColor());
    rightColor.value = withTiming(getRandomColor());

    return () => {};
  }, []);

  const colors = useDerivedValue(() => {
    return [leftColor.value, rightColor.value];
  }, []);

  return (
    <View className="flex-1">
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={colors}
          />
        </Rect>
      </Canvas>
      {/* <TouchableOpacity
        style={{ backgroundColor: Colors.dark }}
        className="absolute rounded-full items-center justify-center z-10 bottom-12 right-8 h-16 aspect-square"
        onPress={() => {}}
      >
        <Text className="text-white">X</Text>
      </TouchableOpacity> */}
      <View>
        <FloatingButton />
      </View>
    </View>
  );
};

export default Page;
