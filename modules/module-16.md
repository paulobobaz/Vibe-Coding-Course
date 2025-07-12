# Módulo 16: Autenticação e Autorização - Protegendo sua API

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender a diferença entre autenticação e autorização.
*   Entender os conceitos básicos de tokens JWT (JSON Web Tokens).
*   Implementar um sistema de registro e login de usuários simples no backend.
*   Proteger rotas da sua API para que apenas usuários autenticados possam acessá-las.
*   Adicionar autenticação ao seu projeto prático.

## Conteúdo Teórico e Prático

### Autenticação vs. Autorização

Esses dois termos são frequentemente confundidos, mas têm significados distintos:

*   **Autenticação:** É o processo de verificar a identidade de um usuário. Em outras palavras, é a resposta para a pergunta: "Quem é você?". Isso geralmente envolve o usuário fornecendo credenciais (como nome de usuário e senha) que são verificadas pelo sistema.
*   **Autorização:** É o processo de determinar o que um usuário autenticado tem permissão para fazer. É a resposta para a pergunta: "O que você pode fazer?". Por exemplo, um usuário pode estar autenticado, mas não autorizado a deletar um item.

### Tokens JWT (JSON Web Tokens)

JWTs são uma forma compacta e segura de transmitir informações entre partes como um objeto JSON. Eles são frequentemente usados para autenticação. Quando um usuário faz login com sucesso, o servidor gera um JWT e o envia de volta ao cliente. O cliente então armazena esse token (geralmente no Local Storage ou em cookies) e o envia em cada requisição subsequente para rotas protegidas. O servidor verifica a validade do token para autenticar o usuário.

Um JWT é composto por três partes, separadas por pontos (`.`):

1.  **Header:** Contém o tipo do token (JWT) e o algoritmo de assinatura (ex: HMAC SHA256).
2.  **Payload:** Contém as "claims" (declarações), que são informações sobre o usuário (ex: ID do usuário, nome de usuário) e outras informações (data de expiração do token).
3.  **Signature:** É criada usando o header, o payload e um "segredo" (uma chave secreta conhecida apenas pelo servidor). A assinatura garante que o token não foi alterado.

### Implementando Autenticação com JWT no Express.js

Para implementar JWT, precisaremos de algumas bibliotecas:

*   `jsonwebtoken`: Para criar e verificar JWTs.
*   `bcryptjs`: Para fazer hash de senhas (nunca armazene senhas em texto puro!).

**Instalação:**

```bash
npm install jsonwebtoken bcryptjs
```

**Exemplo de fluxo de autenticação:**

1.  **Registro de Usuário (`/register` - POST):**
    *   Recebe nome de usuário e senha.
    *   Faz hash da senha usando `bcryptjs.hash()`.
    *   Salva o usuário (com a senha hashed) no banco de dados.

2.  **Login de Usuário (`/login` - POST):**
    *   Recebe nome de usuário e senha.
    *   Busca o usuário no banco de dados.
    *   Compara a senha fornecida com a senha hashed no banco de dados usando `bcryptjs.compare()`.
    *   Se as senhas corresponderem, gera um JWT usando `jwt.sign()` com o ID do usuário e um segredo. Define um tempo de expiração.
    *   Envia o JWT de volta ao cliente.

3.  **Protegendo Rotas (Middleware):**
    *   Crie um middleware que intercepta as requisições para rotas protegidas.
    *   Verifica se o token JWT está presente no cabeçalho `Authorization` (geralmente no formato `Bearer <token>`).
    *   Verifica a validade do token usando `jwt.verify()` com o segredo.
    *   Se o token for válido, anexa as informações do usuário (ex: ID) ao objeto `req` e passa a requisição para a próxima função (a rota).
    *   Se o token for inválido ou ausente, retorna um erro 401 (Unauthorized) ou 403 (Forbidden).

**Exemplo de middleware de autenticação:**

```javascript
// authMiddleware.js
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "seu_segredo_muito_secreto"; // Use variáveis de ambiente!

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.sendStatus(401); // Se não houver token

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Token inválido
        req.user = user; // Anexa o payload do token ao objeto req
        next(); // Continua para a próxima função da rota
    });
}

module.exports = authenticateToken;
```

Você usaria este middleware em suas rotas protegidas:

