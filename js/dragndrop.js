
let draggableItem = null

function dragNdrop() {
    let zones = document.querySelectorAll('.card__zone')
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

        for (let j = 0; j < zones.length; j++) {
            const zone = zones[j]

            zone.addEventListener('dragover', e => e.preventDefault() )

            zone.addEventListener('dragenter', function(e) {
                e.preventDefault()
                this.style.backgroundColor = 'rgba(0,0,0, .3)'
            } )

            zone.addEventListener('drop', function(e) {
                this.style.backgroundColor = 'rgba(0,0,0, 0)'
                this.append(draggableItem)
            })
        }
    }
}

dragNdrop()