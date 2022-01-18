

const showCreateModal = () => {
    let createModal = document.querySelector('.modal__createBoard')
    let groupModal = document.querySelector('.modal__group')
    createModal.classList.add('modal__show')
    groupModal.classList.add('modal__show')
}

const showCardModal = () => {
    let cardModal = document.querySelector('.modal__newCard')
    let groupModal = document.querySelector('.modal__group')
    cardModal.classList.add('modal__show')
    groupModal.classList.add('modal__show')
}

const showModal = index => {
    let createModal = document.querySelector('.modal__createBoard')
    let closeModalWindow = document.querySelector('.modal__close__btn')
    let changeBtn = document.querySelector('.modal__btn')
    let groupModal = document.querySelector('.modal__group')
    
    createModal.classList.add('modal__show')
    groupModal.classList.add('modal__show')


    setTimeout(() => {
        modalWindow.classList.add('modal__show')
    }, 600);
    

    closeModalWindow.addEventListener("click", ()  => {
        modalWindow.classList.remove('modal__show')
    })  

    changeBtn.addEventListener("click" , () =>{
        let modalText = document.querySelector('.modal__input')
        tasks[index].text = modalText.value
        addLocal()
        fillList()
        modalWindow.classList.remove('modal__show')
        modalText.value = ''
        setTimeout(() => {
            showPop()
        }, 600); 
    })
    
}

