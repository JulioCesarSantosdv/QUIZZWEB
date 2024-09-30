document.getElementById('quizForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o envio do formulário

            // Função para sanitizar a entrada
            function sanitizeInput(input) {
		// Substitui caracteres especiais por suas entidades HTML
                return input
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#x27;")
                    .replace(/`/g, "&#x60;");
            }

            // Obtendo e sanitizando a entrada do usuário
            let userInput = sanitizeInput(document.querySelector('input[name="q1"]').value);
            
            // Exibindo o resultado
            document.getElementById('result').innerHTML = "Você respondeu: " + userInput;
        });