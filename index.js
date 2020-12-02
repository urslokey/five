const close =document.querySelector('.close-btn');
const modal =document.querySelector('.modal-btn');
const overlay =document.querySelector('.modal-overlay');

modal.addEventListener('click',showModal);
close.addEventListener('click',closeModal);

function showModal(){

        // overlay.classList.add('open-modal');


}

function closeModal(){

    // overlay.classList.remove('open-modal');
}

setInterval(closeModal,2000);

