const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

const url='https://jsonplaceholder.typicode.com/posts';
xhr.open("GET", url);
xhr.send();

xhr.onreadystatechange = (e) => {
  console.log(xhr.responseText)
}