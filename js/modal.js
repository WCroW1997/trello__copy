const showCreateModal = () => {
    let createModal = document.querySelector('.modal__createBoard')
    let groupModal = document.querySelector('.modal__group')
    createModal.classList.add('modal__show')
    groupModal.classList.add('modal__show')
}

const closeCreateModal = () =>{
    let createModal = document.querySelector('.modal__createBoard')
    let groupModal = document.querySelector('.modal__group')
    createModal.classList.remove('modal__show')
    groupModal.classList.remove('modal__show')
}


const showCardModal = () => {
    let cardModal = document.querySelector('.modal__newCard')
    let groupModal = document.querySelector('.modal__group')
    cardModal.classList.add('modal__show')
    groupModal.classList.add('modal__show')
}

const closeCardModal = () => {
    let cardModal = document.querySelector('.modal__newCard')
    let groupModal = document.querySelector('.modal__group')
    cardModal.classList.remove('modal__show')
    groupModal.classList.remove('modal__show')
}



