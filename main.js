const createBoardBtn = document.querySelector('.addNewDoard')
// const createCardBtn = document.getElementsByClassName('createCard__btn')


createBoardBtn.addEventListener("click", () => {
    showCreateModal()
    console.log('yes')
})

// createCardBtn.addEventListener("click", () => {
//     showCardModal()
//     console.log('yes')
// })

const createCard = index => {
    
    showCardModal()
}