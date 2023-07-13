# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  When the component appears for the first time.

- What is a React Effect?
  Effects let you run some code after rendering so that you can synchronize your component with some system outside of React.

- When should you use an Effect and when should you not use an Effect?
  Effects are typically used to “step out” of your React code and synchronize with some external system. If your Effect only adjusts some state based on other state, you might not need an Effect.

- When do Effects run?
  By default after every render. Otherwise when an effect runs can be controlled by specifying dependencies.

- What function is used to declare an Effect?
  useEffect()

- What are Effect dependencies and how do you declare them?
  Dependencies control when effects should be re-ran. You can declare an array of dependencies as the second argument of the useEffect call.

- Why would you want to clean up from an Effect?
  To stop or undo what the effect was originally doing when unmounting. This is useful for optimization and canceling current operations when unmounting.

- How do you clean up from an Effect?
  You can clean up from an effect by returning a cleanup function from the effect itself.

- When does the cleanup function run?
  Each time the component unmounts and every time before the effect runs again.

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
