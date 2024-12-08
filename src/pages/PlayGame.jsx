import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/maskedText/MaskedText";
import LetterButton from "../components/buttons/LetterButton";
import Hangman from "../components/hangman/Hangman";

const PlayGame = () => {
  const { state } = useLocation();
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);

  function handleLetterClick(letter) {
    if (state.wordSelected.toUpperCase().includes(letter)) {
      console.log("correct");
    } else {
      setStep(step + 1);
    }
    setGuessedLetters([...guessedLetters, letter.toUpperCase()]);
  }

  return (
    <React.Fragment>
      <h1>Play Game</h1>
      <MaskedText text={state.wordSelected} guessedLetters={guessedLetters} />
      <br />
      <LetterButton
        text={state.wordSelected}
        guessedLetters={guessedLetters}
        onLetterClick={handleLetterClick}
      />
      <div>
        <Hangman step={step} />
      </div>

      <div>
        <Link to={"/"} className="text-blue-500 text-xl">
          Go to menu
        </Link>
      </div>
    </React.Fragment>
  );
};

export default PlayGame;
