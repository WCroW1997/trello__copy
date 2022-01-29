const showModalBoardBtn = document.querySelector('.addNewDoard')

let mainBoardSection = document.querySelectorAll('.main__board')
let cardTitle = document.querySelector('.card__name')
let cardText = document.querySelector('.card__text')
let cardTag = document.querySelector('.card__tag')
let userName = document.querySelector('.user__name')
let userSex = document.querySelector('.user__sex')
const boardGroup = document.querySelector('.board__group')
const mainBoardGroup = document.querySelector('.main__board__group')
const cardZone = document.getElementsByClassName('card__zone')

// создания доски
showModalBoardBtn.addEventListener("click", () => {
    const boardCreateBtn = document.querySelector('.create__btn')
    const closeModalBoardBtn = document.querySelector('.modal__close__btn')

    showCreateModal()

    function handleBoardClick() {
        let boardNameInput = document.querySelector('.board__name')
        boardArr.push(new BoardAdd(boardNameInput.value))
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
    dragNdrop()
})

//создание карточки
// Карточка не выводится на монитор
const createBoardCard = () => {
    let showModalCardBtn = document.querySelectorAll('.createCard__btn')
    for (let index = 0; index < showModalCardBtn.length; index++) {
    const element = showModalCardBtn[index];
    element.addEventListener('click' , () =>{
        const createCardBtn = document.querySelector('.create__card__btn')
        const closeModalCardBtn = document.querySelector('.modalCard__close__btn')
        showCardModal()
        console.log('31')
        function handleCreateButtonClick() {
            const cardZone = document.querySelectorAll('.card__zone')
            let cardName = cardTitle.value
            let cardDiscription = cardText.value
            let cardTagValue = cardTag.value
            cardArray.push(new CardAdd(cardName, cardDiscription, cardTagValue))
            cardZone[index].innerHTML += createCard(cardName, cardTagValue)
            addLocal()
            closeCardModal()
            createCardBtn.removeEventListener('click', handleCreateButtonClick)
        } 

        createCardBtn.addEventListener("click", handleCreateButtonClick)

        closeModalCardBtn.addEventListener("click", () => {
            closeCardModal()
            createCardBtn.removeEventListener('click', handleCreateButtonClick)
        })  
    })  
    dragNdrop()
}
    this.removeEventListener('click', createBoardCard)
    console.log(25)
}





const fillCard = () => {
    cardZone.innerHTML = ''
    if (cardArray.length > 0) {
        cardArray.forEach((item) => {
            cardZone.innerHTML += createCard(item)
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
    mainBoardGroup.innerHTML += createMainBoard(cardArray)
}

// for (let index = 0; index < mainBoardSection.length; index++) {
//     const element = mainBoardSection[index];

//     mainBoard.push(new boardMainAdd())

// }

// создание элементов

const createCard = (cardArray) => {
    return `
            <div class="card" draggable="true">
                <h3 class="card__title" maxlength="20">${cardArray.title}</h3>
                <span class="label tag">${cardArray.tag}</span>
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
            <div class="card__zone">
            </div>
        </section>
    `
}

const createMainBoard = ( index) => {
    return `
        <section class="main__board board">
            <h2 contenteditable="true" class="main__board__title" maxlength="20">To do</h2>
            <button class="btn createCard__btn" onclick="createBoardCard(${index})">Добавить новою карточку</button>
            <div class="card__zone">
                <div class="card" draggable="true">
                    <h3 class="card__title" maxlength="20">${cardArray.title}</h3>
                    <span class="label tag">${cardArray.tag}</span>
                    <div class="card__user">
                        <img src="" alt="">
                        <div class="user__info">
                            <h4 class="user__name">${userName}</h4>
                            <p class="user__gender">${userSex}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="main__board board">
            <h2 contenteditable="true" class="main__board__title" maxlength="20">In progress</h2>
            <button class="btn createCard__btn" onclick="createBoardCard(${index})">Добавить новою карточку</button>
            <div class="card__zone">
                
            </div>
        </section>
        <section  class="main__board board">
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
fillMainBoard()
fillCard()