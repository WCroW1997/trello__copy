const showModalBoardBtn = document.querySelector('.addNewDoard')
let showModalCardBtn = document.querySelectorAll('.createCard__btn')
let cardTitle = document.querySelector('.card__name')
let cardText = document.querySelector('.card__text')
let cardTag = document.querySelectorAll('.card__tag')
let userName = document.querySelector('.user__name')
let userSex = document.querySelector('.user__sex')
const boardGroup = document.querySelector('.board__group')
let createBoardBtn = document.querySelector('.create__btn')

showModalBoardBtn.addEventListener('click', () =>{
    showCreateModal()
    
    createBoardBtn.addEventListener('click' , () =>{
        let boardNameInput = document.querySelector('.board__name')
        let boardName = boardNameInput.value
        boardArr.push(new boardAdd(boardName))
        boardNameInput.value = ''
        addLocal()
        fillBoard()
        closeCreateModal()
    })
    const closeModalBoardBtn = document.querySelector('.modal__close__btn')

    

    closeModalBoardBtn.addEventListener("click", () => {
        const boardNameInput = document.querySelector('.board__name')
        boardNameInput.value = ''
        closeCreateModal()
    })
})






const fillCard = () => {
    boardGroup.innerHTML = ''
    if(cardArr.length > 0){
        cardArr.forEach((item, index) => {
            boardGroup.innerHTML += createCard(item, index)
        })
    }
}

const fillBoard = () => {
    boardGroup.innerHTML = ''
    if(boardArr.length > 0){
        boardArr.forEach((item, index) => {
            boardGroup.innerHTML += createBoard(item, index)
        })
    }
}

const createCard = () => {
        return `
            <div class="card" draggable="true">
                <h3 class="card__title" maxlength="20">${cardName}</h3>
                <span class="label tag">${cardTagValue}</span>
                <div class="card__user">
                    <img src="" alt="">
                    <div class="user__info">
                        <h4 class="user__name">${userName}</h4>
                        <p class="user__gender">${userSex}</p>
                    </div>
                </div>
            </div>
            `
}


const createBoard = () => {
    return ` 
        <h2 contenteditable="true" class="board__title" maxlength="20">${boardArr.name}</h2>
        <button class="btn createCard__btn" >Добавить новою карточку</button>
        <button class="btn" onclick=>Удалить доску</button>
    `
}