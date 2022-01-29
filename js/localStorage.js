let cardArray 
let boardArr 
let userArr
let mainBoard

!localStorage.boardArr ? boardArr = [] : boardArr = JSON.parse(localStorage.getItem('boardArr'))
!localStorage.cardArr ? cardArray = [] : cardArray = JSON.parse(localStorage.getItem('cardArray'))
!localStorage.userArr ? userArr = [] : userArr = JSON.parse(localStorage.getItem('userArr'))
!localStorage.mainBoard ? mainBoard = [] : mainBoard = JSON.parse(localStorage.getItem('mainBoard'))

const addLocal = () => {
    localStorage.setItem('boardArr', JSON.stringify(boardArr))
    localStorage.setItem('cardArray', JSON.stringify(cardArray))
    localStorage.setItem('userArr', JSON.stringify(userArr))
    localStorage.setItem('mainBoard', JSON.stringify(mainBoard))
}

function CardAdd(cardNameValue, discriptionValue, tagValue) {
    this.title = cardNameValue
    this.discription = discriptionValue
    // this.date = dateValue
    this.tag = tagValue
}

function BoardAdd(boardNameValue) {
    this.name = boardNameValue
}

function boardMainAdd(boardNameValue) {
    this.name = boardNameValue
}

function usersAdd(userName, userGender, userImg) {
    this.name = userName
    this.gender = userGender
    this.img = userImg
}



