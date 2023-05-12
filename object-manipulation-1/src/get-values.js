/* exported getValues */
function getValues(object) {
  const output = [];
  for (const property in object) {
    output.push(object[property]);
  }
  return output;
}