```javascript
const authenticateToken = require("./authMiddleware");

app.get("/api/protected-data", authenticateToken, (req, res) => {
    res.json({ message: `Bem-vindo, usuário ${req.user.id}! Estes são dados protegidos.` });
});
```

## Tarefa Prática do Dia: Adicionando Autenticação à API de Tarefas

Vamos adicionar um sistema de registro e login, e proteger a rota de criação de tarefas.

1.  **Crie uma tabela `users` no seu banco de dados (via migração Knex.js):**
    *   `id` (PRIMARY KEY, auto-increment)
    *   `username` (TEXT, UNIQUE, NOT NULL)
    *   `password` (TEXT, NOT NULL - para a senha hashed)

2.  No seu `server.js` (ou `app.js`), com o assistente de IA ativado, peça para ele:

    ```javascript
    // 1. Configure o Express para usar o middleware `express.json()`.
    // 2. Crie uma rota POST 
    ```

3.  Crie um arquivo `authMiddleware.js` com o conteúdo do exemplo acima, lembrando de definir um `JWT_SECRET` (pode ser uma string simples por enquanto, mas em produção use variáveis de ambiente).

4.  No seu `server.js`, continue com a IA:

    ```javascript
    // 1. Crie uma rota POST "/register" para registrar novos usuários.
    //    - Receba `username` e `password` do `req.body`.
    //    - Faça hash da senha usando `bcryptjs`.
    //    - Salve o usuário no banco de dados (tabela `users`).
    //    - Retorne status 201 e uma mensagem de sucesso.
    // 2. Crie uma rota POST "/login" para autenticar usuários.
    //    - Receba `username` e `password` do `req.body`.
    //    - Busque o usuário no banco de dados.
    //    - Compare a senha fornecida com a senha hashed usando `bcryptjs`.
    //    - Se as credenciais forem válidas, gere um JWT com o ID do usuário e envie-o como resposta JSON.
    //    - Se inválidas, retorne status 401.
    // 3. Proteja a rota POST "/api/tasks" usando o middleware `authenticateToken`.
    //    - Na rota protegida, você pode acessar `req.user.id` para saber qual usuário está criando a tarefa.
    ```

5.  Revise o código gerado pela IA e aceite-o.
6.  Execute o servidor (`node server.js`).
7.  **Teste:**
    *   Use Postman/Insomnia para registrar um usuário (`POST /register`).
    *   Faça login (`POST /login`) e copie o JWT.
    *   Tente criar uma tarefa (`POST /api/tasks`) sem o token (deve falhar com 401/403).
    *   Tente criar uma tarefa com o token no cabeçalho `Authorization: Bearer <seu_token>` (deve funcionar).

## Exercícios de Revisão e Autoavaliação

*   Qual a diferença prática entre autenticação e autorização em um cenário de aplicação web?
*   Para que serve o `bcryptjs` e por que ele é crucial para a segurança de senhas?
*   Descreva o fluxo completo de um usuário fazendo login e acessando uma rota protegida usando JWT.
*   O que aconteceria se o segredo (`JWT_SECRET`) usado para assinar o token fosse diferente do segredo usado para verificar?

## Links para Materiais Complementares

*   [O que é JWT? - Auth0 (em português)](https://auth0.com/docs/secure/tokens/json-web-tokens)
*   [Bcrypt.js - npm (em inglês)](https://www.npmjs.com/package/bcryptjs)

## Orientações para Interação com a IA

*   **Seja claro sobre as credenciais:** Especifique quais campos (username, password) a IA deve esperar para registro/login.
*   **Mencione a proteção de rotas:** Indique quais rotas devem ser protegidas e qual informação do usuário deve ser extraída do token.

## Recomendações para Revisão e Testes

*   **Variáveis de Ambiente:** Em um ambiente de produção, o `JWT_SECRET` e outras informações sensíveis devem ser armazenadas em variáveis de ambiente, não diretamente no código.
*   **Tratamento de Erros:** Implemente um tratamento de erros robusto para senhas incorretas, usuários não encontrados, tokens expirados, etc.

## Projeto Prático: Próximos Passos

Sua API agora está mais segura! Nos próximos módulos, vamos aprofundar na autorização (controlar o que cada tipo de usuário pode fazer) e começar a pensar em como o frontend vai lidar com o login e o armazenamento do token. Também exploraremos o deploy da sua aplicação.

