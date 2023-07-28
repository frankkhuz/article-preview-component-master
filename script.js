const myButton = document.querySelector('.w');
const myDiv = document.querySelector('.three');

  myButton.addEventListener('click', toggleDiv);

  function toggleDiv() {
    myDiv.classList.toggle('active')
    console.log('clicking');
  }
  