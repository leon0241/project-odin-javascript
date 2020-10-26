const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const text1 = document.createElement('p');
text1.style.color = "red";
text1.textContent = "Hey I'm red!";

const text2 = document.createElement('h3');
text2.style.color = "blue";
text2.textContent = "I'm a blue h3!";

const div = document.createElement('div');
div.setAttribute('style', 'borderColor: black; backgroundColor: pink')

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div!"

const p2 = document.createElement('p');
p2.textContent = "ME TOO!"

const btn1 = document.querySelector('#btn1');
//btn1.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

//NAMED FUNCTION
//function alertFunction() {
//  alert("YAY! YOU DID IT!");
//}
//
//btn2.addEventListener('click', alertFunction);

btn1.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

container.appendChild(content);
container.appendChild(text1);
container.appendChild(text2);
div.appendChild(h1);
div.appendChild(p2)
container.appendChild(div);
