//console.log('[main.js] is connected');

let buttonIn = document.querySelector('button');
console.log(buttonIn);

let navBar = document.querySelector('.navbar-end').childNodes;
//console.log(navBar);
navBar[1].textContent = "Hello";
navBar[3].textContent = "World";
navBar[5].textContent = "From";
navBar[7].textContent = "DOM";
navBar[9].textContent = "JS";



buttonIn.onclick = function (e) {
    let bodyElem = document.querySelector('body');
    bodyElem.style.backgroundColor = "Green";
    e.preventDefault();
}