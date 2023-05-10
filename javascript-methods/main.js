const x = 4;
const y = 7;
const z = 47;
const maximumValue = Math.max(x, y, z);
console.log('The maximumValue is:', maximumValue);

const heroes = ['Batman', 'Spiderman', 'Hulk', 'Ironman'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('The value of randomIndex is:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('Random Hero:', randomHero);

const library = [
  {
    title: 'The Stranger',
    author: 'Albert Camus',
  },
  {
    title: 'Roadside Picnic',
    author: 'Arkady and Boris Strugatsky',
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker',
  },
];
const lastBook = library.pop();
console.log('The value of lastBook is:', lastBook);

const firstBook = library.shift();
console.log('The value of firstBook is:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('The value of library is:', library);

const fullName = 'Blake Frangoulis';
const firstAndLastName = fullName.split(' ');
console.log('The value of firstAndLastName is:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
