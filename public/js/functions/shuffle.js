
        const questions = [
            {
                question: "1. Considerando o fragmento de código abaixo, em relação ao escopo de variáveis em Javascript, assinale a afirmativa correta:",
                code: `for (let i=0; i<5; i++) { var a = 0; a++; } console.log(a); i = i - 1; console.log(i);`,
                options: [
                    { text: "Serão impressos 6 e 4", value: "0" },
                    { text: "Serão impressos 1 e undefined", value: "1" },
                    { text: "Serão impressos 1 e -1", value: "0" },
                    { text: "Serão impressos 5 e 5", value: "0" },
                    { text: "Serão impressos undefined e undefined", value: "0" }
                ]
            },
            // Adicione as outras questões aqui seguindo o mesmo formato
        ];

        // Função para embaralhar as questões
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        // Exibir as questões no formulário
        function displayQuestions() {
            shuffle(questions);
            const form = document.getElementById('quiz-form');

            questions.forEach(q => {
                const div = document.createElement('div');
                div.classList.add('mb-3');
                div.innerHTML = `
                    <label class="form-label">${q.question}</label>
                    <pre style="font-family: 'Courier New', Courier, monospace; font-weight: bold; tab-size: 4;">${q.code}</pre>
                    <div>
                        ${q.options.map(option => `
                            <input type="radio" name="${q.question.charAt(0)}" value="${option.value}"> ${option.text}<br>
                        `).join('')}
                    </div>
                `;
                form.appendChild(div);
            });
        }

        // Chame a função para exibir as questões ao carregar a página
        displayQuestions();
