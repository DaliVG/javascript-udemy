const addMovieCard = document.getElementById('add-modal');
const addButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddButton = document.querySelector('#add-modal .btn--passive');

let DOM ={
    addMovieCard: addMovieCard,
    addButton: addButton,
    backdrop: backdrop,
    cancelAddButton: cancelAddButton
}


const toggleBackdrop = () => {
    DOM.backdrop.classList.toggle('visible');
}

const toggleModal = () => {
    DOM.addMovieCard.classList.toggle('visible');
    toggleBackdrop();
}

const backdropClickHandler = () => {
    toggleModal();
}

DOM.addButton.addEventListener('click', toggleModal);
DOM.cancelAddButton.addEventListener('click', backdropClickHandler);