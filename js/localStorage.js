let cardArr 
let boardArr 
let userArr
let mainBoard

!localStorage.boardArr ? boardArr = [] : boardArr = JSON.parse(localStorage.getItem('boardArr'))
!localStorage.cardArr ? cardArr = [] : cardArr = JSON.parse(localStorage.getItem('cardArr'))
!localStorage.userArr ? userArr = [] : userArr = JSON.parse(localStorage.getItem('userArr'))
!localStorage.mainBoard ? mainBoard = [] : mainBoard = JSON.parse(localStorage.getItem('mainBoard'))

const addLocal = () => {
    localStorage.setItem('boardArr', JSON.stringify(boardArr))
    localStorage.setItem('cardArr', JSON.stringify(cardArr))
    localStorage.setItem('userArr', JSON.stringify(userArr))
    localStorage.setItem('mainBoard', JSON.stringify(mainBoard))
}

function cardAdd(cardNameValue, discriptionValue, tagValue) {
    this.title = cardNameValue
    this.discription = discriptionValue
    // this.date = dateValue
    this.tag = tagValue
}

function boardAdd(boardNameValue) {
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



