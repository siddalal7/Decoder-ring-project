// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const repeatChars = function(string) {
    for (let i = 0; i < string.length; i++) {
      if (string.indexOf(string[i]) !== string.lastIndexOf(string[i])) {
        return false
      }
    }
    return true
  }

  let normalAlphabet = "abcdefghijklmnopqrstuvwxyz"
  normalAlphabet = normalAlphabet.split('')
    
  function substitution(input, alphabet, encode = true) {
    let result = ""
    let matchingLetter
    let matchingIndex
    let encodedLetter

    try {
    if (!alphabet || alphabet.length !== 26 || !repeatChars(alphabet)) {
      throw false
    } else {
        input.toLowerCase().split("").forEach((char) => {
          if (char == " ") {
            result += char
            return result
          } else {
            if (encode) {
              matchingLetter = normalAlphabet.find((letter) => letter === char)
              matchingIndex = normalAlphabet.indexOf(matchingLetter)
              encodedLetter = alphabet[matchingIndex]
          } if (!encode) {
              matchingIndex = alphabet.indexOf(char)
              encodedLetter = normalAlphabet[matchingIndex]
          }
              result += encodedLetter
          }
            }) 
            return result
          }
    } catch (error) {
      return error
      }
    }
    
  return {
    substitution,
  }
})()

module.exports = { substitution: substitutionModule.substitution };