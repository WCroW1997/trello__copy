let colorInput = document.getElementById('trello__color')
let bodyColor = document.querySelector('body')


colorInput.addEventListener('change', () =>{
    let colorHex = colorInput.value
    console.log(bodyColor)
    bodyColor.style.backgroundColor = colorHex
})