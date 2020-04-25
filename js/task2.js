const attempts = 3;
let maxNumber = 5;
let prizeValue = 0;
let maxPrize = 100;
let totalPrize = 0;
let attempt = 1;
// Because the line is too long
const winMsg = `Congratulation, you won! Your prize is:`; 

let doGame = confirm('Do you want to play a game?');

while (doGame) {
    // Generation before round starts
    let prizeNumber = Math.floor(Math.random() * (maxNumber + 1));
    prizeValue = maxPrize;
    let userValue = +prompt(
`Choose a roulette pocket number from 0 to ${maxNumber}
Attempts left: ${attempts}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${prizeValue}$`);

    for (;;) {

        if (userValue === prizeNumber) {
            // Victory
            totalPrize = totalPrize + prizeValue;
            let doContinue = confirm(`${winMsg} ${prizeValue} $. Do you want to continue?`);

            if (!doContinue) {
                // Refusal to continue, Reset parameters
                alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
                doGame = confirm('Do you want to play again?');
                attempt = 1;
                maxPrize = 100;
                maxNumber = 5;
                totalPrize = 0;
                break;
            } else {
                // Increase the parameters, keep playing.
                maxPrize = maxPrize*2;
                maxNumber= maxNumber+5;
                attempt = 1;
                break;
            }

        } else if (attempt < attempts) {
            // Unsuccessful attempt
            prizeValue = prizeValue/2;
            userValue = +prompt(`Choose a roulette pocket number from 0 to ${maxNumber}
Attempts left: ${attempts-attempt}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${prizeValue}$`); 
            attempt++
        } else {
            // Unsuccessful round, Reset parameters
            alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
            doGame = confirm('Do you want to play again?');
            attempt = 1;
            maxPrize = 100;
            maxNumber = 5;
            totalPrize = 0;
            break;
        }
    }
} 

// Cancel the game
if (!doGame) {
    alert('You did not become a billionaire, but can.');
}

