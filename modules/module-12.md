# Módulo 12: Backend com Express.js - Rotas e Parâmetros

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Criar diferentes tipos de rotas HTTP (GET, POST, PUT, DELETE).
*   Entender e utilizar parâmetros de rota para dados dinâmicos.
*   Acessar o corpo da requisição (request body) para dados enviados pelo cliente.
*   Implementar operações CRUD (Create, Read, Update, Delete) básicas na sua API.
*   Expandir a API do seu projeto prático para gerenciar recursos.

## Conteúdo Teórico e Prático

### Métodos HTTP e Operações CRUD

Os métodos HTTP (GET, POST, PUT, DELETE, etc.) indicam a ação que o cliente deseja realizar em um recurso no servidor. Eles estão diretamente relacionados às operações CRUD, que são as quatro funções básicas de armazenamento persistente:

*   **GET**: **Read** (Ler) - Solicita dados de um recurso específico. Não deve ter efeitos colaterais no servidor.
*   **POST**: **Create** (Criar) - Envia dados para criar um novo recurso.
*   **PUT**: **Update** (Atualizar) - Envia dados para atualizar um recurso existente (geralmente substitui o recurso inteiro).
*   **DELETE**: **Delete** (Deletar) - Remove um recurso específico.

### Definindo Rotas com Express.js

No Express.js, você define rotas usando os métodos HTTP correspondentes no objeto `app`:

```javascript
const express = require("express");
const app = express();
app.use(express.json()); // Middleware para parsear JSON no corpo da requisição

let produtos = []; // Simula um banco de dados em memória

// GET: Obter todos os produtos
app.get("/api/produtos", (req, res) => {
    res.json(produtos);
});

// GET: Obter um produto por ID (parâmetro de rota)
app.get("/api/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id); // req.params.id é uma string
    const produto = produtos.find(p => p.id === id);
    if (produto) {
        res.json(produto);
    } else {
        res.status(404).send("Produto não encontrado");
    }
});

// POST: Criar um novo produto
app.post("/api/produtos", (req, res) => {
    const novoProduto = req.body; // Dados enviados no corpo da requisição
    novoProduto.id = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) + 1 : 1;
    produtos.push(novoProduto);
    res.status(201).json(novoProduto); // 201 Created
});

// PUT: Atualizar um produto existente
app.put("/api/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const produtoAtualizado = req.body;
    const index = produtos.findIndex(p => p.id === id);
    if (index !== -1) {
        produtos[index] = { ...produtos[index], ...produtoAtualizado, id: id };
        res.json(produtos[index]);
    } else {
        res.status(404).send("Produto não encontrado");
    }
});

// DELETE: Deletar um produto
app.delete("/api/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = produtos.length;
    produtos = produtos.filter(p => p.id !== id);
    if (produtos.length < initialLength) {
        res.status(204).send(); // 204 No Content
    } else {
        res.status(404).send("Produto não encontrado");
    }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
```

### Parâmetros de Rota (`req.params`)

Parâmetros de rota são segmentos da URL que capturam valores especificados em sua posição na URL. Eles são definidos com dois pontos (`:`) no caminho da rota (ex: `/users/:id`). Você pode acessá-los através de `req.params`.

Exemplo: Em `/api/produtos/:id`, se a URL for `/api/produtos/123`, então `req.params.id` será `


"123"`.

### Corpo da Requisição (`req.body`)

Para requisições `POST` e `PUT`, os dados são geralmente enviados no corpo da requisição. Para que o Express.js consiga ler esses dados (especialmente se forem JSON), você precisa usar um middleware. O `app.use(express.json());` que adicionamos no exemplo acima faz exatamente isso.

Você acessa os dados enviados pelo cliente através de `req.body`.

## Tarefa Prática do Dia: API de Gerenciamento de Tarefas

Vamos expandir a API do seu projeto para gerenciar uma lista de tarefas (todos). Você implementará as operações CRUD básicas.

1.  No seu `server.js` (ou `app.js`), mantenha o Express.js configurado e adicione `app.use(express.json());`.
2.  Crie um array em memória para armazenar as tarefas, por exemplo: `let tasks = [];`
3.  Com o assistente de IA ativado, peça para ele criar as seguintes rotas:

    ```javascript
    // 1. Rota GET "/api/tasks": Retorna todas as tarefas.
    // 2. Rota GET "/api/tasks/:id": Retorna uma tarefa específica pelo ID. Se não encontrar, retorne status 404.
    // 3. Rota POST "/api/tasks": Adiciona uma nova tarefa. A tarefa deve vir no corpo da requisição (req.body) e deve ter um ID único gerado automaticamente. Retorne a tarefa criada com status 201.
    // 4. Rota PUT "/api/tasks/:id": Atualiza uma tarefa existente pelo ID. Os dados atualizados vêm no corpo da requisição. Se não encontrar, retorne status 404.
    // 5. Rota DELETE "/api/tasks/:id": Remove uma tarefa pelo ID. Se não encontrar, retorne status 404. Retorne status 204 se a exclusão for bem-sucedida.
    ```

4.  Revise o código gerado pela IA e aceite-o.
5.  Execute o servidor (`node server.js`).
6.  **Teste sua API:** Use uma ferramenta como Postman, Insomnia ou a funcionalidade de requisições HTTP do Replit (se disponível) para testar suas rotas:
    *   `GET /api/tasks` (inicialmente vazio)
    *   `POST /api/tasks` com corpo JSON: `{"title": "Aprender Express", "completed": false}`
    *   `GET /api/tasks` (agora deve ter a tarefa)
    *   `GET /api/tasks/1` (se o ID gerado for 1)
    *   `PUT /api/tasks/1` com corpo JSON: `{"completed": true}`
    *   `DELETE /api/tasks/1`

## Exercícios de Revisão e Autoavaliação

*   Qual método HTTP você usaria para enviar dados de um formulário para criar um novo recurso?
*   Como você acessaria o ID de um usuário na URL `/users/123/profile` no Express.js?
*   Para que serve o middleware `express.json()`?
*   Descreva o fluxo de uma requisição `PUT` para atualizar um item na sua API de tarefas.

## Links para Materiais Complementares

*   [Guia de Roteamento Express - Express.js (em inglês)](https://expressjs.com/en/guide/routing.html)
*   [Trabalhando com o corpo da requisição - Express.js (em inglês)](https://expressjs.com/en/api.html#req.body)

## Orientações para Interação com a IA

*   **Seja explícito sobre os métodos HTTP:** Ao pedir rotas, sempre especifique o método (GET, POST, PUT, DELETE).
*   **Descreva a manipulação de dados:** Explique como os dados devem ser tratados (ex: "adicionar ao array", "encontrar e atualizar").

## Recomendações para Revisão e Testes

*   **Teste os status codes:** Verifique se sua API está retornando os status codes HTTP corretos (200 OK, 201 Created, 204 No Content, 404 Not Found).
*   **Valide os dados de entrada:** Em uma aplicação real, você validaria os dados recebidos em `req.body` para garantir que estão no formato esperado e são seguros.

## Projeto Prático: Próximos Passos

Você agora tem uma API funcional capaz de gerenciar recursos! Nos próximos módulos, vamos conectar essa API ao seu frontend, permitindo que sua página web interaja com o backend para criar, ler, atualizar e deletar dados. Também abordaremos a persistência de dados com bancos de dados.

