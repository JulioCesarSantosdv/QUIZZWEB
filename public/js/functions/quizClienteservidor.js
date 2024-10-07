
// Função para avaliar o quiz
function gradeQuiz() {
    clearInterval(timer);

    // Respostas corretas com as alternativas corretas como texto e explicações
    const answers = {
        q1: {
            correctAnswer: "1",
            explanation: "Serão impressos 1 e undefined.<br><img src='path/to/image1.jpg' alt='Explicação da Q1'><br>No loop, a variável 'a' foi declarada com 'var', o que faz com que ela fique disponível fora do escopo do loop, permitindo que o valor final seja impresso como 1. Já a variável 'i', declarada com 'let', tem escopo de bloco, por isso não está disponível fora do laço e é 'undefined'."
        },
        q2: {
            correctAnswer: "1",
            explanation: "$('button').click(function(){$('p.par').hide();});<br><img src='path/to/image1.jpg' alt='Explicação da Q1'><br>Neste código, o seletor 'p.par' usa a classe 'par' para selecionar o parágrafo e ocultá-lo com o método 'hide()' quando o botão é clicado. A sintaxe correta usa 'click()' com a função anônima."
        },
        q3: {
            correctAnswer: "1",
            explanation: "A requisição é recebida no Servlet, onde são feitas conversões e chamadas para métodos de negócio, e no final um RequestDispatcher redireciona o fluxo para a página JSP.<br><img src='path/to/image1.jpg' alt='Explicação da Q1'><br>No padrão Front Controller, um controlador central (geralmente um Servlet em Java Web) recebe todas as requisições, gerencia o fluxo do sistema, converte dados, chama métodos de negócio e encaminha para a JSP correta. Isso centraliza o controle e facilita a manutenção do código."
        },
        q4: {
            correctAnswer: "1",
            explanation: "executeUpdate<br>Este método é usado para executar comandos SQL que alteram dados, como INSERT, UPDATE e DELETE. Ele retorna o número de linhas afetadas. Por exemplo: Statement statement = connection.createStatement();<br><img src='path/to/image1.jpg' alt='Explicação da Q1'><br>int rowsAffected = statement.executeUpdate(\"UPDATE tabela SET coluna = valor WHERE condição\");."
        },
        q5: {
            correctAnswer: "1",
            explanation: "JPA e EJB<br>JPA (Java Persistence API): É uma especificação do Java EE para mapeamento objeto-relacional (ORM), permitindo que entidades Java sejam armazenadas em bancos de dados relacionais. Utilizada na camada Model para representar e interagir com dados.<br>EJB (Enterprise JavaBeans): É uma especificação do Java EE para componentes de negócios distribuídos e transacionais. Frequentemente usada na camada Controller para implementar a lógica de negócios e coordenar transações.<br>No contexto da arquitetura MVC, a camada Model utiliza JPA para interagir com o banco de dados, enquanto a camada Controller utiliza EJB para gerenciar a lógica de negócios e a interação entre Model e View.<br><img src='Q5.jpeg' alt='Explicação da Q5' width='800' height='500'><br>;."
        },
        q6: {
            correctAnswer: "1",
            explanation: "View e Model.<br>View: É responsável pela apresentação dos dados ao usuário e pela interação do usuário com o sistema. A interface de usuário (UI) faz parte da camada View, pois é onde os dados são exibidos e onde ocorre a interação direta do usuário<br>Model: É responsável pela representação dos dados e pela lógica de negócios.<br>O componente DAO (Data Access Object), que lida com a persistência e recuperação de dados no banco de dados, geralmente está na camada Model.<br>Ele não se preocupa com a apresentação dos dados ou a interação do usuário, mas sim com a manipulação dos dados em si.<br><img src='Q6.jpeg' alt='Explicação da Q6' width='800' height='500'><br>;."
        },
        q7: {
            correctAnswer: "1",
            explanation: "SOAP envia solicitação e resposta de seus serviços empacotados em envelopes, diferentemente do que ocorre nos serviços baseados em REST.<br>SOAP (Simple Object Access Protocol): É um protocolo de comunicação baseado em XML que define a estrutura e o formato das mensagens trocadas entre sistemas. Em serviços SOAP, as solicitações e respostas são encapsuladas em envelopes XML, proporcionando uma estrutura padronizada para a comunicação entre sistemas distribuídos. Essa abordagem é mais formal e estruturada em comparação com a abordagem mais flexível do REST.<br> REST (Representational State Transfer): É uma arquitetura de estilo de comunicação que utiliza os princípios da web para criar serviços web. Os serviços RESTful geralmente usam a abordagem HTTP para comunicação e podem ser mais flexíveis em termos de formato de mensagem, incluindo JSON, XML, etc.<br><br><img src='Q7.jpg' alt='Explicação da Q7' width='800' height='500'><br>;."
        },
        q8: {
            correctAnswer: "1",
            explanation: "Cria um array com três objetos e atribui dados a eles.<br>Analisando o código JSON em java temos que: a palavra var define a criação de uma variável, no caso a variável text que será atribuído como valor um array (é uma estrutura de dados em que diversos elementos são armazenados e associados a um índice correspondente, ) ,chamado employees como indica a abertura do colchete [, que por usa vez terá três objetos (objeto é uma estrutura utilizada para agrupar diferentes propriedades de um mesmo elemento) a qual são separados pelo uso da vírgula (,) e possuem duas propriedades: firtsName e lastName, a sintaxe da definição de um objeto é idêntica a de um array, com a diferença que em objetos se utilizam { (chaves) ao invés de colchetes para determinar inicio e fim. <br><img src='Q8.jpg' alt='Explicação da Q8' width='800' height='500'><br>;."
        },
        q9: {
            correctAnswer: "1",
            explanation: "GET e PUT<br>Uma aplicação ou arquitetura considerada RESTful ou estilo REST é caracterizada por:<br>Estado e funcionalidade são divididos em recursos distribuídos<br>Cada recurso é endereçável exclusivamente usando um conjunto uniforme e mínimo de comandos (normalmente usando comandos HTTP de GET, POST, PUT ou DELETE pela Internet)<br>O protocolo é cliente/servidor, sem estado, em camadas e suporta cache.<br><img src='../assets/images/Q9.jpeg' alt='Explicação da Q9' width='800' height='500'><br>."
        },
        q10: {
            correctAnswer: "1",
            explanation: "$(\"#exibe\").html = text.trens[1].trem + \" \" + text.trens[1].linha;<br> variável text contém uma string JSON que representa um objeto com uma propriedade \"trens\", que é um array de objetos contendo informações sobre trens, incluindo \"trem\" e \"linha\".<br>Ao usar JSON.parse(text), a string JSON é convertida em um objeto JavaScript, e o resultado é atribuído à variável x<br>A linha correta para exibir \"0146 vermelho\" deve acessar o segundo elemento do array trens (índice 1) e, em seguida, acessar as propriedades \"trem\" e \"linha\". <br>Portanto, text.trens[1].trem + \" \" + text.trens[1].linha é a expressão correta para acessar e exibir essas informações. <br><img src=''/assets/images/Q10.jpeg' alt='Explicação da Q10' width='800' height='500'><br>;."
        },
        q11: {
            correctAnswer: "1",
            explanation: "list-domains;<br>O comando list-domains no GlassFish é especificamente projetado para exibir a lista de domínios existentes, mostrando quais estão iniciados ou parados.<br>Este comando fornece uma visão geral dos ambientes de execução disponíveis no servidor de aplicativos, permitindo que o administrador identifique facilmente o estado de cada domínio.<br>As outras opções, como start-domain, stop-domain, refresh-domains e create-domain, são utilizadas para iniciar, parar, atualizar ou criar domínios, mas não para listar os existentes.<br><img src='Q11.jpeg' alt='Explicação da Q11' width='800' height='500'><br>;."
        },
        q12: {
            correctAnswer: "1",
            explanation: "EntityManager <br>O componente responsável pelo manuseio das diversas entidades no JPA(Java Persistence API) é o EntityManager.<br>Ele apresenta uma interface para interação com o contexto de persistência , permitindo operações responsáveis por gerenciar as operações como salvar, atualizar e excluir objetos no banco de dados, bem como recuperar objetos a partir do banco de dados usando as consultas JPQL.<br>O EntityManager é criado a partir de uma EntityManagerFactory e é usado para gerenciar as transações e o ciclo de vida dos objetos no contexto da persistência.<br><img src='/assets/images/Q12.jpeg' alt='Explicação da Q12' width='800' height='500'><br>;."
        },
        q13: {
            correctAnswer: "1",
            explanation: "$(´p:first´); retornará o primeiro dos elementos p.<br>O seletor $('p:first') utiliza o pseudo-seletor :first para encontrar o primeiro elemento <p> no documento, sendo eficiente para identificar elementos em um conjunto específico.<br>Erros das outras alternativas:<br>$('td, th');: Seleciona todos os elementos <td> e <th> no documento, não apenas <th> filhos de <td>, o que não atende ao enunciado.<br>$('#formulario');: Seleciona um elemento pelo seu id (\"formulario\"), e não por uma classe, como sugerido na opção.<br>$('.paragrafo');: Seleciona todos os elementos com a classe \"paragrafo\". Para selecionar um elemento pelo id, deveria-se usar o símbolo de cerquilha (#) em vez do ponto (.).<br><img src='/assets/images/Q13.jpeg' alt='Explicação da Q13' width='800' height='500'><br>;."
        },
        q14: {
            correctAnswer: "1",
            explanation: "ResultSet rs = st.executeQuery(\"select * from ALUNOS\");<br>O método executeQuery() é utilizado para executar consultas SQL que retornam um conjunto de resultados, como um SELECT.<br>Erros das outras afirmativas:<br><br>OexecuteUpdate() é usado para comandos que alteram o banco de dados, como INSERT, UPDATE ou DELETE, e não para SELECT.<br>O método prepareStatement() é um método que cria uma instrução preparada, não deve ser usado dessa forma diretamente com um List.<br>Sintaxe incorreta, pois st() não é uma chamada válida<br>Embora o método esteja correto, o retorno de executeQuery() é um ResultSet, não uma List<br><img src='/assets/images/Q14.jpeg' alt='Explicação da Q14' width='800' height='500'><br>;"

        },
        q15: {
            correctAnswer: "1",
            explanation: "Diretiva<br>As diretivas em uma página JSP definem configurações que afetam a geração do Servlet correspondente.<br>Identificar o tipo de conteúdo: Exemplo: <%@ page contentType=\"text/html;charset=UTF-8\"\ %>.<br>Importar bibliotecas: Exemplo: <%@ page import=\"java.util.*\" \%>.<br>Definir a página de erro: Exemplo: <%@ page errorPage=\"error.jsp\"\ %>.<br><img src='/assets/images/Q15.jpeg' alt='Explicação da Q15' width='800' height='500'><br>;"

        },
        q16: {
            correctAnswer: "1",
            explanation: "É um framework client-side desenvolvido na linguagem Java para a manipulação de elementos HTML.<br>O jQuery não é um framework desenvolvido em Java, mas sim uma biblioteca client-side escrita em JavaScript.<br>Ela é amplamente utilizada para a manipulação de elementos HTML, interação com a DOM, manipulação de CSS, e para facilitar chamadas AJAX sem recarregar a página.<br><img src='/assets/images/Q16.jpeg' alt='Explicação da Q16' width='800' height='500'><br>;"

        },
        q17: {
            correctAnswer: "1",
            explanation: "$(\".escondido\").hide();<br>A função $() no jQuery é usada para selecionar elementos HTML com base em seletores de CSS. Para selecionar elementos com uma classe específica, como \"escondido\"\, usamos o ponto seguido do nome da classe: $(\".escondido\"\)<br>O método .hide() é aplicado para ocultar os elementos selecionados, fazendo com que desapareçam da página, similar ao uso de display: none no CSS.<br><img src='Q17.jpeg' alt='Explicação da Q17' width='800' height='500'><br>;"

        },
        q18: {
            correctAnswer: "1",
            explanation: "Apenas II e III;<br>I. INCORRETA - A classe do DOM (Document Object Model) XML é uma representação na memória de um documento XML. O DOM permite que você leia, manipule e modifique programaticamente um documento XML. A edição é a função primária do DOM, e também é a maneira comum e estruturada como os dados XML são representados na memória.<br>II .CORRETA - O DOM permite que você leia, manipule e modifique programaticamente um documento XML. Na estrutura DOM, o documento XML é representado como uma árvore onde cada círculo da árvore representa um nó, que é chamado um objeto XmlNode. Temos diversos tipo de nodos como: XmlDocument, XmlElement, XmlAttribute, XmlText e etc.<br>III. CORRETO.Os relacionamentos entre os nodo em uma árvore DOM é caracterizada pelos seguintes relacionamentos:* nodos Pais; nodos Irmãos e nodos Filhos*.<br><img src='Q18.jpeg' alt='Explicação da Q18' width='800' height='500'><br>;"

        },
        q19: {
            correctAnswer: "1",
            explanation: "web.xml<br>No modelo original de aplicativos para o servidor Tomcat,  arquivo web.xml é responsável por configurar os mapeamentos de servlets.Ele define quais URLs serão atendidas por quais servlets, além de outras configurações relacionadas à aplicação web.<br>Nas versões mais recentes, essas configurações podem ser feitas por anotações diretamente no código, mas o web.xml era o método tradicional.<br><img src='Q19.jpeg' alt='Explicação da Q19' width='800' height='500'><br>;"

        },
        q20: {
            correctAnswer: "1",
            explanation: "Broker<br>Em plataformas de objetos distribuídos como o CORBA, o padrão arquitetural Broker é utilizado para permitir a comunicação entre diferentes componentes distribuídos.<br>Ele atua como intermediário (ou \"\corretor\"\), facilitando a localização, invocação e comunicação entre objetos remotos em diferentes sistemas.<br><img src='Q19.jpeg' alt='Explicação da Q19' width='800' height='500'><br>;"

        },
        q21: {
            correctAnswer: "1",
            explanation: "Tratam as mensagens através de seu único método, denominado on Message.<br>Em um Message-Driven Bean (MDB), o método principal responsável por processar mensagens assíncronas é o onMessage, que recebe e lida com as mensagens enviadas à fila ou tópico de uma mensageria.<br>MDBs não guardam estado e não exigem a implementação de interfaces específicas como @Local ou @Remote.<br><br><img src='Q21.jpeg' alt='Explicação da Q21' width='800' height='500'><br>;"

        },
        q22: {
            correctAnswer: "1",
            explanation: "WSDL.<br>Ela é uma linguagem baseada em XML usada para descrever a estrutura de mensagens e a funcionalidade de serviços web que utilizam o protocolo SOAP.<br>O WSDL especifica quais operações o serviço web oferece, os parâmetros e os formatos das mensagens.As outras opções, como REST e HTML, não são utilizadas para descrever mensagens SOAP.<br><img src='Q22.jpeg' alt='Explicação da Q22' width='800' height='500'><br>;"

        },
        q23: {
            correctAnswer: "1",
            explanation: "O valor da variável teste será sempre 200.<br>A alternativa correta é que o valor da variável teste será sempre 200, porque a instrução let introduz um escopo de bloco. No código, há duas declarações da variável teste: <br>uma fora e outra dentro do bloco if. A variável dentro do bloco if está restrita a esse escopo e não afeta a variável declarada fora dele. Portanto, quando o console.log(teste) é executado, ele exibe o valor da variável externa, que é 200.<br><img src='Q22.jpeg' alt='Explicação da Q22' width='800' height='500'>;"

        },
        q24: {
            correctAnswer: "1",
            explanation: "{\"\processos\"\:[ { \"\ numero\":\"\ 00001001120225020061\"\, \"\ano\"\:\"\ 2022\"\ } ] }<br>A representação JSON reflete a estrutura do XML de forma mais leve e direta. O elemento raiz \"\processos\"\ contém um array de objetos, cada um representando um \"\processo\"\.<br>Esses objetos têm propriedades \"\numero\"\ e \"\ano\"\, correspondendo aos elementos no XML. A sintaxe usa chaves para objetos e colchetes para arrays, facilitando a leitura e manipulação em APIs web.<br><img src='Q24.jpeg' alt='Explicação da Q24' width='800' height='500'>;"

        },
    };

    let score = 0;
    const totalQuestions = Object.keys(answers).length;

    // Avalia as respostas selecionadas
    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        const answerDiv = document.getElementById(`answer-${question}`);

        if (selected) {
            const selectedValue = selected.value;

            if (selectedValue === answers[question].correctAnswer) {
                score++;
                answerDiv.innerHTML = `<span style="color: green;"><strong>Correto.</strong><br>Explicação: ${answers[question].explanation}</span>`;
            } else {
                answerDiv.innerHTML = `<span style="color: red;"><strong>Errado.</strong><br>Explicação: ${answers[question].explanation}</span>`;
            }
        } else {
            answerDiv.innerHTML = `<span style="color: red;"><strong>Nenhuma resposta selecionada.</strong><br>Explicação: ${answers[question].explanation}</span>`;
        }

        answerDiv.style.display = 'block';
        // Exibe o resultado na página
    const result = document.getElementById('result');
    result.innerHTML = `<h2>Você acertou ${score} de ${totalQuestions} questões.</h2>`;
    }
}