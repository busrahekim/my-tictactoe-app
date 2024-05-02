import { View, Text, TouchableOpacity } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";
import GameBoard from "@/components/GameBoard";

const Page = () => {
  const headerHeight = useHeaderHeight();
  return (
    <View
      className="flex-1 p-4 justify-around"
      style={{ marginTop: headerHeight }}
    >
      <Text className="text-3xl">
        You are :<Text className="font-bold text-4xl"> X</Text>
      </Text>

      <GameBoard />

      <View className="flex flex-row justify-center gap-5 mt-2 px-5">
        <Link
          href={"/"}
          className="rounded-full p-2 h-12 justify-center items-center flex-1"
          style={{ backgroundColor: Colors.primary }}
          asChild
        >
          <TouchableOpacity>
            <Text className="text-white text-xl font-semibold">History</Text>
          </TouchableOpacity>
        </Link>
        <Link
          href={"/"}
          className="rounded-full p-2 h-12 justify-center items-center flex-1"
          style={{ backgroundColor: Colors.primary }}
          asChild
        >
          <TouchableOpacity>
            <Text className="text-white text-xl font-semibold">Reset</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Page;
