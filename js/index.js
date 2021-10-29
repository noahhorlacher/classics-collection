let games
let container_games = document.querySelector('games')

async function init() {
    // get games
    games = await fetch('games.json')
    games = await games.json()

    // inject game elements
    Object.values(games).forEach(game => insert_game(game))
}

init()