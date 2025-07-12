# Módulo 19: Frontend e Autorização - Exibindo Conteúdo Condicionalmente

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender como o frontend pode usar as informações de autorização (papéis) para controlar a exibição de elementos da UI.
*   Extrair informações do payload de um JWT no frontend.
*   Implementar lógica condicional no JavaScript para mostrar/esconder elementos com base no papel do usuário.
*   Aprimorar a interface do usuário do seu projeto prático, exibindo funcionalidades específicas para diferentes tipos de usuários.

## Conteúdo Teórico e Prático

### Autorização no Frontend

No Módulo 17, implementamos a autorização no backend, protegendo rotas com base no papel do usuário. Agora, vamos estender essa lógica para o frontend. Embora o backend seja a única fonte de verdade para permissões (pois é onde os dados sensíveis estão), o frontend pode usar as informações de autorização para melhorar a experiência do usuário, mostrando ou escondendo elementos da interface (botões, links, seções) que o usuário não tem permissão para acessar.

Isso evita que o usuário tente realizar ações para as quais não tem permissão, resultando em uma experiência mais fluida e menos frustrante. No entanto, é crucial lembrar que a segurança real sempre reside no backend; o frontend é apenas uma camada de usabilidade.

### Decodificando JWTs no Frontend

Para usar as informações do papel do usuário no frontend, precisamos decodificar o JWT que recebemos do backend. Embora o JWT seja assinado e não possa ser alterado sem invalidar a assinatura, o payload (a parte do meio) não é criptografado e pode ser lido. Você pode usar uma biblioteca para isso ou decodificá-lo manualmente (para fins de aprendizado).

**Estrutura de um JWT (relembrando):**

`header.payload.signature`

O payload é uma string Base64Url. Para decodificá-lo, você pode:

1.  Dividir o token nos pontos (`.`).
2.  Pegar a segunda parte (o payload).
3.  Decodificar essa parte de Base64 para uma string JSON.
4.  Parsear a string JSON para um objeto JavaScript.

**Exemplo de decodificação manual (para fins didáticos):**

```javascript
function decodeJwt(token) {
    try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(atob(base64).split("").map(function(c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error("Erro ao decodificar JWT:", e);
        return null;
    }
}

const token = localStorage.getItem("jwtToken");
if (token) {
    const decodedToken = decodeJwt(token);
    console.log("Payload do Token:", decodedToken);
    console.log("Papel do Usuário:", decodedToken.role);
}
```

**Nota:** Em um projeto real, você usaria uma biblioteca como `jwt-decode` para decodificar JWTs de forma mais segura e robusta.

### Exibindo Conteúdo Condicionalmente

Uma vez que você tem o papel do usuário, pode usar JavaScript para mostrar ou esconder elementos HTML. Isso geralmente é feito manipulando a propriedade `display` do CSS ou adicionando/removendo classes CSS que controlam a visibilidade.

**Exemplo:**

```javascript
const adminPanel = document.getElementById("adminPanel");
const userProfileSection = document.getElementById("userProfileSection");

function updateUIBasedOnRole(userRole) {
    if (userRole === "admin") {
        adminPanel.style.display = "block"; // Mostra o painel do admin
        userProfileSection.style.display = "none"; // Esconde a seção de perfil do usuário
    } else if (userRole === "user") {
        adminPanel.style.display = "none";
        userProfileSection.style.display = "block";
    } else {
        // Esconder tudo ou mostrar apenas conteúdo público
        adminPanel.style.display = "none";
        userProfileSection.style.display = "none";
    }
}

// Chame esta função após decodificar o token e obter o papel do usuário
// updateUIBasedOnRole(decodedToken.role);
```

## Tarefa Prática do Dia: Painel de Administração no Frontend

Vamos adicionar um painel de administração no frontend que só é visível para usuários com o papel 'admin'.

1.  No seu `index.html`, adicione uma nova seção com `id="adminPanel"` e um título `h2` "Painel de Administração". Dentro dela, adicione um botão de exemplo, como "Gerenciar Usuários" (`<button id="manageUsersBtn">Gerenciar Usuários</button>`). Inicialmente, esta seção deve estar escondida (você pode usar `style="display: none;"` no HTML ou CSS).

2.  No seu `script.js`, com o assistente de IA ativado, peça para ele:

    ```javascript
    // 1. Crie uma função `updateUIForUserRole` que recebe o papel do usuário como parâmetro.
    // 2. Dentro dessa função, selecione o elemento com `id="adminPanel"`.
    // 3. Se o papel do usuário for "admin", defina o `display` do `adminPanel` como "block". Caso contrário, defina como "none".
    // 4. Modifique a função `checkAuthStatus` (do Módulo 18) para:
    //    - Decodificar o token JWT (você pode pedir para a IA gerar a função `decodeJwt` ou usar uma biblioteca se preferir).
    //    - Extrair o `role` do payload decodificado.
    //    - Chamar `updateUIForUserRole` com o papel extraído.
    ```

3.  Revise o código gerado pela IA e aceite-o.
4.  Execute o projeto (`Run`).
5.  **Teste:**
    *   Faça login como um usuário comum (papel 'user'). O painel de administração não deve aparecer.
    *   Faça login como um usuário 'admin'. O painel de administração deve aparecer.
    *   Verifique o console do navegador para ver o payload do token decodificado.

## Exercícios de Revisão e Autoavaliação

*   Por que é importante que a autorização no frontend seja apenas uma camada de usabilidade e não de segurança?
*   Quais informações você esperaria encontrar no payload de um JWT relacionadas à autorização?
*   Descreva como você usaria JavaScript para esconder um botão se o usuário não tivesse permissão para clicar nele.
*   Qual a diferença entre `localStorage` e `sessionStorage` para armazenar tokens?

## Links para Materiais Complementares

*   [Decodificando JWTs no JavaScript (em inglês)](https://jwt.io/introduction)
*   [Gerenciando a interface do usuário com base em papéis (exemplo, em inglês)](https://www.freecodecamp.org/news/how-to-implement-role-based-access-control-in-react-with-jwt-authentication/)

## Orientações para Interação com a IA

*   **Especifique a fonte do papel:** Diga que o papel virá do payload do JWT.
*   **Descreva a lógica de visibilidade:** Seja claro sobre quais elementos devem ser mostrados/escondidos e sob quais condições.

## Recomendações para Revisão e Testes

*   **Não confie no frontend para segurança:** Sempre valide as permissões no backend antes de executar qualquer operação sensível.
*   **Limpe o `localStorage` ao fazer logout:** Garanta que o token seja removido para evitar que informações antigas persistam.

## Projeto Prático: Próximos Passos

Sua aplicação agora oferece uma experiência de usuário mais personalizada com base nas permissões! Nos próximos módulos, vamos explorar o deploy da sua aplicação, tornando-a acessível publicamente, e discutir as melhores práticas para manter seu código e dados seguros em produção.

