import CharacterContext from "@/context/characterContext";
import { useContext } from "react";

export const useCharacterContext = () => {
  return useContext(CharacterContext);
};
