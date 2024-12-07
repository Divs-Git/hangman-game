import React from "react";
import { useLocation } from "react-router-dom";

const PlayGame = () => {
  const { state } = useLocation();

  return <React.Fragment>{state.wordSelected}</React.Fragment>;
};

export default PlayGame;
