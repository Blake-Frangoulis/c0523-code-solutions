const $contactForm = document.querySelector('#contact-form');

function formSubmit(event) {
  event.preventDefault();
  const output = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    input: $contactForm.elements.message.value,
  };
  console.log(output);
}

$contactForm.addEventListener('submit', formSubmit);
