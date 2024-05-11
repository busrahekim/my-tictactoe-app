import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import React, { useEffect, useState } from "react";
import { fetchCharacters, searchCharacters } from "./api/api";
import SearchBar from "@/components/SearchBar";
import MultiSelectList from "@/components/MultiSelectList";
import { useCharacterContext } from "@/hooks/useCharacterContext";
import { Character } from "@/types/CharacterType";

const Page = () => {
  const headerHeight = useHeaderHeight();

  const {
    input,
    selected,
    characters,
    loading,
    error,
    setSelected,
    setCharacters,
    setLoading,
    setError,
  } = useCharacterContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const charactersData = await fetchCharacters();
        setCharacters(
          charactersData.map((character: Character) => ({
            ...character,
            selected: false,
          }))
        );
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const charactersData = await searchCharacters(input);
        const updatedCharacters = charactersData.map((character: any) => {
          const isSelected = selected.includes(character.name);
          return { ...character, selected: isSelected };
        });
        setCharacters(updatedCharacters);
        setLoading(false);
        setError("");
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    getCharacter();
  }, [input, selected]);

  //TODO: selected array should not remove selected ones
  // it somehow does not happen if characters have same query ???
  const handleToggleCheckbox = (index: number) => {
    setCharacters((prevCharacters) => {
      const updatedCharacters = [...prevCharacters];
      updatedCharacters[index].selected = !updatedCharacters[index].selected;

      const selectedNames = updatedCharacters
        .filter((character) => character.selected)
        .map((character) => character.name);

      setSelected(selectedNames);


      return updatedCharacters;
    });
  };

  const handleRemove = (valueToRemove: string) => {
    const updatedSelected = selected.filter((s) => s !== valueToRemove);
    setSelected(updatedSelected);

    setCharacters((prevCharacters) =>
      prevCharacters.map((character) => {
        if (character.name === valueToRemove) {
          return { ...character, selected: false };
        }
        return character;
      })
    );
  };

  return (
    <SafeAreaView
      style={{ paddingTop: headerHeight }}
      className="my-auto mx-3 space-y-2"
    >
      <SearchBar handleRemove={handleRemove} />

      <ScrollView className="rounded-xl border border-primary h-72">
        {loading && (
          <View className="border-b border-b-primary p-2 gap-2 items-center">
            <Text className="text-textColor">Loading...</Text>
          </View>
        )}
        {error ? (
          <View className="border-b border-b-primary p-2 gap-2 items-center">
            <Text className="text-textColor">{error}</Text>
          </View>
        ) : (
          <MultiSelectList handleToggleCheckbox={handleToggleCheckbox} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;
