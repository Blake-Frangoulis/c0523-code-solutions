/* exported todos */

window.addEventListener('beforeunload', (event) => {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});

let todos = [];
const previousTodosJson = localStorage.getItem('javascript-local-storage');
if (previousTodosJson !== null) {
  todos = JSON.parse(previousTodosJson);
}
