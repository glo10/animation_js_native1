

const btnPrimary = document.querySelector('#content-btn');
const msg = document.querySelector('#content-msg');
const counter = document.querySelector('#content-counter');
const config = {
  delay:4000
};

let stopInterval = null;

// Fonctions
function addEvents() {
  btnPrimary.addEventListener('click', displayBox);
}

function hideBox(){
  msg.style.display = 'none';
  clearInterval(stopInterval);
  stopInterval = null;
  msg.setAttribute('class','alert alert-success');
  msg.innerText = "Test réussi !";
}

function displayBox(){
  if(stopInterval == null){
    msg.style.display = 'block';
    counter.style.visibility = 'visible';
    counter.innerText = config.delay/1000;
    setTimeout(hideBox,config.delay+400);
    stopInterval = setInterval(countdown,1000);
  }
}

function countdown(){
  let currentValue = parseInt(counter.innerText) - 1;
  counter.innerText = currentValue;
  if(counter.innerText == '0'){
    msg.setAttribute('class','alert alert-danger');
    msg.innerText = "BOOOOMMMMM";
  }
}

function init() {
  addEvents();
}

init();
