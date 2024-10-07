let timer;
let timeLeft = 30;

const flashcards = [
    {
        question: "Quem sou eu? Sou um conjunto de dados que cresce a uma velocidade tão alta que se torna difícil de processar usando métodos tradicionais.",
        answer: "Big Data"
    },
    {
        question: "Quem sou eu? Sou uma técnica de coleta, análise e interpretação de grandes volumes de dados.",
        answer: "Data Science"
    },
    {
        question: "Quem sou eu? Sou uma tecnologia que permite armazenar dados em múltiplos servidores de forma distribuída.",
        answer: "Hadoop"
    },
    {
        question: "Quem sou eu? Sou um conceito que se refere ao armazenamento de dados não estruturados e semi-estruturados.",
        answer: "NoSQL"
    },
    {
        question: "Quem sou eu? Sou um software que permite realizar análise em tempo real de grandes volumes de dados.",
        answer: "Apache Spark"
    }
];

let currentFlashcardIndex = -1;

const flashcard = document.getElementById('flashcard');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const timerDisplay = document.getElementById('timer');
const nextButton = document.getElementById('next-button');

nextButton.addEventListener('click', showNextFlashcard);

function showNextFlashcard() {
    currentFlashcardIndex = Math.floor(Math.random() * flashcards.length);
    questionElement.textContent = flashcards[currentFlashcardIndex].question;
    answerElement.textContent = flashcards[currentFlashcardIndex].answer;
    flashcard.classList.remove('flipped'); // Garante que o cartão esteja na frente
    resetTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Tempo esgotado!');
            showNextFlashcard();
        }
    }, 1000);
}

function rate(difficulty) {
    clearInterval(timer);
    alert(`Você marcou como ${difficulty}.`);
    showNextFlashcard();
}

function resetTimer() {
    timeLeft = 30;
    timerDisplay.textContent = timeLeft;
    startTimer();
}

showNextFlashcard(); // Mostra o primeiro flashcard
startTimer();
