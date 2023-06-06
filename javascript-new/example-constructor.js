function ExampleConstructor() {}
console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log(
  'typeof ExampleConstructor.prototype:',
  typeof ExampleConstructor.prototype
);

const newConstructor = new ExampleConstructor();
console.log('newConstructor:', newConstructor);

const isInstanceOf = newConstructor instanceof ExampleConstructor;
console.log('isInstanceOf:', isInstanceOf);
