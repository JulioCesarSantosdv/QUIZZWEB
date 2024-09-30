// Importa o Express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000; // Porta padrão ou a porta definida nas variáveis de ambiente

// Middleware para servir arquivos estáticos (HTML, CSS, JS) da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para analisar os dados enviados via POST (formulários)
app.use(bodyParser.urlencoded({ extended: true }));

// Rota principal para servir o arquivo HTML do quiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para avaliar o quiz enviado pelo usuário
app.post('/submit-quiz', (req, res) => {
    const userAnswers = req.body; // Obtém as respostas do formulário
    const correctAnswers = {
        q1: "1",
        q2: "1",
        q3: "1",
        q4: "1",
        q5: "1",
        q6: "1",
        q7: "1",
        q8: "1",
        q9: "1",
        q10: "1",
        q11: "1",
        q12: "1"
    };

    let score = 0; // Variável para armazenar a pontuação

    // Avaliação das respostas
    for (let question in correctAnswers) {
        if (userAnswers[question] === correctAnswers[question]) {
            score++;
        }
    }

    // Envia o resultado de volta ao usuário
    res.send(`<h2>Você acertou ${score} de 12 questões.</h2>`);
});

// Rota de verificação de saúde do servidor (health check)
app.get('/health', (req, res) => {
    res.status(200).send('Server is running');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

 // Verifique se o Servidor Node está em execução
 app.get('/health', (req, res) => {
    res.status(200).send('Server is running');
});
