const height = 7;
const width = 12;
const area = width * height;
console.log('Value of area:', area);
console.log('Type of area:', area);

const bill = 46;
const payment = 70;
const change = payment - bill;
console.log('Value of change:', change);
console.log('Type of change:', typeof change);

const quizzes = 90;
const midterm = 70;
const final = 85;
const grade = (quizzes + midterm + final) / 3;
console.log('Value of grade:', grade);
console.log('Type of grade:', typeof grade);

const firstName = 'Blake';
const lastName = 'Frangoulis';
const fullName = firstName + ' ' + lastName;
console.log('Value of fullName:', fullName);
console.log('Type of fullName:', typeof fullName);

const pH = 6;
const isAcidic = pH < 7;
console.log('Value of isAcidic:', isAcidic);
console.log('Type of isAcidic:', typeof isAcidic);

const headCount = 299;
const isSparta = headCount === 300;
console.log('Value of isSparta:', isSparta);
console.log('Type of isSparta:', typeof isSparta);

let motto = fullName;
motto += ' is the GOAT';
console.log('Value of motto:', motto);
console.log('Type of motto:', typeof motto);
