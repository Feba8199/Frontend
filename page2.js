var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// open
modalBtn.addEventListener('click' , openModal);
// close
closeBtn.addEventListener('click' , closeModal);


function openModal(){
modal.style.display = 'block';
}
function closeModal(){
  modal.style.display = 'none';
}