/* exported filterOutNulls */
function filterOutNulls(values) {
  const filteredNulls = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i]) {
      filteredNulls.push(values[i]);
    }
  }
  return filteredNulls;
}
