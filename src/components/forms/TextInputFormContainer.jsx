import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

const TextInputFormContainer = () => {
  const [textInputType, setTextInputType] = useState("password");
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();
    if (value) {
      navigate("/play", { state: { wordSelected: value } });
    }
  }
  function handleTextInputChange(event) {
    setValue(event.target.value);
  }

  function handleShowHideClick() {
    if (textInputType === "text") {
      setTextInputType("password");
    } else if (textInputType === "password") {
      setTextInputType("text");
    }
  }
  return (
    <TextInputForm
      textInputType={textInputType}
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
    />
  );
};

export default TextInputFormContainer;
