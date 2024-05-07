import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useContext, useEffect } from "react";
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
import BouncingText from "@/components/BouncingText";
import { AppThemeContext } from "@/context/appThemeContext";
import { Link } from "expo-router";

const Page = () => {
  const { top } = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();

  const theme = useContext(AppThemeContext);

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
    <View className="flex-1 justify-between" style={[{ marginTop: top * 5 }]}>
      {/* <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={colors}
          />
        </Rect>
      </Canvas> */}

      <View className="flex-row items-center justify-center">
        <Text className="font-semibold text-[#3D38ED] text-2xl tracking-widest">
          Tic
        </Text>
        <BouncingText text="Tac" duration={800} />
        <Text className="font-semibold text-2xl text-[#3D38ED] tracking-widest">
          Toe
        </Text>
      </View>
      <View className="mb-10">
        <View className="flex flex-row justify-center gap-5 mt-2 px-5">
          <Link
            href={"/game"}
            className="rounded-full p-2 h-12 justify-center items-center flex-1"
            style={{ backgroundColor: Colors.primary }}
            asChild
          >
            <TouchableOpacity>
              <Text className="text-white text-xl font-semibold">PLAY</Text>
            </TouchableOpacity>
          </Link>
          <Link
            href={"/help"}
            className="rounded-full p-2 h-12 justify-center items-center flex-1"
            style={{ backgroundColor: Colors.primary }}
            asChild
          >
            <TouchableOpacity>
              <Text className="text-white text-xl font-semibold">HELP</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <View className="flex flex-row justify-center mt-2 px-5">
          <Link
            href={"/settings"}
            className="rounded-full p-2 h-12 justify-center items-center flex-1"
            style={{ backgroundColor: Colors.primary }}
            asChild
          >
            <TouchableOpacity>
              <Text className="text-white text-xl font-semibold">SETTINGS</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      {/* <View> */}
      {/* <FloatingButton /> */}
      {/* </View> */}
    </View>
  );
};

export default Page;
