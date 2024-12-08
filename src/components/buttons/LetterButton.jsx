import React from "react";
const ALPHABETS = "qwertyuiopasdfghjklzxcvbnm";

const LetterButton = ({ text, guessedLetters, onLetterClick }) => {
  const originalLetters = new Set(text.toUpperCase().split(""));
  const guessedLettersSet = new Set(guessedLetters);
  function buttonStyle(letter) {
    console.log(letter);
    if (guessedLettersSet.has(letter)) {
      console.log(guessedLettersSet, letter, originalLetters);
      return `${originalLetters.has(letter) ? "bg-green-500" : "bg-red-500"} `;
    } else {
      return "bg-blue-500";
    }
  }

  function handleLetterClick(event) {
    const characterOfTheLetter = event.target.textContent;
    onLetterClick?.(characterOfTheLetter);
  }

  return (
    <React.Fragment>
      {ALPHABETS.toUpperCase()
        .split("")
        .map((letter) => {
          return (
            <button
              key={`button-${letter}`}
              onClick={handleLetterClick}
              disabled={guessedLettersSet.has(letter)}
              className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(
                letter
              )}`}
            >
              {letter}
            </button>
          );
        })}
    </React.Fragment>
  );
};

export default LetterButton;
