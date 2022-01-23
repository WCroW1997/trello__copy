
let draggableItem = null

function dragNdrop() {
    let boards = document.querySelectorAll('.card__zone')
    let cards = document.querySelectorAll('.card')

    for (let index = 0; index < cards.length; index++) {
        const item = cards[index]
        
        item.addEventListener('dragstart', () => {
            draggableItem = item
            setTimeout(() => {
                item.style.display = 'none'
            }, 0)
        })

        item.addEventListener('dragend', () =>{
            setTimeout(() => {
                item.style.display = 'block'
                draggableItem = null
            }, 0)
        })

        for (let j = 0; j < boards.length; j++) {
            const board = boards[j]

            board.addEventListener('dragover', e =>e.preventDefault() )

            board.addEventListener('dragenter', function(e) {
                e.preventDefault()
                this.style.backgroundColor = 'rgba(0,0,0, .3)'
            } )

            board.addEventListener('drop', function(e) {
                this.style.backgroundColor = 'rgba(0,0,0, 0)'
                this.append(draggableItem)
            })
        }
    }
}

dragNdrop()