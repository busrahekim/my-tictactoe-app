import React, { useEffect, useRef } from "react";
import { Animated, View, Easing } from "react-native";

interface BouncingTextProps {
  text: string;
  duration: number;
}

const BouncingText = ({ text, duration }: BouncingTextProps) => {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: duration,
          easing: Easing.bounce,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: duration,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 }
    ).start();
  }, [bounceAnim]);

  const translateY = bounceAnim.interpolate({
    inputRange: [0, 2],
    outputRange: [0, 20],
  });

  return (
    <View className="items-center justify-center px-1">
      <Animated.Text
        style={{ transform: [{ translateY }] }}
        className="font-bold text-[#C9C8FA] text-5xl bottom-3 tracking-widest"
      >
        {text}
      </Animated.Text>
    </View>
  );
};

export default BouncingText;
