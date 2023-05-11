/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const output = [];
  for (let i = 0; i < words.length; i++) {
    output.push((words[i] += suffix));
  }
  return output;
}
