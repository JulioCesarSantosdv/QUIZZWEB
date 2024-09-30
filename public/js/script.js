let timeLeft = 2400; // Tempo inicial do timer

// Função para iniciar o timer
const timer = setInterval(() => {
    timeLeft--; // Decrementa o tempo restante a cada segundo
    const minutes = Math.floor(timeLeft / 60); // Calcula os minutos restantes
    const seconds = timeLeft % 60; // Calcula os segundos restantes

    // Atualiza o texto do timer no formato MM:SS
    document.getElementById('time').innerText = `${minutes}:${seconds < 11 ? '0' : ''}${seconds}`; 

    // Quando o tempo acabar
    if (timeLeft <= 0) {
        clearInterval(timer); // Para o timer
        gradeQuiz(); // Chama a função de avaliação do quiz automaticamente
    }
}, 1000); // Executa a cada 1000 milissegundos (1 segundo)

// Evento de clique no botão "Enviar Respostas" para avaliar o quiz
document.getElementById('submit-quiz').addEventListener('click', (event) => {
    event.preventDefault(); // Impede o envio do formulário
    gradeQuiz(); // Avalia o quiz
});

// Função para avaliar o quiz
function gradeQuiz() {
    clearInterval(timer); // Para o timer quando o quiz for submetido

    // Respostas corretas das questões
    const answers = {
        q1: "1", // Resposta correta da questão 1
        q2: "1", // Resposta correta da questão 2
        q3: "1", // Resposta correta da questão 3
        q4: "1", // Resposta correta da questão 4
        q5: "1", // Resposta correta da questão 5
        q6: "1", // Resposta correta da questão 6
        q7: "1", // Resposta correta da questão 7
        q8: "1", // Resposta correta da questão 8
        q9: "1",  // Resposta correta da questão 9
        q10: "1",  // Resposta correta da questão 10
        q11: "1",  // Resposta correta da questão 11
        q12: "1",  // Resposta correta da questão 12
        q13: "1",  // Resposta correta da questão 13
        q14: "1",  // Resposta correta da questão 14
        q15: "1",  // Resposta correta da questão 15
        q16: "1",  // Resposta correta da questão 16
        q17: "1",  // Resposta correta da questão 17
        q18: "1",  // Resposta correta da questão 18
        q19: "1",  // Resposta correta da questão 19
        q20: "1",  // Resposta correta da questão 20
        q21: "1",  // Resposta correta da questão 21
        q22: "1",  // Resposta correta da questão 22
        q23: "1"  // Resposta correta da questão 23
    };

    let score = 0; // Variável para armazenar a pontuação do usuário
    const totalQuestions = Object.keys(answers).length; // Total de questões

    // Avalia as respostas selecionadas
    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`); // Obtém a resposta selecionada pelo usuário
        if (selected && selected.value === answers[question]) {
            score++; // Incrementa a pontuação se a resposta estiver correta
        }
    }

    // Exibe o resultado na página
    const result = document.getElementById('result');
    result.innerHTML = `<h2>Você acertou ${score} de ${totalQuestions} questões.</h2>`; // Exibe a pontuação total

    // Exibir as respostas corretas
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = `
        <h3>Respostas corretas:</h3>
        <p>1. Afirmativa correta: "Serão impressos 1 e undefined".</p>
        <p>2. Afirmativa correta: "$('button').click(function(){$('p.par').hide();});".</p>
        <p>3. Afirmativa correta: "A requisição é recebida no Servlet, onde são feitas conversões e chamadas para métodos de negócio, e no final um RequestDispatcher redireciona o fluxo para a página JSP."</p>
        <p>4. Afirmativa correta: "executeUpdate".</p>
        <p>5. Afirmativa correta: "JPA e EJB".</p>
        <p>6. Afirmativa correta: "View e Model".</p>
        <p>7. Afirmativa correta: "SOAP envia solicitação e resposta de seus serviços empacotados em envelopes, diferentemente do que ocorre nos serviços baseados em REST".</p>
        <p>8. Afirmativa correta: "Cria um array com três objetos e atribui dados a eles".</p>
        <p>9. Afirmativa correta: "GET e PUT".</p>
        <p>10. Afirmativa correta: "text.trens[1].trem + " " + text.trens[1].linha. ".</p>
        <p>11. Afirmativa correta: "list-domains".</p>
        <p>12. Afirmativa correta: "EntityManager ".</p>
        <p>13. Afirmativa correta: "$(´p:first´); retornará o primeiro dos elementos p.  ".</p>
        <p>14. Afirmativa correta: "ResultSet rs = st.executeQuery("select *  from ALUNOS")".</p>
        <p>15. Afirmativa correta: "Diretiva".</p>
        <p>16. Afirmativa correta: "É um framework client-side desenvolvido na linguagem Java para a manipulação de elementos HTML".</p>
        <p>17. Afirmativa correta: "$(class=".escondido").hide() ".</p>
        <p>18. Afirmativa correta: "Apenas III".</p>
        <p>19. Afirmativa correta: "web.xml".</p>
        <p>20. Afirmativa correta: "Broker".</p>
        <p>21. Afirmativa correta: "Tratam as mensagens através de seu único método, denominado on Message".</p>
        <p>22. Afirmativa correta: "WSDL".</p>
        <p>23. Afirmativa correta: "O valor da variável teste será sempre 200".</p>
    `;
    answersDiv.style.display = 'block'; // Exibe a seção com as respostas corretas
}

// Código que não deve fazer referência a `app`
console.log('JavaScript do cliente está funcionando!');