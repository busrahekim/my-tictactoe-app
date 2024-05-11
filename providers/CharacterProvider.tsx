import CharacterContext from "@/context/characterContext";
import { Character } from "@/types/CharacterType";
import { useState } from "react";

const CharacterProvider = ({ children }: any) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [input, setInput] = useState<string>("");
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <CharacterContext.Provider
      value={{
        characters,
        loading,
        error,
        input,
        selected,
        setInput,
        setSelected,
        setCharacters,
        setLoading,
        setError,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
