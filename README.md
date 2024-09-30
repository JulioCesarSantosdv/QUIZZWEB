# QUIZZWEB

QUIZZWEB é uma aplicação web de quiz interativo, desenvolvida com foco em uma experiência dinâmica e responsiva para os usuários. O projeto utiliza tecnologias modernas para o frontend e backend, incluindo Bootstrap, Express e Node.js, além de ferramentas para facilitar o desenvolvimento local, como o live-server.

## Funcionalidades

- Quiz com perguntas temporizadas.
- Interface simples e responsiva utilizando Bootstrap.
- Backend com Node.js e Express para manipulação de rotas.
- Sistema de timer para respostas no quiz.
- Fontes e ícones personalizados.

## Estrutura do Projeto

/QUIZZWEB/
│
│
│
├── /assets/                 		Pasta para armazenar recursos estáticos
│   ├── /images/             		Imagens usadas no projeto (ícones, logos, etc.)
│   │   └── quiz-logo.png    		Exemplo de arquivo de imagem
│   ├── /fonts/              		Fontes personalizadas do projeto
│   │   └── Roboto-Regular.ttf  	Arquivo de fonte
│   └── /icons/             		Ícones usados no projeto
│       └── timer-icon.svg  
│
│
│ 
├── /public/        			FrontEnd do Projeto
│   │    
│   ├── index.html    	 		Página principal do quiz        
│   ├── /css/            		Diretório de Estilos
│   │   └── styles.css   		Estilos personalizados do quiz
│   │
│   ├── /js/
│   │   │    
│   │   └── /functions/       		Diretório de Funções Javascript
│   └── script.js             		Lógica do quiz com temporizador
│       
│
│
├── /node_modules/
│   ├── /(..)/
│   ├── /@popperjs/
│   │   └── (..)  
│   └── /bootstrap/
│       └── (..)
├── /server/
│   └── server.js
│
├── package.json 
├── package-lock.json             
└── README.md               




## Tecnologias Utilizadas

### Frontend

- **HTML5**: Estrutura básica das páginas.
- **CSS3**: Estilos e layout.
- **JavaScript**: Lógica do quiz, manipulação do DOM e temporizadores.
- **Bootstrap 5.3.3**: Framework CSS para responsividade e estilização.
- **Popper.js**: Biblioteca de dependência para Bootstrap.

### Backend

- **Node.js v14.21.3**: Ambiente de execução do servidor.
- **Express.js**: Framework web para o Node.js, utilizado para criação de rotas e servidor.
- **Live-server**: Utilizado para desenvolvimento local com recarregamento automático do navegador.

### Outras Ferramentas

- **npm**: Gerenciador de pacotes do Node.js.
- **Git**: Controle de versão.

## Instalação e Execução

Siga as etapas abaixo para configurar e executar o projeto em sua máquina local.

### Pré-requisitos

- **Node.js** (v14.21.3 ou superior)
- **npm** (v6.14.18 ou superior)
- **Git** (para clonar o repositório)

### Passos para Instalar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/QUIZZWEB.git
   cd QUIZZWEB


2. Instale as dependências do projeto:
  ```bash
npm install
Instale globalmente o live-server para rodar o frontend:

3. Instale globalmente o live-server para rodar o frontend:
  ```bash
npm install -g live-server

##Executando o Projeto

###Frontend
Para iniciar o servidor local e testar o frontend (arquivos HTML, CSS e JS):

live-server
Isso abrirá o projeto no navegador, por padrão, em http://127.0.0.1:8080.

###Backend
Para rodar o backend com Node.js (Express), execute o seguinte comando na pasta /server:
 
```bash
node server.js
Acesse o backend em http://localhost:3000.

###Scripts
- live-server: Inicia o servidor local para desenvolvimento com recarregamento automático.
- node server.js: Inicia o servidor backend.

Problemas Conhecidos
Algumas dependências do projeto podem emitir avisos de versão desatualizada, como o chokidar e uuid, que podem 
ser resolvidos futuramente com uma atualização para versões mais recentes.
Caso o live-server não funcione corretamente, tente reinstalá-lo ou utilize outra ferramenta de servidor local.

##Como Contribuir
Faça um fork deste repositório.
Crie uma nova branch com sua funcionalidade (git checkout -b feature/nova-funcionalidade).
Commit suas alterações (git commit -m 'Adiciona nova funcionalidade').
Faça o push para a branch (git push origin feature/nova-funcionalidade).
Abra um Pull Request.

Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter mais detalhes.

