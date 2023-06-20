# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  The parameters are placed in parenthesis followed by an arrow `=>` then followed by functions code block.

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  In a concise body, only a single expression is specified, which becomes the implicit return value. In a block body, you must use an explicit return statement.

- When using _concise body syntax_, how do you return an object literal?
  By adding parentheses around the entire body.

- In the expression
  `js
    foo(() => 42);
    `

  - Identify the arrow function
    foo

  - How many arguments does the arrow function take?
    0 arguments

  - What value does it return?
    The number 42

  - How many arguments are passed to the function `foo`?
    0 arguments

  - What type of argument is passed to the function `foo`?
    None

- In the expression
  `` js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
     `` - Identify the arrow function
  bar

      - How many arguments does the arrow function take?

  1 argument

      - What value does it return?

  A console log containing a template literal.

      - How many arguments are passed to the function `bar`?

  1 argument

      - What type of argument is passed to the function `bar`?

  A number

      - When does the arrow function's code get executed?

  When the function is called.

- How does the value of `this` differ between standard functions and arrow functions?
  In a standard function `this` is defined by calling the object. In an arrow function `this` is taken from lexical scope.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
