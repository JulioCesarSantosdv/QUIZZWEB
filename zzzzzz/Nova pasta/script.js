let isFlipped = false;
let timer;
let timeLeft = 30;

const flipButton = document.getElementById('flip-button');
const flashcard = document.getElementById('flashcard');
const timerDisplay = document.getElementById('timer');

flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
    isFlipped = !isFlipped;
});

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Tempo esgotado!');
        }
    }, 1000);
}

function rate(difficulty) {
    clearInterval(timer);
    alert(`Você marcou como ${difficulty}.`);
    resetTimer();
}

function resetTimer() {
    timeLeft = 30;
    timerDisplay.textContent = timeLeft;
    startTimer();
}

startTimer();
