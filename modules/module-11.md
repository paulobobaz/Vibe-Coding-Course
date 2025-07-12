# Módulo 11: Backend com Express.js - Construindo sua Primeira API

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender o que é um framework web e por que usar o Express.js.
*   Configurar um projeto Express.js básico.
*   Criar rotas (endpoints) para sua API.
*   Enviar respostas JSON do seu backend para o frontend.
*   Iniciar a construção da API para o seu projeto prático.

## Conteúdo Teórico e Prático

### Frameworks Web e Express.js

Construir um backend do zero, lidando com todas as requisições HTTP, roteamento, e respostas, pode ser complexo e repetitivo. É aí que entram os **frameworks web**. Um framework web é uma estrutura que fornece ferramentas e bibliotecas para simplificar o desenvolvimento de aplicações web, cuidando de muitas tarefas comuns e repetitivas.

**Express.js** é um framework web minimalista e flexível para Node.js. Ele fornece um conjunto robusto de recursos para desenvolver aplicações web e APIs. É amplamente utilizado e conhecido por sua simplicidade e desempenho.

### Configurando um Projeto Express.js

Para começar com o Express.js, você precisa instalá-lo em seu projeto Node.js.

1.  **Inicialize o projeto Node.js:** Se você não fez isso no Módulo 10, abra o terminal no Replit e execute `npm init -y`.
2.  **Instale o Express.js:** No terminal, execute:
    ```bash
    npm install express
    ```
    Isso adicionará o Express como uma dependência no seu arquivo `package.json`.

### Criando sua Primeira API com Express.js

Um servidor Express.js básico se parece com isto:

```javascript
const express = require("express"); // Importa o módulo express
const app = express(); // Cria uma instância do aplicativo Express
const port = 3000; // Define a porta em que o servidor irá rodar

// Define uma rota para a URL raiz (/) que responde com "Olá, Mundo!"
app.get("/", (req, res) => {
    res.send("Olá, Mundo do Backend!");
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
```

*   `require("express")`: Importa o módulo Express.
*   `app = express()`: Cria uma instância do aplicativo Express.
*   `app.get("/", ...)`: Define uma **rota** para requisições HTTP GET na URL raiz (`/`).
    *   `req` (request): Objeto que contém informações sobre a requisição HTTP recebida (parâmetros, corpo, cabeçalhos).
    *   `res` (response): Objeto que permite enviar uma resposta HTTP de volta ao cliente.
*   `res.send()`: Envia uma resposta de texto simples.
*   `app.listen()`: Inicia o servidor e o faz "escutar" por requisições na porta especificada.

### Enviando Respostas JSON

APIs geralmente retornam dados no formato JSON. O Express.js facilita o envio de respostas JSON com `res.json()`:

```javascript
app.get("/api/dados", (req, res) => {
    const dados = {
        mensagem: "Dados do backend",
        versao: "1.0",
        data: new Date().toISOString()
    };
    res.json(dados); // Envia o objeto JSON como resposta
});
```

## Tarefa Prática do Dia: API de Dados do Produto

Vamos criar uma API simples para o seu produto digital que retorna informações básicas sobre ele.

1.  No seu projeto Replit, crie um novo arquivo chamado `server.js` (ou use `app.js` se preferir).
2.  Com o assistente de IA ativado, peça para ele:

    ```javascript
    // 1. Configure um servidor Express.js que escute na porta 3000.
    // 2. Crie uma rota GET em "/api/produto".
    // 3. Quando essa rota for acessada, ela deve retornar um objeto JSON com as seguintes informações:
    //    - nome: "Meu Produto Digital"
    //    - versao: "1.0.0"
    //    - status: "online"
    //    - funcionalidades: ["Autenticação", "Gerenciamento de Usuários", "Relatórios"]
    // 4. Adicione um console.log para indicar que o servidor está rodando.
    ```

3.  Revise o código gerado pela IA e aceite-o.
4.  **Para executar o servidor:** No terminal do Replit, digite `node server.js` (ou `node app.js`).
5.  O Replit deve detectar que um servidor está rodando e fornecer uma URL para acessá-lo (geralmente na aba "Webview" ou "Output"). Acesse `SUA_URL_DO_REPLIT/api/produto` no seu navegador para ver a resposta JSON.

## Exercícios de Revisão e Autoavaliação

*   Qual a principal função de um framework web como o Express.js?
*   Como você instalaria um novo pacote Node.js?
*   Explique o papel dos objetos `req` e `res` em uma rota Express.js.
*   Como você enviaria uma resposta HTML simples em vez de JSON de uma rota Express.js?

## Links para Materiais Complementares

*   [Primeiros passos com Express - Express.js (em inglês)](https://expressjs.com/en/starter/hello-world.html)
*   [Guia de Roteamento Express - Express.js (em inglês)](https://expressjs.com/en/guide/routing.html)

## Orientações para Interação com a IA

*   **Especifique a porta:** Ao pedir um servidor, mencione a porta desejada (ex: 3000).
*   **Descreva a estrutura da rota:** Diga o método HTTP (GET, POST, etc.), a URL e o que a rota deve fazer (ex: "retornar JSON com X, Y, Z").

## Recomendações para Revisão e Testes

*   **Use o Postman ou Insomnia (ou a aba "Network" do navegador):** Para testar suas APIs, ferramentas como Postman ou Insomnia são excelentes. No navegador, a aba "Network" nas ferramentas de desenvolvedor permite ver as requisições e respostas.
*   **Verifique o console do servidor:** Mensagens de erro do backend aparecerão no terminal onde você executou `node server.js`.

## Projeto Prático: Próximos Passos

Você acaba de criar sua primeira API! Isso é um marco importante. Nos próximos módulos, vamos aprofundar nas operações CRUD (Criar, Ler, Atualizar, Deletar) com Express.js e aprender a lidar com dados enviados do frontend para o backend.

