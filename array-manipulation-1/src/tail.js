/* exported tail */
function tail(array) {
  const output = [];
  for (let i = 1; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
