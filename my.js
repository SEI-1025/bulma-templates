let socialMedia = document.querySelectorAll('.social-media > a');

socialMedia[0].setAttribute('href', 'https://www.facebook.com/OneoftheMichaelChens');
socialMedia[1].setAttribute('href', 'https://www.instagram.com/sundaebests/');
socialMedia[2].setAttribute('href', 'https://shashiirk.github.io/fake-tweet-generator/');

document.querySelector('.is-size-4').textContent = "Message us about any questions you have!"
let rightSpace = document.querySelector('.is-one-third');
let submitButton = document.querySelector('button');
submitButton.addEventListener('click', function() {
    rightSpace.classList.add('hidden');
    let newElement = document.createElement('p')
    document.querySelector('.is-two-thirds').appendChild(newElement);
    document.querySelector('.is-two-thirds > p').textContent = "Message Sent!";
    newButton = document.createElement('button');
    breakSpace = document.createElement('br');
    document.querySelector('.is-two-thirds > p').appendChild(breakSpace);
    document.querySelector('.is-two-thirds > p').appendChild(newButton);
    document.querySelector('.is-two-thirds > p > button').classList.add('button');
    document.querySelector('.is-two-thirds > p > .button').classList.add('has-text-weight-medium');
    document.querySelector('.is-two-thirds > p > .button').setAttribute('type', 'button');
    document.querySelector('.is-two-thirds > p > .button').textContent = "Send Another Message";  
    console.log(newButton);
    document.querySelector('.is-two-thirds > p > .button').addEventListener('click', function reload() {
        location.reload();
        console.log('reload');
    });
});

