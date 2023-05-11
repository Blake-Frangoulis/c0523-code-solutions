/* exported oddOrEven */
function oddOrEven(numbers) {
  const output = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      output.push('even');
    }
    if (numbers[i] % 2 !== 0) {
      output.push('odd');
    }
  }
  return output;
}
