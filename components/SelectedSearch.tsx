import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

interface SelectProps {
  value: string;
  handleRemove: (value: string) => void;
}

const SelectedSearch = ({ value, handleRemove }: SelectProps) => {
  return (
    <View className="rounded-xl bg-[#E2E8F0] flex-row p-2 ml-2 mt-1">
      <Text className="text-base capitalize">{value}</Text>
      <Entypo
        name="squared-cross"
        size={24}
        color="#67707b"
        onPress={() => handleRemove(value)}
      />
    </View>
  );
};

export default SelectedSearch;
