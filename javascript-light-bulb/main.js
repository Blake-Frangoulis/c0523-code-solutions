const $lightBulb = document.querySelector('.light-bulb');
const $row = document.querySelector('.row');

function lightsSwitch(event) {
  $lightBulb.classList.toggle('on');
  $row.classList.toggle('on');
}

$lightBulb.addEventListener('click', lightsSwitch);
