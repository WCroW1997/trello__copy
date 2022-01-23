// createCardBtn.addEventListener("click", () => {
//     showCardModal()
//     console.log('yes')
// })

// const createCard = () => {
//     let createCardBtn = document.querySelectorAll('.createCard__btn')
//     createCardBtn.forEach( btnClick =>{
//         btnClick.addEventListener("click", () => {
//             const createCardBtn = document.querySelector('.create__card__btn')
//             const closeModalCardBtn = document.querySelector('.modalCard__close__btn')
//             showCardModal()
//             console.log('31')

//             createCardBtn.addEventListener("click", () => {
//                 const cardZone = document.querySelector('.card__zone')
//                 const card = document.createElement('div')
//                 const cardNameInput = document.querySelector('.card__name')
//                 const cardName = cardNameInput.value
//                 card.classList.add('card')
//                 card.innerHTML = `
//                         <h3 class="card__title">${cardName}</h3>
//                         <span class="label tag">first tag</span>
//                         <div class="card__user">
//                             <img src="" alt="">
//                             <div class="user__info">
//                                 <h4 class="user__name">Stiven</h4>
//                                 <p class="user__gender">Male</p>
//                             </div>
//                         </div>
//                         `
//                 cardZone.append(card)
//                 closeCardModal()
//             })

//             closeModalCardBtn.addEventListener("click", () => {
//                 closeCardModal()
//                 // const boardNameInput = document.querySelector('.board__name')
//                 // boardNameInput.value = ''
//             })
//         })
//     })
// }


// const createCard = index => {
//     const createCardBtn = document.querySelector('.create__card__btn')
//     const closeModalCardBtn = document.querySelector('.modalCard__close__btn')
//     showCardModal()
//     console.log('31')

//     createCardBtn.addEventListener("click", () => {
//         const cardZone = document.querySelector('.card__zone')
//         const card = document.createElement('div')
//         const cardNameInput = document.querySelector('.card__name')
//         const cardName = cardNameInput.value
//         card.classList.add('card')
//         card.innerHTML = `
//                             <h3 class="card__title">${cardName}</h3>
//                             <span class="label tag">first tag</span>
//                             <div class="card__user">
//                                 <img src="" alt="">
//                                 <div class="user__info">
//                                     <h4 class="user__name">Stiven</h4>
//                                     <p class="user__gender">Male</p>
//                                 </div>
//                             </div>
//                             `
//         cardZone.append(card)
//         closeCardModal()
//         closeModalCardBtn.addEventListener("click", () => {
//             closeCardModal()
//             const boardNameInput = document.querySelector('.board__name')
//             boardNameInput.value = ''
//         })
//     })
// }

// createCard()

// const addAtribute = index => {
//     const createCardBtn = document.querySelectorAll('.create__card__btn')
//     createCardBtn.onclick = createCard(${index})
// }



// const changeBoardTitle = () => {
//     const boardTitle = document.querySelectorAll('.board__title') 

//     boardTitle.forEach(title => {
//         title.addEventListener('click' , e => e.target.textContent = '')
//     })
// }

// const createCard = () => {
//     let createCardBtn = document.querySelectorAll('.createCard__btn')
//     createCardBtn.forEach( btnClick =>{
//         btnClick.addEventListener("click", () => {
//             const createCardBtn = document.querySelector('.create__card__btn')
//             const closeModalCardBtn = document.querySelector('.modalCard__close__btn')
//             showCardModal()
//             console.log('31')

//             createCardBtn.addEventListener("click", () => {
//                 const cardZone = document.querySelector('.card__zone')
//                 const card = document.createElement('div')
//                 const cardNameInput = document.querySelector('.card__name')
//                 const cardName = cardNameInput.value
//                 card.classList.add('card')
//                 card.innerHTML = `
//                         <h3 class="card__title">${cardName}</h3>
//                         <span class="label tag">first tag</span>
//                         <div class="card__user">
//                             <img src="" alt="">
//                             <div class="user__info">
//                                 <h4 class="user__name">Stiven</h4>
//                                 <p class="user__gender">Male</p>
//                             </div>
//                         </div>
//                         `
//                 cardZone.append(card)
//                 closeCardModal()
//             })

//             closeModalCardBtn.addEventListener("click", () => {
//                 closeCardModal()
//             })
//         })
//     })
// }



// Старая версия создания досок и карточек

// function handleBoardCreate() {
//     const createBoardBtn = document.querySelector('.create__btn')
//     const closeModalBoardBtn = document.querySelector('.modal__close__btn')
//     showCreateModal()
//     console.log('yes')

//     function handleBoardClick() {
//         const board = document.createElement('section')
//         let boardName = boardNameInput.value
//         boardArr.push(new boardAdd(boardName))
//         console.log('21')
//         board.classList.add('board')
//         boardNameInput.value = ''
//         board.innerHTML += createBoard(boardName)
//         boardGroup.append(board)
//         closeCreateModal()
//         addLocal()
//         createBoardBtn.removeEventListener('click', handleBoardClick)
//     }

//     createBoardBtn.addEventListener("click", handleBoardClick)

//     closeModalBoardBtn.addEventListener("click", () => {
//         const boardNameInput = document.querySelector('.board__name')
//         boardNameInput.value = ''
//         closeCreateModal()
//         createBoardBtn.removeEventListener('click', handleBoardClick)
//     })
// }


// for (let index = 0; index < showModalCardBtn.length; index++) {
//     const element = showModalCardBtn[index];
//     element.addEventListener('click' , () =>{
//         const createCardBtn = document.querySelector('.create__card__btn')
//         const closeModalCardBtn = document.querySelector('.modalCard__close__btn')
//         showCardModal()
//         console.log('31')

//         function handleCreateButtonClick() {
//             const cardZone = document.querySelectorAll('.card__zone')
//             let cardName = cardTitle.value
//             let cardDiscription = cardText.value
//             let cardTagValue = cardTag.value
//             cardArr.push(new cardAdd(cardName, cardDiscription, cardTagValue))
//             addLocal()
//             cardZone[index].innerHTML += createCard(cardName, cardTagValue)
//             closeCardModal()
//             createCardBtn.removeEventListener('click', handleCreateButtonClick)
//         }

//         createCardBtn.addEventListener("click", handleCreateButtonClick)

//         closeModalCardBtn.addEventListener("click", () => {
//             closeCardModal()
//             createCardBtn.removeEventListener('click', handleCreateButtonClick)
//         })  
//     })  
// }