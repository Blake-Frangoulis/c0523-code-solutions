const $taskList = document.querySelector('.task-list');

function target(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target && event.target.matches('button')) {
    const $taskListItem = event.target.closest('.task-list-item');
    console.log('closest .task-list-item', $taskListItem);
    $taskListItem.remove();
  }
}

$taskList.addEventListener('click', target);
