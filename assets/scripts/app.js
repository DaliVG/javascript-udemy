const addMovieCard = document.getElementById('add-modal');
const addButton = document.querySelector('header button');
let DOM ={
    addMovieCard: addMovieCard,
    addButton: addButton
}

const toggleModal = () => {
    DOM.addMovieCard.classList.toggle('visible');
}

DOM.addButton.addEventListener('click', toggleModal)