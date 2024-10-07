let timeLeft = 2400; // Tempo inicial do timer

// Função para iniciar o timer
const timer = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('time').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (timeLeft <= 0) {
        clearInterval(timer);
        gradeQuiz();
    }
}, 1000);

// Evento de clique no botão "Enviar Respostas"
document.getElementById('submit-quiz').addEventListener('click', (event) => {
    event.preventDefault();
    gradeQuiz();
    
  
});



