// search input field
let input_search = document.querySelector('#search')

// filter games on input
input_search.addEventListener('input', e => {
    game_container_attributes.forEach(a => {
        a.container.className = a.title.toLowerCase().includes(input_search.value.toLowerCase()) ? '' : 'hidden'
    })
})