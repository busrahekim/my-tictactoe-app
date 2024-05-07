import { View, Text } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import GameBoard from "@/components/GameBoard";

const Page = () => {
  
  const headerHeight = useHeaderHeight();
  return (
    <View
      className="flex-1 p-4 justify-around"
      style={{ marginTop: headerHeight }}
    >
      <Text className="text-3xl">
        Let's <Text className="font-bold text-4xl">Start</Text>
      </Text>
      <GameBoard />
    </View>
  );
};

export default Page;
