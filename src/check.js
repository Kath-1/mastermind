function check(guessed, code) {
  let correctlyPlaced = 0;
  let correctColor = 0;

  const remaingCode = [...code];
  const remaingGuess = [...guessed];

  //Check that the guess is complete

  //Check that the code is complete

  //Check for correctly placed pins
  for (let i = 0; i < guessed.length; i++) {
    const guess = guessed[i];
    if (guess === remaingCode[i]) {
      correctlyPlaced++;
      remaingCode[i] = null;
      remaingGuess[i] = null;
    }
  }

  //Check for pins with correct color among the remaing pins
  for (let i = 0; i < guessed.length; i++) {
    const guess = remaingGuess[i];
    if (guess && remaingCode.indexOf(guess) !== -1) {
      correctColor++;
      remaingCode[remaingCode.indexOf(guess)] = null;
    }
  }

  return {
    black: correctlyPlaced,
    white: correctColor,
  };
}

module.exports = check;
