# css-positioning-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the **default** value for the `position` property of HTML elements?
  Static is the default value.

- How does setting `position: relative` on an element affect document flow?
  It does not affect the flow of the document.

- How does setting `position: relative` on an element affect where it appears on the page?
  By default it still appears on the same place on the page it would if it was static. Can be changed by offset values.

- How does setting `position: absolute` on an element affect document flow?
  It is removed from the normal document flow.

- How does setting `position: absolute` on an element affect where it appears on the page?
  It is positioned relative to its closest positioned ancestor, if any; otherwise, it is placed relative to the initial containing block.

- How do you constrain an absolutely positioned element to a containing block?
  If it is an ancestor, by setting the containing block to any position property besides static.

- What are the four box offset properties?
  top, right, bottom, and left.

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
