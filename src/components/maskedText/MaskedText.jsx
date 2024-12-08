import React from "react";
import getMaskedText from "./getMaskedText.js";

const MaskedText = ({ text, guessedLetters }) => {
  const maskedString = getMaskedText(text, guessedLetters);

  return (
    <React.Fragment>
      {maskedString.map((letter, i) => {
        return (
          <span key={i} className="mx-1">
            {letter}
          </span>
        );
      })}
    </React.Fragment>
  );
};

export default MaskedText;
