import './style.css';

const testElement = document.getElementById('body');

const newElement = document.createElement('div');
newElement.classList.add('test-style');
newElement.textContent = 'Hello World!';

testElement.append(newElement);
