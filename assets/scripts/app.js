const addMovieCard = document.getElementById('add-modal');
const addButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddButton = document.querySelector('#add-modal .btn--passive');
const confirmAddMovieButton = cancelAddButton.nextElementSibling;
const userInputs = addMovieCard.querySelectorAll('input');

let DOM ={
    addMovieCard: addMovieCard,
    addButton: addButton,
    backdrop: backdrop,
    cancelAddButton: cancelAddButton,
    confirmAddMovieButton: confirmAddMovieButton
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

const addMovieHandler = () =>{
    const title = DOM.userInputs[0].value;
    const imageUrl = DOM.userInputs[1].value;
    const rating = DOM.userInputs[2].value;
}

DOM.addButton.addEventListener('click', toggleModal);
DOM.cancelAddButton.addEventListener('click', backdropClickHandler);
DOM.confirmAddMovieButton.addEventListener('click', )