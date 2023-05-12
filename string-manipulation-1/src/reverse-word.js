/* exported reverseWord */
function reverseWord(word) {
  let output = '';
  for (let i = 0; i < word.length; i++) {
    output += word[word.length - 1 - i];
  }
  return output;
}
