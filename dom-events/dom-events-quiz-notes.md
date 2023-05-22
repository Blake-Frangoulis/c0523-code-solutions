# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  For debugging and an easy way to inspect your variables in the browser

- What is the purpose of events and event handling?
  Events are for giving a signal of some kind when a condition occurs such as hovering over an element. Event handling is for how you want to react to that event.

- Are all possible parameters required to use a JavaScript method or function?
  Not all possible parameters are required. \*

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()

- What is a callback function?
  A function passed into another function as an argument, which is then invoked inside the outer function.

- What object is passed into an event listener callback when the event fires?
  The callback function. \*

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The event.target is the element being targeted by the event. You could check by logging it into the console during the event.

- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  In the first snippet handleClick is being passed as an argument (callback function) while in the second it is being entered as a function. \*

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
