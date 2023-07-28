const myButton = document.querySelector('.w');
const myDiv = document.querySelector('.third');

  myButton.addEventListener('click', toggleDiv);

  function toggleDiv() {
    myDiv.classList.toggle('active')
  }