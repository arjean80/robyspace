var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/roger-federer.jpg') {
        myImage.setAttribute('src', 'images/my-brilliant-friend.jpg');
    } else {
        myImage.setAttribute('src', 'images/roger-federer.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Roger Federer, the  GOAT, says, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Roger Federer, the  GOAT, says, ' + storedName;
}

myButton.onclick = function () {
  setUserName();
}