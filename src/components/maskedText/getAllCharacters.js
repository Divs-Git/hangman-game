/**
 * @param {The word which is given as input and is expected to be guessed} orginalWord
 * @param {The letters which are guessed by user already} guessedLetters
 * Ex: orginalWord: HUMBLE
 *     guessedLetters ['H','M','E']
 *  @returns -> H_M_E
 */

export function getAllCharacter(orginalWord, guessedLetters) {
  guessedLetters = guessedLetters.map((letter) => letter.toUpperCase());
  const guessedLettersSet = new Set(guessedLetters);
  return orginalWord
    .toUpperCase()
    .split("")
    .map((char) => (guessedLettersSet.has(char) ? char : "_")) // ['H','_','M','_','_','E']
    .join("");
}
