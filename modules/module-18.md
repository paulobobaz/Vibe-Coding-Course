# Módulo 18: Frontend e Autenticação - Gerenciando Tokens JWT

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender como o frontend interage com o backend para autenticação.
*   Armazenar e gerenciar tokens JWT no navegador (Local Storage).
*   Enviar tokens JWT em requisições para rotas protegidas da API.
*   Atualizar a interface do usuário com base no status de autenticação.
*   Implementar o fluxo de login e logout no frontend do seu projeto prático.

## Conteúdo Teórico e Prático

### O Fluxo de Autenticação no Frontend

Quando um usuário faz login em uma aplicação web que usa autenticação baseada em token (como JWT), o fluxo geralmente segue estes passos:

1.  **Login:** O usuário insere suas credenciais (username/email e senha) em um formulário no frontend.
2.  **Requisição POST:** O frontend envia uma requisição `POST` para a rota de login do backend (`/login`) com as credenciais.
3.  **Resposta do Backend:** Se as credenciais forem válidas, o backend gera um JWT e o envia de volta ao frontend na resposta JSON.
4.  **Armazenamento do Token:** O frontend recebe o JWT e o armazena em algum lugar seguro no navegador, geralmente no `localStorage`.
5.  **Requisições Protegidas:** Para acessar rotas protegidas, o frontend recupera o token do `localStorage` e o inclui no cabeçalho `Authorization` de cada requisição (formato `Bearer <token>`).
6.  **Verificação do Backend:** O backend recebe a requisição, extrai o token, verifica sua validade e, se for válido, processa a requisição.
7.  **Logout:** Quando o usuário faz logout, o token é removido do `localStorage`, invalidando as futuras requisições.

### Armazenando Tokens no Navegador: `localStorage`

`localStorage` é uma API do navegador que permite armazenar pares chave-valor de strings de forma persistente. Os dados armazenados no `localStorage` permanecem mesmo após o navegador ser fechado e reaberto. É um local comum para armazenar JWTs.

**Métodos do `localStorage`:**

*   `localStorage.setItem("chave", "valor")`: Armazena um valor.
*   `localStorage.getItem("chave")`: Recupera um valor.
*   `localStorage.removeItem("chave")`: Remove um valor.
*   `localStorage.clear()`: Remove todos os valores.

**Exemplo:**

```javascript
// Armazenar o token
localStorage.setItem("jwtToken", "eyJhbGciOiJIUzI1Ni...");

// Recuperar o token
const token = localStorage.getItem("jwtToken");

// Remover o token
localStorage.removeItem("jwtToken");
```

### Enviando Tokens em Requisições

Para enviar o token em requisições para rotas protegidas, você precisa adicioná-lo ao cabeçalho `Authorization` com o prefixo `Bearer `.

```javascript
async function fetchProtectedData() {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
        console.log("Usuário não autenticado.");
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/api/protected-data", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                console.log("Token inválido ou expirado. Redirecionando para login.");
                localStorage.removeItem("jwtToken"); // Limpa o token inválido
                // Redirecionar para página de login
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Dados protegidos:", data);
    } catch (error) {
        console.error("Erro ao buscar dados protegidos:", error);
    }
}
```

### Atualizando a Interface do Usuário

Com base no status de autenticação (se há um token válido no `localStorage`), você pode mostrar ou esconder elementos da interface, como botões de login/logout, links para páginas protegidas, etc.

## Tarefa Prática do Dia: Implementando Login e Logout no Frontend

Vamos criar uma interface de login e logout no seu frontend e usá-la para interagir com as rotas de autenticação do seu backend.

1.  **Certifique-se de que seu `server.js` está rodando no Replit** com as rotas `/register` e `/login` e a proteção de rota para `/api/tasks` do Módulo 16.

2.  No seu `index.html`, adicione os seguintes elementos:
    *   Um formulário de login com campos para `username` e `password` e um botão de `Login` (`<form id="loginForm">`).
    *   Um botão de `Logout` (`<button id="logoutBtn">Logout</button>`).
    *   Um elemento para exibir mensagens de status (ex: `Bem-vindo, [usuário]!`, ou `Login falhou.`) (`<p id="statusMessage"></p>`).
    *   Inicialmente, o formulário de login deve estar visível e o botão de logout escondido. Quando logado, o contrário.

3.  No seu `script.js`, com o assistente de IA ativado, peça para ele:

    ```javascript
    // 1. Selecione os elementos do formulário de login, botão de logout e mensagem de status.
    // 2. Crie uma função assíncrona `handleLogin` que:
    //    - Previne o comportamento padrão do formulário.
    //    - Pega o username e password dos campos.
    //    - Faz uma requisição POST para sua API de login (ex: http://localhost:3000/login).
    //    - Se o login for bem-sucedido, armazena o token JWT no localStorage.
    //    - Atualiza a UI para mostrar o botão de logout e esconder o formulário de login.
    //    - Exibe uma mensagem de sucesso no `statusMessage`.
    //    - Se o login falhar, exibe uma mensagem de erro no `statusMessage`.
    // 3. Crie uma função `handleLogout` que:
    //    - Remove o token JWT do localStorage.
    //    - Atualiza a UI para mostrar o formulário de login e esconder o botão de logout.
    //    - Exibe uma mensagem de logout no `statusMessage`.
    // 4. Crie uma função `checkAuthStatus` que é chamada ao carregar a página.
    //    - Verifica se há um token no localStorage.
    //    - Se houver, atualiza a UI para o estado logado.
    //    - Se não houver, atualiza a UI para o estado deslogado.
    // 5. Adicione event listeners para o formulário de login (submit) e para o botão de logout (click).
    // 6. Modifique a função `fetchTasks` (do Módulo 13) para incluir o token JWT no cabeçalho `Authorization` ao fazer a requisição.
    //    - Se a requisição falhar com 401/403, chame `handleLogout`.
    ```

4.  Revise o código gerado pela IA e aceite-o.
5.  Execute o projeto (`Run`) e teste o fluxo de login e logout. Tente adicionar tarefas antes e depois de logar.

## Exercícios de Revisão e Autoavaliação

*   Qual a principal vantagem de armazenar o JWT no `localStorage`?
*   Como você enviaria um token JWT em uma requisição `PUT` para sua API?
*   Descreva o que acontece quando um usuário clica em "Logout" no seu frontend.
*   Por que é importante lidar com erros 401/403 no frontend ao fazer requisições protegidas?

## Links para Materiais Complementares

*   [Web Storage API (localStorage) - MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Storage_API)
*   [Como usar Fetch com JWT (em inglês)](https://www.freecodecamp.org/news/how-to-use-fetch-with-jwt-authentication/)

## Orientações para Interação com a IA

*   **Descreva o fluxo de UI:** Explique como os elementos devem aparecer/desaparecer com base no estado de autenticação.
*   **Mencione o armazenamento do token:** Diga à IA para usar `localStorage` para o token.

## Recomendações para Revisão e Testes

*   **Inspecione o `localStorage`:** Nas ferramentas de desenvolvedor do navegador (aba "Application"), você pode ver o conteúdo do `localStorage` para verificar se o token está sendo armazenado e removido corretamente.
*   **Teste cenários de token expirado/inválido:** Você pode manualmente alterar o token no `localStorage` para um valor inválido e ver como sua aplicação reage.

## Projeto Prático: Próximos Passos

Seu frontend agora pode autenticar usuários e interagir com rotas protegidas! Nos próximos módulos, vamos explorar a autorização no frontend (esconder/mostrar elementos com base no papel do usuário) e começar a preparar sua aplicação para o deploy final.

