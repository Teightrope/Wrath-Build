function firstUpper(string) {
  // This variable grabs the string, splits all the letters up, grabs the first one, and then makes it uppercase
const first = string.split("")[0].toUpperCase()
// This variable takes the string, splits all the letters up, gets rid of the last letter
const rest = string.split("").slice(1).join("")
// This adds the two strings together
return first + rest
}

module.exports = firstUpper;
