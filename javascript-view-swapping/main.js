const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');

function activeTab(event) {
  if (event.target && event.target.matches('.tab')) {
    for (let i = 0; i < $tabElements.length; i++) {
      if ($tabElements[i] === event.target) {
        $tabElements[i].classList.add('active');
      } else {
        $tabElements[i].classList.remove('active');
      }
    }
    const dataView = event.target.getAttribute('data-view');
    for (let i = 0; i < $viewElements.length; i++) {
      if ($viewElements[i].getAttribute('data-view') !== dataView) {
        $viewElements[i].classList.add('hidden');
      } else {
        $viewElements[i].classList.remove('hidden');
      }
    }
  }
}
$tabContainer.addEventListener('click', activeTab);
