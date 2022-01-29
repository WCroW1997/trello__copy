let colorInput = document.getElementById('trello__color')
let bodyColor = document.querySelector('body')
let boardColor = document.querySelectorAll('.board__color')
let board = document.querySelectorAll('.board')

colorInput.addEventListener('change', () =>{
    let colorHex = colorInput.value
    bodyColor.style.backgroundColor = colorHex
})

for (let index = 0; index < board.length; index++) {
    let boardIndex = board[index]
    const element = boardColor[index];
    element.addEventListener('change', () =>{
        let colorHex = element.value
        boardIndex.style.backgroundColor = colorHex
    })
    
}

