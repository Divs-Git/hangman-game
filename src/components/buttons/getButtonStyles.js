function getButtonStyles(buttonStyle) {
  const baseStyles = 'px-4 py-2 rounded-md' // Padding and border-radius

  if (buttonStyle === 'primary') {
    return `${baseStyles} bg-blue-500 text-white hover:bg-blue-600`
  } else if (buttonStyle === 'secondary') {
    return `${baseStyles} bg-gray-500 text-white hover:bg-gray-600`
  } else if (buttonStyle === 'danger') {
    return `${baseStyles} bg-red-500 text-white hover:bg-red-600`
  } else if (buttonStyle === 'success') {
    return `${baseStyles} bg-green-500 text-white hover:bg-green-600`
  }
}

export default getButtonStyles
