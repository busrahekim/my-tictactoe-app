import { View, Text } from "react-native";
import React, { useState } from "react";
import Square from "./Square";

const calculateWinner = (squares: any) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const GameBoard = () => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);

  const [stepNumber, setStepNumber] = useState(0);

  const resetGame = () => {
    setHistory([
      {
        squares: Array(9).fill(null),
      },
    ]);
    setStepNumber(0);
  };

  const handleClick = (i: any) => {
    const tempHistory = history.slice(0, stepNumber + 1);
    const currentStep = tempHistory[tempHistory.length - 1];
    const tempSquares = [...currentStep.squares];

    if (calculateWinner(tempSquares) || tempSquares[i]) {
      return;
    }

    tempSquares[i] = "X";

    if (calculateWinner(tempSquares)) {
      setHistory(tempHistory.concat([{ squares: tempSquares }]));
      setStepNumber(tempHistory.length);
      return; // If user wins, no need to proceed to computer's move
    }

    const emptySquares = tempSquares.reduce((acc, square, index) => {
      if (square === null) {
        acc.push(index);
      }
      return acc;
    }, []);

    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    const computerMoveIndex = emptySquares[randomIndex];
    tempSquares[computerMoveIndex] = "O";

    setHistory(tempHistory.concat([{ squares: tempSquares }]));
    setStepNumber(tempHistory.length);

    if (calculateWinner(tempSquares) || tempHistory.length === 8) {
      // Check for winner or if it's the last move
      // If there's a winner or all squares are filled, stop the game
      return;
    }
  };

  const winner = calculateWinner(history[stepNumber].squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "";
  }

  const renderSquare = (i: any) => {
    return (
      <Square
        handleSquareClick={() => handleClick(i)}
        value={history[stepNumber].squares[i]}
      />
    );
  };
  return (
    <View className="">
      <View className="flex-row justify-center items-center">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>

      <View className="flex-row justify-center items-center">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>

      <View className="flex-row justify-center items-center">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>

      <View>
        <Text>{status}</Text>
      </View>
    </View>
  );
};

export default GameBoard;
