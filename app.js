let addUserScore = 0
let addComputerScore = 0

const userScore_span = document.querySelector("#userScore")
const compScore_span = document.querySelector("#compScore")
const result_p = document.querySelector("#result")
const paperButton_img = document.querySelector("#paperButton")
const rockButton_img = document.querySelector("#rockButton")
const scissorsButton_img = document.querySelector("#scissorsButton")

function game(userMove) {
    moves = ["rock", "paper", "scissors"]
    n = Math.floor(Math.random() * 3)
    computerMove = moves[n]

    console.log (userMove + computerMove)
    switch(userMove + computerMove) {
        case 'rockButtonrock':
        case 'paperButtonpaper':
        case 'scissorsButtonscissors':
            result.innerText = userMove + " (user) empata com " + computerMove + " (comp)!"
            break

        case 'rockButtonpaper':
        case 'paperButtonscissors':
        case 'scissorsButtonrock':
            result.innerText = userMove + " (user) perde de " + computerMove + " (comp)!"
            addComputerScore++
            compScore_span.innerHTML = addComputerScore
            break
            
        case 'rockButtonscissors':
        case 'paperButtonrock':
        case 'scissorsButtonpaper':
            result.innerText = userMove + " (user) ganha de " + computerMove + " (comp)!"
            addUserScore++
            userScore_span.innerHTML = addUserScore
            break
    }

}

paperButton_img.addEventListener("click", () => game("paperButton") )
rockButton_img.addEventListener("click", () => game("rockButton") )
scissorsButton_img.addEventListener("click", () => game("scissorsButton") )
