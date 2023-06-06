const library = [
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    isbn: '9780061122415',
  },
  {
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    isbn: '9781594631931',
  },
  {
    title: 'The Plague',
    author: 'Albert Camus',
    isbn: '9780679720218',
  },
];

console.log('library:', library);
console.log('typeof library:', typeof library);

const stringifyLibrary = JSON.stringify(library);
console.log('stringifyLibrary:', stringifyLibrary);
console.log('typeof stringifyLibrary:', typeof stringifyLibrary);

const student = '{"numberID": 2813308004, "studentName": "Mike Jones"}';
console.log('student', student);
console.log('typeof student', typeof student);

const parsedString = JSON.parse(student);
console.log('parsedString:', parsedString);
console.log('typeof parsedString:', typeof parsedString);
