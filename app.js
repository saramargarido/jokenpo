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
            console.log('EMPATE!!!!')
            break
        case 'rockButtonpaper':
        case 'paperButtonscissors':
        case 'scissorsButtonrock':
            console.log('Computador ganhou')
            break
        case 'rockButtonscissors':
        case 'paperButtonrock':
        case 'scissorsButtonpaper':
            console.log('Player ganhou')
            break
    }


//     const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }
}

paperButton_img.addEventListener("click", () => game("paperButton") )
rockButton_img.addEventListener("click", () => game("rockButton") )
scissorsButton_img.addEventListener("click", () => game("scissorsButton") )
