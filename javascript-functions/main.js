function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  console.log(seconds);
}
convertMinutesToSeconds(5);

function greet(name) {
  const greeting = 'Hey, ' + name;
  console.log(greeting);
}
greet('Beavis');

function getArea(width, height) {
  const area = width * height;
  console.log(area);
}
getArea(17, 42);

function getFirstName(person) {
  const firstName = person.firstName;
  console.log(firstName);
}
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

function getLastElement(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  console.log(lastElement);
}
getLastElement(['propane', 'and', 'propane', 'accessories']);
