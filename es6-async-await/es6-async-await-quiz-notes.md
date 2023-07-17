# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  The async function declaration creates a binding of a new async function to a given name.
  The await operator is used to wait for a Promise and get its fulfillment value.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Async and await are easier to implement because they are more concise and they make error handling easier.

- When do you use `async`?
  When defining the function.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  Await is used inside of an asynce function before a section of code that you would like to make asynchronous. You do not use await outside of an async function.

- How do you handle errors with `await`?
  Using try and catch.

- What do `try`, `catch` and `throw` do? When do you use them?
  The try block will run until it hits an error. When an error is hit the code in the catch block will run. Throw is used to throw an exception in a try...catch statement.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  The execution will not pause to wait for the promise to resolve or reject. Which can cause errors and things happening out of the intended order.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  Async and await because they are easier to implement.

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
