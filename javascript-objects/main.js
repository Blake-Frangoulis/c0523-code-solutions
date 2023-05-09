const student = {
  firstName: 'Blake',
  lastName: 'Frangoulis',
  age: 25,
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Driver';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

const vehicle = {
  make: 'Toyota',
  model: 'Highlander',
  year: '2006',
};

vehicle['color'] = 'silver';
console.log("value of vehicle['color']:", vehicle['color']);
vehicle['isConvertible'] = false;
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Frogger',
  type: 'cat',
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
