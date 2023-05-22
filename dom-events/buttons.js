function handleClick(event) {
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

const $ClickButton = document.querySelector('.click-button');
$ClickButton.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log('event', event);
  console.log('event.target', event.target);
}

const $HoverButton = document.querySelector('.hover-button');
$HoverButton.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

const $DoubleClickButton = document.querySelector('.double-click-button');
$DoubleClickButton.addEventListener('dblclick', handleDoubleClick);
