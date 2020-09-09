<h1 align="center">JOKENPO</h1>

## Tópicos
[Sobre](#sobre)<br>
[Tecnologias utilizadas](#tecs)<br>
[Como executar](#executar)<br>
[Testando no insomnia](#insomnia)<br>
[Comandos SQL](#comandossql)<br>
[Teste Unitários](#testes)<br>

## Sobre
<p align="justify" name="sobre">
  Aplicação que simula um jogo de Jokenpo entre duas pessoas.
</p>

<p name="Oquefaz">:Rocket: Cria diversas partidas de Jokenpo.</p>
<p name="Oquefaz">:Rocket: Utiliza testes unitários.</p>

## Status do Projeto: Concluido :heavy_check_mark:

## Tecnologias utilizadas
<p align="justify" name="tecs">
  As tecnologias utilizadas para este projeto são:
</p>

<a href="https://nodejs.org/en/download/" rel="nofollow" name="tecs">
  :warning: NodeJs
</a>

<br>

<a href="https://expressjs.com/pt-br/" rel="nofollow" name="tecs">
  :warning: Express
</a>

<br>

<a href="http://knexjs.org/" rel="nofollow" name="tecs">
  :warning: Knex
</a>

<br>

<a href="https://www.npmjs.com/" rel="nofollow">
  :warning: NPM
</a>

<br>

<a href="https://www.sqlite.org/index.html" rel="nofollow">
  :warning: SQLite
</a>

<br>

<a href="https://insomnia.rest/download/" rel="nofollow">
  :warning: Insomnia
</a>

<br>

<a href="https://www.typescriptlang.org/" rel="nofollow">
  :warning: TypeScript
</a>

<br>

<a href="https://jestjs.io/" rel="nofollow">
  :warning: Jest
</a>

<br>

<a href="https://github.com/visionmedia/supertest" rel="nofollow">
  :warning: SuperTest
</a>

<br>


## Como executar.
<p align="justify" name="executar">
  Siga os seguintes passos para executar a aplicação.
</p>

<p>
  Clone o projeto:
</p>

<pre>
  <code>
    "git clone https://github.com/Marcelovqvd/backend-jokenpo.git"
  </code>
</pre>

<p>
  Instale todas as dependências:
</p>

<pre>
  <code>
    "yarn" ou "npm"
  </code>
</pre>

<p>
  Execute a aplicação:
</p>

<pre>
  <code>
    "yarn start" ou "npm run dev"
  </code>
</pre>


## Testando no insomnia.
<p align="justify" name="insomnia">
  Para testar utilizando o Insomnia, a rota para post é a de criação de um game(jokenpo)
<br>
  <code>"http://localhost:3333/jokenpo"</code> 

<br>
  As opções para jogar são as palavras: 'scissor', 'rock' e 'paper'.
<br>
  Exemplo de body para testes no Insomnia:
</p>

<pre>
  <code>
    {
	"playerOne": "Neo",
	"playerTwo": "Smith",
	"playerOnePlay": "scissor",
	"playerTwoPlay": "paper"
    }
  </code>
</pre>

## Sobre o SQLite
<p name="comandossql">
SQLite é uma biblioteca em linguagem C que implementa um banco de dados SQL embutido.
  Para criar tabela games:
</p>

<pre>
  <code>
    npm run knex:migrate
  </code>
</pre>


## Teste Unitários
<p align="justify" name="sobre">
  Para executar testes unitários na aplicação:
</p>

<pre>
  <code>
    npm run test
  </code>
</pre>