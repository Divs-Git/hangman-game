import React from 'react'
import TextInput from '../inputs/TextInput'
import Button from '../buttons/Button'

const TextInputForm = ({
  textInputType,
  handleFormSubmit,
  handleTextInputChange,
  handleShowHideClick,
}) => {
  return (
    <React.Fragment>
      <form onSubmit={handleFormSubmit}>
        <div>
          <TextInput
            type={textInputType}
            label={'Enter a word or a phrase'}
            placeholder='Enter a phrase here...'
            onChangeHandler={handleTextInputChange}
          />
        </div>
        <div>
          <Button
            buttonStyle='secondary'
            text={'Show/Hide'}
            onClickHandler={handleShowHideClick}
          />
        </div>
        <div>
          <Button buttonStyle='primary' text={'Submit'} type='submit' />
        </div>
      </form>
    </React.Fragment>
  )
}

export default TextInputForm
