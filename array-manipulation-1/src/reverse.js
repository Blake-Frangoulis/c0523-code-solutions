/* exported reverse */
function reverse(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[array.length - 1 - i]);
  }
  return output;
}
