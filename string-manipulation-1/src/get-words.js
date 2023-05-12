/* exported getWords */
function getWords(string) {
  let output = [];
  if (string.length < 1) {
    return output;
  }
  output = string.split(' ');
  return output;
}
