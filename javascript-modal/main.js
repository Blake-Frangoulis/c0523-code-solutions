const $modalButton = document.querySelector('#modal-button');
const $modal = document.querySelector('.modal');
const $noButton = document.querySelector('#no-button');
const $overlay = document.querySelector('.overlay');

function modalToggle(event) {
  $modal.classList.toggle('on');
  $overlay.classList.toggle('on');
}

$modalButton.addEventListener('click', modalToggle);
$noButton.addEventListener('click', modalToggle);
