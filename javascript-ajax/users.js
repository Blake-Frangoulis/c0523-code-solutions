const $userList = document.querySelector('#user-list');
const xhrRequest = new XMLHttpRequest();
xhrRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhrRequest.responseType = 'json';
xhrRequest.addEventListener('load', function () {
  console.log('xhrRequest.status:', xhrRequest.status);
  console.log('xhrRequest.response:', xhrRequest.response);
  for (let i = 0; i < xhrRequest.response.length; i++) {
    const li = document.createElement('li');
    li.textContent = xhrRequest.response[i].name;
    $userList.appendChild(li);
  }
});

xhrRequest.send();
