const canvas = document.getElementById('tetris')
score = document.getElementById('Score')
const context = canvas.getContext('2d')

context.scale(10, 10)

context.fillStyle = '#000'
context.fillRect(0, 0, canvas.width, canvas.height)

score = 0
hit_message = ""
missile_count = 20
breaka = false

const alien = {
    image: [
        [0, 1, 1, 1, 0],
        [1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1]
    ],
    position: {
        row: 20,
        col: 20
    }
}
const ship = {

    image: [[0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1]
    ],

    position: {
        row: 20,
        col: 60
    }
}

const missile = {

    image: [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]],

    position: {
        row: 20,
        col: 20
    },
    launched: false
}

animation_id = window.requestAnimationFrame(gameLoop)

function gameLoop(timeStamp) {
    if (breaka) {
        console.log(score)
        context.fillStyle = '#000'
        context.fillRect(0, 0, canvas.width, canvas.height)
        context.font = "3px Arial";
        context.fillStyle = "yellow"
        context.fillText(`You scored: ${score} `, 2, 4);
        return
    }
    draw()
    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}

function draw() {
    context.fillStyle = '#000'
    context.fillRect(0, 0, canvas.width, canvas.height)
    //draw_v(ship)

    alien.position.row += Math.random() > 0.5 ? 1 : -1
    alien.position.col += Math.random() > 0.5 ? 1 : -1


    draw_v(alien, 'red')
    draw_v(ship, 'blue')

    context.font = "3px Arial";
    context.fillStyle = "yellow"
    context.fillText(`Score: ${score} Missiles: ${missile_count} ${hit_message}`, 2, 4);

    if (missile.launched) {
        hit_message = ""
        if (missile.position.col < 0) {
            missile.position.col = 0
            missile.launched = false
        }
        missile.position.col -= 1
        draw_v(missile, 'yellow')

    }
    if (distance(missile, alien) < 5) {
        missile.position.col = 0
        missile.launched = false
        alien.position.row = 20
        alien.position.col = 20
        hit_message = "HIT!"
        score += 1
    }

    if (missile_count == 0) {
        breaka = true
    }

}

function draw_v(entity, colour) {
    entity.image.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = colour
                context.fillRect(x + entity.position.row, y + entity.position.col, 1, 1)
            }
        })
    })
}

function distance(x, y) {
    return Math.sqrt(Math.pow(x.position.row - y.position.row, 2) + Math.pow(x.position.col - y.position.col, 2))
}

document.addEventListener('keydown', event => {
    switch (event.keyCode) {
        case 32:
            missile.launched = true
            missile_count -= 1
            missile.position.row = ship.position.row
            missile.position.col = ship.position.col
        case 40:
            ship.position.col += 2

            break
        case 39:
            ship.position.row += 2

            break
        case 38:
            ship.position.col -= 2

            break
        case 37:
            ship.position.row -= 2

            break


    }


})



