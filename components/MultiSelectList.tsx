import { useCharacterContext } from "@/hooks/useCharacterContext";
import Checkbox from "expo-checkbox";
import React from "react";
import { View, Text, Image } from "react-native";

const MultiSelectList = ({ handleToggleCheckbox }: any) => {
  const { input, characters } = useCharacterContext();
  
  const highlightInput = (text: string, query: any) => {
    const index = text?.toLowerCase().indexOf(query?.toLowerCase());
    if (index !== -1) {
      return (
        <>
          {text.substring(0, index)}
          <Text style={{ fontWeight: "bold" }}>
            {text.substring(index, index + query.length)}
          </Text>
          {text.substring(index + query.length)}
        </>
      );
    }
    return text;
  };

  return (
    <>
      {characters.map((character: any, index: any) => (
        <View
          className="flex-row border-b border-b-primary p-2 gap-2 items-center"
          key={index}
        >
          <Checkbox
            disabled={false}
            value={character.selected}
            onValueChange={() => handleToggleCheckbox(index)}
            color="#67707b"
            className="rounded-md"
          />
          <Image
            source={{ uri: character.image }}
            width={50}
            height={50}
            className="rounded-xl"
          />
          <View>
            <Text className="text-textColor">
              {highlightInput(character.name, input)}
            </Text>
            <Text className="text-textColorMuted">
              {character.episode.length} Episodes
            </Text>
          </View>
        </View>
      ))}
    </>
  );
};

export default MultiSelectList;
