# javascript-timers-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a "callback" function?
  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

- Besides adding an event listener callback function to an element or the `document`, what is one way to delay the execution of a JavaScript function until some point in the future?
  Using the setTimeout() method.

- How can you set up a function to be called repeatedly without using a loop?
  Using the setInterval() method.

- What is the default time delay if you omit the `delay` parameter from `setTimeout()` or `setInterval()`?
  The default delay is 0.

- What do `setTimeout()` and `setInterval()` return?
  setTimeout() returns timeoutID which is a positive integer value which identifies the timer created by the call to setTimeout(), that can be passed to clearTimeout() to cancel the timeout.
  setInterval() returns intervalID which is a numeric, non-zero value which identifies the timer created by the call to setInterval(); this value can be passed to clearInterval() to cancel the interval.

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