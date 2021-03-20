# 🏦 Gama Bank Time DENO :t-rex: 💲 Verde de dinheiro

<p align="center">
  <img src="https://media.tenor.com/images/63dc70b43a949617fdfa3447868d534d/tenor.gif" alt="Hulk Smart"/>
</p>

Nosso momento é de cada vez mais aprender sobre como administrar nosso patriminio pois como diz o ditado "não tá facil pra ninguém", não é mesmo ? Sendo assim, queremos começar não só querer cuidar do nosso dinheiro, mas do seu também. Criamos a Gama Bank para ser uma fintech diferente e que seja acima de tudo capaz de transformar a vida das pessoas e suas carreiras (sacoou?)


## Passo a passo para rodar a API localmente

### 1. Instalação

     git clone https://github.com/diogoalexandria/gamabank-accenture

     npm install

### 2. Instalação e inicialização banco de dados local

    docker-compose up

### 3. Inicialização ambiente desenvolvimento
    Fazer uma cópia da env.default chamada .env.development e atribuir os valores das variáveis APP_SECRET e SALT

    npm run start:dev

### 4. Inicialização ambiente testes
    Fazer uma cópia da env.development chamada .env.test
    
    npm run test

## Documentação

https://gamabank-deno.herokuapp.com/documentation

## API REST

https://gamabank-deno.herokuapp.com


## Nosso time, seu projeto de vida !

Ainda estamos em desenvolvimento e você juntamente com seu time deverão ser capazes de construir nosso MVP (Minimo Produto Viavel) e garantir que possamos disponibilizar para o time de frontend a implementação dessa solução, que para nós, será um divisor de aguas na sua carreira (sacoou?)

## Objetivo
Construir uma aplicação web, utilizando Node.js e todas as bibliotecas e tecnologias que aprendemos durante o curso (você é livre para substitui-lás mas fica por sua conta e risco, ok ?) e disponibiliza-las em um servidor em cloud com acesso irrestrito por zona ou por horario.


## Artefatos e entregaveis
* Disponibilização de uma API com deverá conter toda a aplicação e todas as suas rotas
* Disponibilização de uma pagina contendo a documentação dos recursos e as regras para execução dos mesmos
* Board projeto: [recomendamos o nosso template no trello](https://trello.com/b/omMyz2qd/projeto-gamabank)
* Fork deste repositório contendo:
    * Instruções de Instalação e operação
    * Detalhamento das funcionalidades
    * Membros envolvidos no projeto com seus perfis do github associados
    * Link para acesso ao repositório publicado em nuvem.


## Orientações
- Aplique as boas praticas de desenvolvimento, lembrese de temas como DRY e KISS
- Tenha sempre testes unitários  no seu projeto.


## Critérios de aceite
1. Entregou a API Backend devidade documentada
2. Cadastrou usúarios com as respectivas contas
3. Realizou transferencia entre conta existes e/ou inexistentes
4. Realizou lançamentos de compras feitas com crédito e débito
5. Realizou envio de email confirmando o lançamento de crédito ou débito para o email do usuario
6. Exibiu o extrato bancário e fatura de crédito









