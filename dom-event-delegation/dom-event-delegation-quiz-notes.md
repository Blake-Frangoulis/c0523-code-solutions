# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  The event.target is the most deeply nested element that caused the event.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  It will bubble up from where the event happened to the element with the eventlistener on it.

- What DOM element property tells you what type of element it is?
  The tagName property.

- What does the `element.closest()` method take as its argument and what does it return?
  It takes a css selector and returns the closest element to the event target that matches that selector.

- How can you remove an element from the DOM?
  Using the element.remove() method.

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  Using event bubbling.

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
