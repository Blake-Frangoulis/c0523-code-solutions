const $h1 = document.querySelector('h1');
let count = 4;
$h1.textContent = count;

const countdownInterval = setInterval(() => {
  count--;

  if (count > 0) {
    $h1.textContent = count;
  } else {
    clearInterval(countdownInterval);
    $h1.textContent = '~Earth Beeeelooowww Us~';
  }
}, 1000);
