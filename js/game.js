// from https://codepen.io/andymerskin/pen/XNMWvQ
let game_container_attributes = []
function insert_game(game) {
    // create elements
    let container_game_wrap = document.createElement('game')

    let container_game = document.createElement('container')

    let game_bg = document.createElement('background')
    game_bg.style.backgroundImage = `url(${game.thumbnail})`

    let game_info = document.createElement('info')

    let game_title = document.createElement('h2')
    game_title.innerText = game.title

    let game_github = document.createElement('logo')

    // append
    game_info.append(game_title)
    game_info.append(game_github)
    container_game.append(game_info)
    container_game.append(game_bg)
    container_game_wrap.append(container_game)
    container_games.append(container_game_wrap)

    // keep track of transformation variables
    let index = game_container_attributes.length
    game_container_attributes.push({
        container: container_game_wrap,
        title: game.title,
        width: container_game.offsetWidth,
        height: container_game.offsetHeight,
        mx: 0,
        my: 0
    })

    // recalculate card rotation
    function redraw() {
        let attributes = game_container_attributes[index]
        container_game.style.transform = `rotateY(${30 * attributes.mx / attributes.width}deg) rotateX(${30 * attributes.my / attributes.height}deg)`
        game_bg.style.transform = `translateX(${-40 * attributes.mx / attributes.width}px) translateY(${-40 * attributes.my / attributes.height}px)`
    }

    // handlers
    container_game_wrap.addEventListener('click', e => {
        if (e.target != game_github) window.open(game.url, '_self')
    })
    container_game_wrap.addEventListener('mousemove', e => {
        game_container_attributes[index].mx = e.pageX - container_game_wrap.offsetLeft - game_container_attributes[index].width / 2
        game_container_attributes[index].my = e.pageY - container_game_wrap.offsetTop - game_container_attributes[index].height / 2
        redraw()
    })

    container_game_wrap.addEventListener('mouseleave', e => {
        game_container_attributes[index].mx = game_container_attributes[index].my = 0
        redraw()
    })

    game_github.addEventListener('click', e => window.open(game.repo, '_blank'))
}