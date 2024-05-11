import { View, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import SelectedSearch from "@/components/SelectedSearch";
import { useCharacterContext } from "@/hooks/useCharacterContext";

interface InputProps {
  handleRemove: (value: string) => void;
}

const SearchBar = ({ handleRemove }: InputProps) => {
  const { input, setInput, selected } = useCharacterContext();

  const handleInputChange = (text: string) => {
    setInput(text);
  };

  return (
    <View className="flex flex-row flex-wrap items-center rounded-xl border border-primary bg-secondary">
      {selected.map((input: string, index: number) => (
        <SelectedSearch value={input} key={index} handleRemove={handleRemove} />
      ))}

      <TextInput
        className="ml-1 p-3 flex-1 font-semibold"
        onChangeText={handleInputChange}
        value={input}
      />
      <Ionicons name="chevron-down" size={20} style={{ padding: 10 }} />
    </View>
  );
};

export default SearchBar;
