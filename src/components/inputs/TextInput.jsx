import React from 'react'

const TextInput = ({
  type = 'text',
  label,
  placeholder = 'Enter your Input here',
  onChangeHandler,
}) => {
  return (
    <React.Fragment>
      <label>
        <span className='text-gray-700'>{label}</span>

        <input
          type={type}
          className='px-4 py-2 border border-gray-500 rounded-md w-full'
          placeholder={placeholder}
          onChange={onChangeHandler}
        ></input>
      </label>
    </React.Fragment>
  )
}

export default TextInput
