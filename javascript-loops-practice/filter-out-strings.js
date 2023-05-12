/* exported filterOutStrings */
function filterOutStrings(values) {
  const filteredString = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      filteredString.push(values[i]);
    }
  }
  return filteredString;
}
