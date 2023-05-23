let counter = 0;

const $hotButton = document.querySelector('.hot-button');
// const $clickCount = document.querySelector('.click-count');

function increment(event) {
  counter++;
  console.log(counter);
}

$hotButton.addEventListener('click', increment);
