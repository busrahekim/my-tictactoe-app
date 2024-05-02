import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface ISquareProps {
  handleSquareClick: () => void;
  value: string | "";
}

const Square = ({ handleSquareClick, value }: ISquareProps) => {
  return (
    <TouchableOpacity
      onPress={handleSquareClick}
      className="border m-2 w-24 h-24 justify-center items-center pt-3"
    >
      <Text className="text-7xl">{value}</Text>
    </TouchableOpacity>
  );
};

export default Square;
