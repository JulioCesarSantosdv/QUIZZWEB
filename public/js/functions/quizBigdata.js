
// Função para avaliar o quiz
function gradeQuiz() {
    clearInterval(timer);

    // Respostas corretas com as alternativas corretas como texto e explicações
    const answers = {
        q1: {
            correctAnswer: "1",
            explanation: "Big Data.<br><img src='path/to/image1.jpg' alt='Explicação da Q1'><br>A utilização massiva de dados na atualidade é muito comum, a quantidade de dados enorme utilizados pela IA (Inteligência Artificial) está relacionada ao conceito de Big Data, portanto, a alternativa correta é a última.<br>Qual a importância do Big Data?<br>O Big Data é caracterizado pelo estudo e tratamento de conjunto de dados muito grandes para serem analisados por sistemas tradicionais. O Big Data permite a amplificação do uso da inteligência artificial dado que os modelos de machine learning necessitam do uso de muitos dados para possuírem boas métricas."
        },
        q2: {
            correctAnswer: "1",
            explanation: "CRISP-DM<br><img src='path/to/image1.jpg' alt='Explicação da Q1'><br>É um modelo padrão amplamente utilizado na mineração de dados. Ele divide o processo em seis fases principais:<br>1.Entendimento do Negócio: Compreender objetivos e requisitos.<br>2.Entendimento dos Dados: Analisar fontes e qualidade dos dados.<br>3.Preparação dos Dados: Limpar e transformar dados para análise.<br>4.Modelagem: Selecionar e treinar modelos com algoritmos.<br>5.Avaliação: Avaliar o desempenho do modelo em relação aos objetivos.<br>6.Implantação: Implementar o modelo e monitorar seu desempenho.<br>O CRISP-DM é flexível e adaptável a diferentes projetos em várias indústrias, oferecendo uma estrutura sistemática para o processo de KDD.."
        },
        q3: {
            correctAnswer: "1",
            explanation: "If.<br><img src='path/to/image1.jpg' alt='Explicação da Q1'><br>É a palavra-chave em Python que introduz um condicional simples.<br>Neste caso, o bloco de código indentado sob o \"\if\"\ será executado apenas se a condição especificada for avaliada como verdadeira. Se a condição for falsa, o bloco de código será ignorado. "
        },
        q4: {
            correctAnswer: "1",
            explanation: "As opções I, II, e III estão corretas<br>No contexto de Coleta de Dados, o que podemos afirmar sobre Dados Primários, é que os dados primários são obtidos em primeira mão pelo analista; São dados pré-processados para análise e são obtidos por meio de softwares de monitoramento de logs, surveys, e bancos de dados.<br><img src='path/to/image1.jpg' alt='Explicação da Q4'>Os Dados primários representam informações obtidas de forma direta, em outras palavras, representam dados oficiais. Os dados primários, ou dados brutos, são aqueles dados que foram registrados.<br>."
        },
        q5: {
            correctAnswer: "1",
            explanation: "Mapeamento e redução.<br>As transformações podem ser classificadas em diferentes categorias, das quais podemos citar: <br>Mapeamento: mapeia os dados de uma forma para outra.<br>Redução: reduz o conjunto de dados algo menor.<br><img src='Q5.jpeg' alt='Explicação da Q5' width='800' height='500'><br>;."
        },
        q6: {
            correctAnswer: "1",
            explanation: "Scala.<br>Quando se trata do desenvolvimento de aplicações para o Spark, a opção mais adequada é Scala.<br>Scala é uma linguagem de programação largamente utilizada para trabalhar com processamento de grandes volumes de dados.<br>Scala é a escolha mais indicada para desenvolver aplicações destinadas ao Spark. O Spark é implementado em Scala e funciona na plataforma da JVM (Java Virtual Machine).<br><img src='Q6.jpeg' alt='Explicação da Q6' width='800' height='500'><br>;."
        },
        q7: {
            correctAnswer: "1",
            explanation: "Zookeeper.<br>é o componente responsável pelo gerenciamento dos clusters no Hadoop. Ele fornece serviços de gerenciamento de configuração, nomeação e sincronização para os outros componentes do ecossistema do Hadoop, garantindo a sincronização e trabalho conjunto eficiente dos nós do cluster.<br>Apache Hadoop é um dos principais frameworks de Big Data.<br><br><img src='Q7.jpg' alt='Explicação da Q7' width='800' height='500'><br>;."
        },
        q8: {
            correctAnswer: "1",
            explanation: "Mestre e escravo<br>O Hadoop Distributed File System (HDFS) é projetado para lidar com enormes conjuntos de dados e opera sob o paradigmático modelo \"\Mestre e escravo\"\.<br>O HDFS segue o paradigma mestre e escravo, em que existe um nó mestre (NameNode) responsável por gerenciar o namespace e os metadados, enquanto os nós escravos (DataNodes) armazenam efetivamente os dados.<br><img src='Q8.jpg' alt='Explicação da Q8' width='800' height='500'><br>;."
        },
        q9: {
            correctAnswer: "1",
            explanation: "Representam o estado de um sistema em um dado momento<br>O processamento de fluxo de dados é uma técnica utilizada para lidar com grandes volumes de dados em tempo real. Diferentemente do processamento de lotes, que processa os dados em blocos, o processamento de fluxo de dados permite o processamento contínuo e em tempo real dos dados à medida que eles são gerados<br>Os dados em um fluxo de dados representam o estado de um sistema em um dado momento. Eles são gerados e processados em tempo real, permitindo a análise e tomada de decisões em tempo real.<br><br><img src='../assets/images/Q9.jpeg' alt='Explicação da Q9' width='800' height='500'><br>."
        },
        q10: {
            correctAnswer: "1",
            explanation: "Grandes volumes de dados são úteis para testar a capacidade dos servidores de gerenciamento de dados.<br>Utilizar grandes volumes de dados permite às organizações avaliar a robustez, a eficiência e a escalabilidade de seus sistemas de gerenciamento de dados. Este teste é crucial para garantir que a infraestrutura de TI possa suportar o processamento e armazenamento de dados em grande escala.<br><img src=''/assets/images/Q10.jpeg' alt='Explicação da Q10' width='800' height='500'><br>;."
        },
        q11: {
            correctAnswer: "1",
            explanation: "Atomicidade<br>A característica que trata as transações em um banco de dados como uma unidade indivisível é a Atomicidade. A atomicidade garante que uma transação seja realizada completamente ou não seja realizada de forma alguma. Se uma parte da transação falhar, a transação inteira é revertida para o estado anterior, garantindo a consistência dos dados<br><img src='Q11.jpeg' alt='Explicação da Q11' width='800' height='500'><br>;."
        },
        q12: {
            correctAnswer: "1",
            explanation: "DataFrame.<br>O Pandas fornece a estrutura de dados chamada DataFrame, que é extremamente útil para manipular dados heterogêneos, como é comum em aplicações de Big Data.<br>O DataFrame é uma tabela bidimensional com rótulos (labels) nas colunas, permitindo que o cientista de dados atribua nomes significativos para cada coluna. Esses rótulos facilitam a referência e manipulação dos dados. Cada coluna em um DataFrame é, na verdade, uma estrutura de dados chamada Series, e o DataFrame permite a manipulação eficiente de conjuntos de dados complexos.<br><img src='/assets/images/Q12.jpeg' alt='Explicação da Q12' width='800' height='500'><br>;."
        },
        q13: {
            correctAnswer: "1",
            explanation: "GraphX.<br>É uma biblioteca que fornece uma API para trabalhar com grafos direcionados e não direcionados com atributos em seus vértices e arestas, e aplicar algoritmos de processamento paralelo para realizar análises complexas em redes.<br>O GraphX é um componente do ecossistema do Spark que fornece uma API para a criação, transformação e análise de grafos. Com o GraphX, é possível representar grafos direcionados e não direcionados com atributos em seus vértices e arestas, e aplicar algoritmos de processamento paralelo para realizar análises complexas em redes.<br><img src='/assets/images/Q13.jpeg' alt='Explicação da Q13' width='800' height='500'><br>;."
        },
        q14: {
            correctAnswer: "1",
            explanation: "É um conjunto de tecnologias que disponibilizam sistemas e recursos na internet.<br>A computação em nuvem se refere a um modelo de computação que fornece acesso a um conjunto compartilhado de recursos de computação (como servidores, armazenamento, redes, bancos de dados, software, análise, entre outros) pela internet.<br>Os serviços em nuvem são geralmente oferecidos por provedores de serviços em nuvem, permitindo que organizações e usuários acessem e utilizem recursos computacionais sem a necessidade de possuir ou gerenciar infraestrutura própria.<br><img src='/assets/images/Q14.jpeg' alt='Explicação da Q14' width='800' height='500'><br>;"

        },
        q15: {
            correctAnswer: "1",
            explanation: "Dados estruturados<br>Os dados de transações bancárias são salvos em tabelas e, portanto correspondem a dados estruturados, que são típicos de sistemas de transações<br>on line armazenados em banco de dados. As demais alternativas tratam de dados<br>não convencionais que não são armazenados em bancos de dados tradicionais. <br><br><br><img src='/assets/images/Q15.jpeg' alt='Explicação da Q15' width='800' height='500'><br>;"

        },
        q16: {
            correctAnswer: "1",
            explanation: "Armazenam dados de forma eficiente.<br>O Data Lake ('Lago de Dados') utiliza um método muito eficiente para fazer o armazenamento dos dados. Dessa forma ele possui baixa latência para acessar os dados.<br>Além disso, o Data Lake não demanda por equipamentos especiais e não é de uso exclusivo da distribuição Hadoop Apache.<br>Os Data Lake são repositórios centralizadores de dados, assim como um lago artificial represa água um Data Lake represa dados.<img src='/assets/images/Q16.jpeg' alt='Explicação da Q16' width='800' height='500'><br>;"

        },
        q17: {
            correctAnswer: "1",
            explanation: "MLlib<br>O componente MLlib é o componente do ecossistema do Spark usado para implementar algoritmos estatísticos e de aprendizado de máquina para simplificar pipelines de aprendizado de máquina em projetos de big data<br>As opções Spark Learning, GraphX Learning e MLSpark não são componentes válidos do Spark.Os RDDs são componentes para conjunto de dados resilientes.<br><img src='Q17.jpeg' alt='Explicação da Q17' width='800' height='500'><br>;"

        },
        q18: {
            correctAnswer: "1",
            explanation: "Apenas as opções I, II, IV.<br>I.     CORRETO. O Pandas DataFrame pode ser visto como uma coleção de séries (colunas), e uma dessas séries poderia ser uma série temporal.<br>II.                  CORRETO. O DataFrame do Pandas é projetado para representar dados em formato tabular, organizado em linhas e colunas, o que é adequado para representar dados em painel.<br>III.               INCORRETO. O DataFrame não é uma matriz, mas sim uma estrutura mais flexível e poderosa que pode conter dados heterogêneos. Embora o Pandas DataFrame seja estruturado de maneira semelhante a uma matriz bidimensional, não é restrito a conter apenas vetores homogêneos. Um DataFrame pode conter colunas com diferentes tipos de dados, tornando-o mais flexível do que uma matriz tradicional.<br>IV.               CORRETO. O Pandas DataFrame é amplamente utilizado na análise de dados moderna, sendo uma ferramenta essencial para manipulação e análise de dados. Além disso, é frequentemente usado como entrada para algoritmos de aprendizado de máquina.<br><img src='Q18.jpeg' alt='Explicação da Q18' width='800' height='500'><br>;"

        },
        q19: {
            correctAnswer: "1",
            explanation: "Classificação.<br>O algoritmo árvore de decisão é um dos mais simples e poderosos algoritmos de aprendizado de máquina que pode ser utilizado tanto para regressão quanto para classificação,<br>mas muda sua terminação dependendo da técnica em questão, por exemplo, para classificação é a Árvore de Decisão Classificadora, enquanto para regressão se chama Árvore Regressora, ou Árvore de Decisão Regressora.<br><img src='Q19.jpeg' alt='Explicação da Q19' width='800' height='500'><br>;"

        },
        q20: {
            correctAnswer: "1",
            explanation: "Estruturado, não estruturado e semiestruturado<br>O Data Lake pode armazenar dados estruturados, semiestruturados e não estruturados que correspondem a característica de<br>variedade dos dados que é bem típica de aplicações Big data.<br><img src='Q19.jpeg' alt='Explicação da Q19' width='800' height='500'><br>;"

        },
        q21: {
            correctAnswer: "1",
            explanation: "Trata-se de um exemplo de utilização do Spark SQL.<br>O trecho de código correspondente a uma aplicação do Spark SQL.Esse componente viabiliza a utilização de código SQL que facilita bastante a manipulação de dados estruturados.<br>A implementação está codificada corretamente, apesar de não ser possível afirmar se vai executar sem erros, pois no código não aparecem informações que permitam fazer afirmações sobre a execução.<br<img src='Q21.jpeg' alt='Explicação da Q21' width='800' height='500'><br>;"

        },
        q22: {
            correctAnswer: "1",
            explanation: "Gráfico de Linha<br>O gráfico de linhas passa a visualização de cronologia, acompanhando a linha de vida do dado, mostrando através das inclinações ou gradientes, o crescimento ou de crescimento do dado.<br>As demais alternativas indicam tipos de visualização inadequados para dados temporais.<br><img src='Q22.jpeg' alt='Explicação da Q22' width='800' height='500'><br>;"

        },
        q23: {
            correctAnswer: "1",
            explanation: "Serão impressos no console os números pares entre 0 e 9.<br>O código utiliza um loop for para iterar sobre os números no intervalo definido pela função range (10), que vai de 0 a 9.<br> A estrutura condicional if (i%2==0) verifica se o número i é par (quando o resto da divisão por 2 é zero).<br>Se a condição for verdadeira, o número é impresso no console.<br>Portanto, o código imprimirá os números pares entre 0 e 9, já que a condição verifica a paridade de cada número no intervalo especificado.<br><img src='Q22.jpeg' alt='Explicação da Q22' width='800' height='500'>;"

        },
        q24: {
            correctAnswer: "1",
            explanation: "Apenas I e III <br>Alternativa I - Classificação: É uma técnica onde o algoritmo aprende a associar instâncias de entrada a categorias ou classes. O objetivo é prever a classe de novas instâncias com base no aprendizado a partir de instâncias previamente rotuladas.<br>Alternativa III - Regressão: É uma técnica utilizada quando a variável de saída é contínua. O objetivo é prever um valor numérico, como preço de uma casa ou temperatura, com base no aprendizado a partir de dados previamente rotulados.<br><img src='Q24.jpeg' alt='Explicação da Q24' width='800' height='500'>;"
        },
            q25: {
                correctAnswer: "1",
                explanation: "IA SubSimbólica<br>Alfredo está lidando com IA SubSimbólica, que envolve técnicas que não dependem explicitamente de símbolos ou representações simbólicas.<br>Modelos de redes neurais recorrentes, frequentemente usados para analisar relações em dados sequenciais, são exemplos de abordagens sub-simbólicas, pois aprendem padrões complexos a partir dos dados, em vez de depender de representações simbólicas explícitas.<br><img src='Q25.jpeg' alt='Explicação da Q25' width='800' height='500'>;"

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