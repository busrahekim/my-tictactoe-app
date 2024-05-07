export const getHistory = (props: { history: Square[] }): Move[] => {
  const historyArray: Move[] = [];

  // Initialize orderedArray
  const orderedArray: Move[] = [];
  const xArray: Move[] = [];
  const oArray: Move[] = [];

  const isMoveExists = (index: number): boolean => {
    return orderedArray.some((move) => move.indexedAt === index);
  };
  // Iterate through history
  props.history.forEach((step: Square) => {
    // Initialize an array to store the moves for this step
    let stepMoves: Move[] = [];

    // Iterate through the squares of the step
    step.squares.forEach((square: string | null, index: number) => {
      // If the square is not null, push it to stepMoves with its index
      if (square !== null && !isMoveExists(index + 1)) {
        stepMoves.push({ value: square, indexedAt: index + 1 });
      }
    });

    // Push stepMoves to orderedArray if it's not empty
    if (stepMoves.length > 0) {
      orderedArray.push(...stepMoves);
    }
  });

  orderedArray.forEach((move) => {
    // Check the value of the move
    if (move.value === "X") {
      // If the value is "X", push it to xArray
      xArray.push(move);
    } else if (move.value === "O") {
      // If the value is "O", push it to oArray
      oArray.push(move);
    }
  });

  // Determine the length of the historyArray
  const maxLength = Math.max(xArray.length, oArray.length);

  // Iterate through both arrays simultaneously
  for (let i = 0; i < maxLength; i++) {
    // If there is a move in xArray at index i, push it to historyArray
    if (xArray[i]) {
      historyArray.push(xArray[i]);
    }
    // If there is a move in oArray at index i, push it to historyArray
    if (oArray[i]) {
      historyArray.push(oArray[i]);
    }
  }

  // Now historyArray contains moves alternately from xArray and oArray
  console.log("History Array:", historyArray);

  return historyArray;
};
