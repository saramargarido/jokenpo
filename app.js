let addUserScore = 0
let addComputerScore = 0

const userScore_span = document.querySelector("#userScore")
const compScore_span = document.querySelector("#compScore")
const result_p = document.querySelector("#result")
const paperButton_img = document.querySelector("#paperButton")
const rockButton_img = document.querySelector("#rockButton")
const scissorsButton_img = document.querySelector("#scissorsButton")
const restart = document.querySelector("#restart")

function game(userMove) {
    moves = ["pedra", "papel", "tesoura"]
    n = Math.floor(Math.random() * 3)
    computerMove = moves[n]

    switch(userMove + computerMove) {
        case 'Pedrapedra':
        case 'Papelpapel':
        case 'Tesouratesoura':
            result.innerText = userMove + " (user) empata com " + computerMove + " (comp)!"
            break

        case 'Pedrapapel':
        case 'Papeltesoura':
        case 'Tesourapedra':
            result.innerText = userMove + " (user) perde de " + computerMove + " (comp)!"
            addComputerScore++
            compScore_span.innerHTML = addComputerScore
            break
            
        case 'Pedratesoura':
        case 'Papelpedra':
        case 'Tesourapapel':
            result.innerText = userMove + " (user) ganha de " + computerMove + " (comp)!"
            addUserScore++
            userScore_span.innerHTML = addUserScore
            break

        case 'restart' + computerMove:
            userScore_span.innerHTML = 0
            compScore_span.innerHTML = 0
            break
    }


}

restart.addEventListener("click", () => game('restart'))
paperButton_img.addEventListener("click", () => game("Papel") )
rockButton_img.addEventListener("click", () => game("Pedra") )
scissorsButton_img.addEventListener("click", () => game("Tesoura") )
