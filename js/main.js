const showModalBoardBtn = document.querySelector('.addNewDoard')
let showModalCardBtn = document.querySelectorAll('.createCard__btn')
let mainBoardSection = document.querySelectorAll('.main__board')
let cardTitle = document.querySelector('.card__name')
let cardText = document.querySelector('.card__text')
let cardTag = document.querySelector('.card__tag')
let userName = document.querySelector('.user__name')
let userSex = document.querySelector('.user__sex')
const boardGroup = document.querySelector('.board__group')
const mainBoardGroup = document.querySelector('.main__board__group')
const cardZone = document.querySelectorAll('.card__zone')

// создания доски
showModalBoardBtn.addEventListener("click", () => {
    const boardCreateBtn = document.querySelector('.create__btn')
    const closeModalBoardBtn = document.querySelector('.modal__close__btn')

    showCreateModal()

    function handleBoardClick() {
        let boardNameInput = document.querySelector('.board__name')
        boardArr.push(new boardAdd(boardNameInput.value))
        boardNameInput.value = ''
        fillBoard()
        addLocal()
        closeCreateModal()
        boardCreateBtn.removeEventListener('click', handleBoardClick)
    }

    boardCreateBtn.addEventListener('click', handleBoardClick)

    closeModalBoardBtn.addEventListener("click", () => {
        const boardNameInput = document.querySelector('.board__name')
        boardNameInput.value = ''
        closeCreateModal()
        createBoardBtn.removeEventListener('click', handleBoardClick)
    })
})

//создание карточки

const createBoardCard = index => {

    const createCardBtn = document.querySelector('.create__card__btn')
    const closeModalCardBtn = document.querySelector('.modalCard__close__btn')
    showCardModal()

    function handleCreateButtonClick() {
        
        let cardName = cardTitle.value
        let cardDiscription = cardText.value
        let cardTagValue = cardTag.value
        cardArr.push(new cardAdd(cardName, cardDiscription, cardTagValue))
        addLocal()
        fillCard()
        closeCardModal()
        createCardBtn.removeEventListener('click', handleCreateButtonClick)
    }

    createCardBtn.addEventListener('click', handleCreateButtonClick)

    closeModalCardBtn.addEventListener("click", () => {
        closeCardModal()
        createCardBtn.removeEventListener('click', handleCreateButtonClick)
    })
}


const fillCard = () => {
    cardZone.innerHTML = ''
    if (cardArr.length > 0) {
        cardArr.forEach((item, index) => {
            cardZone.innerHTML += createCard(item, index)
        })
    }
}

const fillBoard = () => {
    boardGroup.innerHTML = ''
    if (boardArr.length > 0) {
        boardArr.forEach((item, index) => {
            boardGroup.innerHTML += createBoard(item, index)
        })
    }
}

const fillMainBoard = () => {
    mainBoardGroup.innerHTML += createMainBoard()
}

// for (let index = 0; index < mainBoardSection.length; index++) {
//     const element = mainBoardSection[index];

//     mainBoard.push(new boardMainAdd())

// }

// создание элементов

const createCard = (cardArr, index) => {
    return `
            <div class="card" draggable="true">
                <h3 class="card__title" maxlength="20">${cardArr.title}</h3>
                <span class="label tag">${cardArr.tag}</span>
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


const createBoard = (boardArr, index) => {
    return ` 
        <section class="board">
            <h2 contenteditable="true" class="board__title" maxlength="20">${boardArr.name}</h2>
            <button class="btn createCard__btn" onclick="createBoardCard(${index})">Добавить новою карточку</button>
            <button class="btn" onclick="deleteBoard">Удалить доску</button>
        </section>
    `
}

const createMainBoard = (index) => {
    return `
        <section class="main__board">
            <h2 contenteditable="true" class="main__board__title" maxlength="20">To do</h2>
            <button class="btn createCard__btn" onclick="createBoardCard(${index})">Добавить новою карточку</button>
            <div class="card__zone">
                
            </div>
        </section>
        <section class="main__board">
            <h2 contenteditable="true" class="main__board__title" maxlength="20">In progress</h2>
            <button class="btn createCard__btn" onclick="createBoardCard(${index})">Добавить новою карточку</button>
            <div class="card__zone">
                
            </div>
        </section>
        <section  class="main__board">
            <h2 contenteditable="true" class="main__board__title" maxlength="20">Done</h2>
            <button class="btn createCard__btn" onclick="createBoardCard(${index})">Add another task</button>
            <div class="card__zone">
            
            </div>
        </section>
        `
}


// вызов функций

addLocal()
fillBoard()
fillCard()
fillMainBoard()