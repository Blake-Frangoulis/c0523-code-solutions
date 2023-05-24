const $span = document.querySelectorAll('span');

let counter = 0;

function typing(event) {
  if ($span[counter].textContent === event.key) {
    $span[counter].classList.add('green');
    console.log(event.key);
    counter++;
    $span[counter].classList.add('current');
  } else {
    $span[counter].classList.add('red');
  }
}

document.addEventListener('keydown', typing);
