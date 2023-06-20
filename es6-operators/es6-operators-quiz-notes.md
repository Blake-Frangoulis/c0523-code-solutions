# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  They evaluate operands from left to right, returning immediately with the value of the first falsy operand it ecounters; if all values are truthy the value of the last operand is returned.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Short-circuit evaluation means not both operands will be evaluated. With `&&` if the left operand is false the right will not be evaluated at all. With `||` if the left operand is true the right will not be evaluated.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  A logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. `||` will return the right operand if the left is any falsy value not only null or undefined like `??`

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  It takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. It is different than an if else because it only evaluates whether the condition is truthy or falsy.

- What is the `?.` (optional chaining) operator? When would you use it?
  It accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error. Used when there is a possibility that a reference may be missing.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  It allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. You can use it to spread out all of the elements of an array or all of the properties of an object into a new array or object.

- What data types can be spread into an array? Into an object?
  Any elements of another array and individual characters from a string can be spread into an array. Any properties of an object can be spread into an object.

- How does spread syntax differ from rest syntax?
  Spread is used to spread the values in an array or string across one or more argument as individual elements. Rest is used to pass an indefinite number of arguments or values into a function or array.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
