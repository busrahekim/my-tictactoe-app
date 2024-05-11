import React, { createContext } from "react";
import { Character } from "@/types/CharacterType";

const CharacterContext = createContext<{
  characters: Character[];
  loading: boolean;
  error: any;
  input: string;
  selected: string[];
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}>({
  characters: [],
  loading: true,
  error: null,
  input: "",
  selected: [],
  setInput: () => {},
  setSelected: () => {},
  setCharacters: () => {},
  setLoading: () => {},
  setError: () => {},
});

export default CharacterContext;
