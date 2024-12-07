import { useState } from 'react'
import TextInputForm from './TextInputForm'

const TextInputFormContainer = () => {
  const [textInputType, setTextInputType] = useState('password')

  function handleFormSubmit(event) {
    event.preventDefault()
    console.log('Form submitted')
  }
  function handleTextInputChange(event) {
    console.log(event.target.value)
  }

  function handleShowHideClick() {
    if (textInputType === 'text') {
      setTextInputType('password')
    } else if (textInputType === 'password') {
      setTextInputType('text')
    }
  }
  return (
    <TextInputForm
      textInputType={textInputType}
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
    />
  )
}

export default TextInputFormContainer
