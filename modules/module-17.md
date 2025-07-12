# Módulo 17: Autorização - Controle de Acesso Baseado em Papéis

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender o conceito de autorização e controle de acesso baseado em papéis (RBAC).
*   Implementar lógica de autorização no seu backend Express.js.
*   Restringir o acesso a certas funcionalidades da API com base no papel do usuário.
*   Aprimorar a segurança do seu projeto prático, definindo diferentes níveis de permissão.

## Conteúdo Teórico e Prático

### Autorização e RBAC (Role-Based Access Control)

No Módulo 16, abordamos a **autenticação**, que verifica quem é o usuário. Agora, vamos nos aprofundar na **autorização**, que define o que o usuário autenticado pode fazer. Uma das abordagens mais comuns para autorização é o **Controle de Acesso Baseado em Papéis (RBAC)**.

No RBAC, as permissões são associadas a papéis (roles), e os usuários são atribuídos a um ou mais papéis. Em vez de atribuir permissões diretamente a cada usuário, você atribui papéis a eles, e esses papéis já vêm com um conjunto predefinido de permissões. Isso simplifica muito o gerenciamento de permissões em sistemas maiores.

**Exemplos de Papéis:**

*   **Administrador:** Pode criar, ler, atualizar e deletar qualquer recurso, gerenciar usuários, etc.
*   **Editor:** Pode criar, ler e atualizar seus próprios recursos, mas não deletar ou gerenciar outros usuários.
*   **Visualizador:** Pode apenas ler recursos.

### Implementando Autorização no Express.js

Para implementar autorização, você precisará de uma forma de armazenar o papel do usuário (geralmente no banco de dados, associado ao registro do usuário) e de um middleware que verifique esse papel antes de permitir o acesso a uma rota.

**Passos para implementar RBAC:**

1.  **Adicionar um campo `role` à tabela `users`:** Este campo armazenará o papel do usuário (ex: 'admin', 'user', 'editor').
2.  **Incluir o `role` no JWT:** Quando o usuário faz login, o papel deve ser incluído no payload do JWT. Assim, o middleware de autenticação pode extrair essa informação e anexá-la ao objeto `req.user`.
3.  **Criar um middleware de autorização:** Este middleware receberá o papel ou papéis necessários para acessar uma rota e verificará se o `req.user.role` corresponde.

**Exemplo de middleware de autorização:**

```javascript
// authorizationMiddleware.js
function authorizeRoles(roles) {
    return (req, res, next) => {
        // O req.user deve vir do middleware de autenticação anterior
        if (!req.user || !req.user.role) {
            return res.status(403).json({ message: "Acesso negado: Papel de usuário não definido." });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Acesso negado: Você não tem permissão para esta ação." });
        }
        next(); // Usuário autorizado, continua para a próxima função da rota
    };
}

module.exports = authorizeRoles;
```

Você usaria este middleware em suas rotas, após o middleware de autenticação:

```javascript
const authenticateToken = require("./authMiddleware");
const authorizeRoles = require("./authorizationMiddleware");

// Rota que só pode ser acessada por administradores
app.delete("/api/admin/users/:id", authenticateToken, authorizeRoles(["admin"]), (req, res) => {
    // Lógica para deletar usuário
    res.send("Usuário deletado pelo administrador.");
});

// Rota que pode ser acessada por administradores ou editores
app.put("/api/posts/:id", authenticateToken, authorizeRoles(["admin", "editor"]), (req, res) => {
    // Lógica para atualizar post
    res.send("Post atualizado.");
});
```

### Considerações sobre o `role` no JWT

É importante que o `role` (papel) do usuário seja incluído no payload do JWT no momento do login. Assim, o middleware de autenticação pode extrair essa informação e disponibilizá-la para o middleware de autorização.

**Modificando o login para incluir o papel:**

```javascript
// No seu /login POST route
// ... após verificar a senha ...
const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role }, // Inclua o role aqui
    process.env.JWT_SECRET || "seu_segredo_muito_secreto",
    { expiresIn: "1h" }
);
res.json({ token: token });
```

## Tarefa Prática do Dia: Implementando Autorização na API de Tarefas

Vamos adicionar um campo `role` aos seus usuários e proteger a funcionalidade de exclusão de tarefas para que apenas usuários com o papel 'admin' possam deletar tarefas.

1.  **Atualize a tabela `users` no seu banco de dados (via migração Knex.js):**
    *   Adicione uma nova coluna `role` (TEXT, NOT NULL, DEFAULT 'user').
    *   **Importante:** Se você já tem usuários, você precisará atualizá-los para ter um papel. Por exemplo, defina o primeiro usuário que você criou como 'admin' e os outros como 'user'.

2.  **Modifique a rota de login (`/login` POST) no seu `server.js`:**
    *   Certifique-se de que, ao gerar o JWT, o `role` do usuário seja incluído no payload do token.

3.  Crie um novo arquivo `authorizationMiddleware.js` com o conteúdo do exemplo acima.

4.  No seu `server.js`, com o assistente de IA ativado, peça para ele:

    ```javascript
    // 1. Importe o middleware `authorizeRoles`.
    // 2. Proteja a rota DELETE "/api/tasks/:id" usando `authenticateToken` e `authorizeRoles`.
    //    - Apenas usuários com o papel 'admin' devem ter permissão para deletar tarefas.
    // 3. (Opcional) Crie uma nova rota GET "/api/admin/users" que só pode ser acessada por 'admin' e retorna a lista de todos os usuários.
    ```

5.  Revise o código gerado pela IA e aceite-o.
6.  Execute o servidor (`node server.js`).
7.  **Teste:**
    *   Faça login como um usuário 'user' e tente deletar uma tarefa (deve falhar com 403).
    *   Faça login como um usuário 'admin' e tente deletar uma tarefa (deve funcionar).
    *   (Opcional) Teste a rota `/api/admin/users` com ambos os tipos de usuário.

## Exercícios de Revisão e Autoavaliação

*   Qual a diferença fundamental entre autenticação e autorização?
*   Como o RBAC simplifica o gerenciamento de permissões?
*   Onde o papel do usuário deve ser armazenado para ser acessível pelo middleware de autorização?
*   Se você tivesse um novo papel 'moderator' que pudesse atualizar tarefas, mas não deletar, como você modificaria o middleware `authorizeRoles` para permitir isso?

## Links para Materiais Complementares

*   [Controle de Acesso Baseado em Papéis (RBAC) - Conceitos (em inglês)](https://www.okta.com/identity-101/role-based-access-control-rbac/)
*   [Implementando RBAC com Node.js e JWT (exemplo mais complexo, em inglês)](https://www.freecodecamp.org/news/role-based-access-control-rbac-with-node-js-and-jwt/)

## Orientações para Interação com a IA

*   **Especifique os papéis:** Ao pedir para proteger uma rota, liste os papéis que devem ter acesso.
*   **Descreva a lógica de verificação:** Explique como a IA deve verificar o papel do usuário.

## Recomendações para Revisão e Testes

*   **Teste todos os papéis:** Certifique-se de que cada papel tem as permissões corretas e que as restrições funcionam como esperado.
*   **Cenários de Borda:** Teste o que acontece se um usuário não autenticado tenta acessar uma rota protegida por autorização.

## Projeto Prático: Próximos Passos

Sua API está mais segura com autenticação e autorização! Nos próximos módulos, vamos focar em como o frontend lida com esses tokens e permissões, e como podemos melhorar a experiência do usuário com feedback visual. Também começaremos a preparar o deploy da sua aplicação.

