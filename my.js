let socialMedia = document.querySelectorAll('.social-media > a');

socialMedia[0].setAttribute('href', 'https://www.facebook.com/OneoftheMichaelChens');
socialMedia[1].setAttribute('href', 'https://www.instagram.com/sundaebests/');
socialMedia[2].setAttribute('href', 'https://shashiirk.github.io/fake-tweet-generator/');

let rightSpace = document.querySelector('.is-one-third');
let submitButton = document.querySelector('button');
submitButton.addEventListener('click', function() {
    rightSpace.classList.add('hidden');
    let newElement = document.createElement('p')
    document.querySelector('.is-two-thirds').appendChild(newElement);
    document.querySelector('.is-two-thirds > p').textContent = "Message Sent!";
});
