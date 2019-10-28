function makeBoxLetter(word) {
      // This is basically a list of all of the possible number emojis that there is
      const numbers = [
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
            'zero'
      ]
      // This is checking if each character is an alpabetic character, if it is then it is placed as an emoji and if it is not then it is just returned as is
      return word.replace(/\w/g, (w) => `:${isNaN(w) ? `regional_indicator_${w}` : numbers[w - 1]}:`)
}

module.exports = makeBoxLetter
