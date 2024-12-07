import React from 'react'
import getButtonStyles from './getButtonStyles'

const Button = ({ text, onClickHandler, buttonStyle, type = 'button' }) => {
  return (
    <React.Fragment>
      <button
        className={`${getButtonStyles(buttonStyle)}`}
        type={type}
        onClick={onClickHandler}
      >
        {text}
      </button>
    </React.Fragment>
  )
}

export default Button
