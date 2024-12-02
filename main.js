let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)

let attemps = 0;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const restartButton = document.getElementById("restartButton");

const checkGuess = () => {
    const userGuess = Number(guessInput.value);
    attemps++

    if(userGuess === randomNumber){
        message.textContent = `Bjiiiirrr kamu bener sayangg angkanyaa ${randomNumber} kamuu udah nyoba jajall ${attemps} kali sayangg`
        message.style.color = `#28a745`;
        endGame()
    } else if (userGuess > randomNumber){
        message.textContent = `Kegedean angkanya sayangg :p`
        message.style.color = `#dc3545`
    } else if (userGuess < randomNumber){
        message.textContent = `Kekecilan angkanya sayangg :p`
        message.style.color = `#dc3545`
    }

    guessInput = ''
    guessInput.focus()
}

const endGame = () => { 
    guessInput.disabled = true
    guessButton.disabled = true
    restartButton.style.display = 'inline'
}

const resetGame = () => {
    attemps = 0
    randomNumber = Math.floor(Math.random() * 100) + 1
    guessInput.disabled = false
    guessButton.disabled = false
    message.textContent = `Selamat sayangkuu ! Sekarangg Mulai Tebak lagii sayangg . . .`
    message.style.color = `#333333`
    restartButton.style.display = 'none'
    guessInput.value = ''
    guessInput.focus()
}

guessButton.addEventListener('click', () => {
    checkGuess();
});

restartButton.addEventListener('click', () => {
    resetGame();
});

guessInput.addEventListener('keydown', function (event) {
    if ( event.key === 'Enter'){
        checkGuess();
    }
});