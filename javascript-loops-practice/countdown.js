/* exported countdown */
function countdown(number) {
  const output = [];
  for (let i = number; i >= 0; i--) {
    output.push(i);
  }
  return output;
}
