import { View, Text, TouchableOpacity } from "react-native";
import Colors from "@/constants/Colors";
import React, { useState } from "react";
import Square from "./Square";
import { calculateWinner } from "@/utils/calculateWinner";
import CustomModal from "./CustomModal";

const GameBoard = () => {
  const [modalOpen, setModalOpen] = useState(false);
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

    const latestStep = tempHistory[tempHistory.length - 1];

    const currentBoardState = [...latestStep.squares];

    // check if the game should continue or if the clicked square is already filled
    if (calculateWinner(currentBoardState) || currentBoardState[i]) {
      return;
    }

    currentBoardState[i] = "X";

    if (calculateWinner(currentBoardState)) {
      setHistory(tempHistory.concat([{ squares: currentBoardState }]));
      setStepNumber(tempHistory.length);
      return; // If user wins, no need to proceed to computer's move
    }

    const emptySquares = currentBoardState.reduce((acc, square, index) => {
      if (square === null) {
        acc.push(index);
      }
      return acc;
    }, []);

    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    const computerMoveIndex = emptySquares[randomIndex];
    currentBoardState[computerMoveIndex] = "O";

    setHistory(tempHistory.concat([{ squares: currentBoardState }]));
    setStepNumber(tempHistory.length);

    if (calculateWinner(currentBoardState) || tempHistory.length === 8) {
      // Check for winner or if it's the last move
      // If there's a winner or all squares are filled, stop the game
      return;
    }
  };

  const winner = calculateWinner(history[stepNumber].squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (!winner && stepNumber > 4) {
    status = "Oops! Play again.";
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
  const showModal = () => {
    setModalOpen(true);
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

      {modalOpen && (
        <CustomModal
          modalVisible={modalOpen}
          setModalVisible={setModalOpen}
          history={history}
        />
      )}

      <View className="flex justify-center items-center mt-2">
        <Text className="text-xl font-medium">{status}</Text>
      </View>

      <View className="flex flex-row justify-center gap-5 mt-2 px-5">
        <TouchableOpacity
          onPress={showModal}
          className={`rounded-full p-2 h-12 justify-center items-center flex-1`}
          style={{
            backgroundColor: Colors.primary,
            opacity: winner ? 1 : 0.5,
          }}
          disabled={!winner}
        >
          <Text className="text-white text-xl font-semibold">History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="rounded-full p-2 h-12 justify-center items-center flex-1"
          style={{ backgroundColor: Colors.primary }}
          onPress={resetGame}
        >
          <Text className="text-white text-xl font-semibold">Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameBoard;
