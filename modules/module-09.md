# Módulo 9: Comunicação Assíncrona - Fetch API

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender o conceito de programação assíncrona em JavaScript.
*   Utilizar a Fetch API para fazer requisições HTTP (GET) a APIs externas.
*   Processar dados JSON recebidos de uma API.
*   Exibir dados dinamicamente na sua página web.
*   Integrar dados externos ao seu projeto prático.

## Conteúdo Teórico e Prático

### Programação Assíncrona

Até agora, o JavaScript que escrevemos é síncrono, o que significa que as operações são executadas uma após a outra, em sequência. Se uma operação demorar muito, ela "trava" o restante do código. No entanto, muitas operações em desenvolvimento web, como buscar dados de um servidor, levam tempo e não devem bloquear a execução do restante da aplicação. É aí que entra a programação assíncrona.

Programação assíncrona permite que certas operações sejam iniciadas e executadas em segundo plano, sem bloquear o fluxo principal do programa. Quando a operação assíncrona é concluída, ela notifica o programa e os resultados podem ser processados.

### A Fetch API

A Fetch API é uma interface moderna e poderosa para fazer requisições de rede. Ela retorna `Promises`, que são objetos que representam a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. Embora o conceito de Promises possa ser um pouco complexo no início, a IA pode ajudar muito a simplificar o uso da Fetch API.

**Sintaxe básica da Fetch API (para requisições GET):**

```javascript
fetch("url_da_api")
    .then(response => response.json()) // Converte a resposta para JSON
    .then(data => {
        // Faça algo com os dados recebidos
        console.log(data);
    })
    .catch(error => {
        // Lida com erros
        console.error("Erro ao buscar dados:", error);
    });
```

*   `fetch("url_da_api")`: Inicia a requisição para a URL especificada.
*   `.then(response => response.json())`: O primeiro `.then()` recebe o objeto `Response` da requisição. Usamos `response.json()` para parsear o corpo da resposta como JSON. Isso também retorna uma Promise.
*   `.then(data => { ... })`: O segundo `.then()` recebe os dados JSON já parseados. É aqui que você manipula os dados.
*   `.catch(error => { ... })`: Captura quaisquer erros que ocorram durante a requisição ou o processamento.

### Exemplo Prático: Consumindo uma API Pública

Vamos usar uma API pública simples para buscar dados. A JSONPlaceholder ([https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)) é uma API de "fake online REST API" que você pode usar para testar requisições HTTP.

Por exemplo, para buscar uma lista de posts:

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
        console.log("Posts recebidos:", posts);
        // Você pode agora exibir esses posts na sua página
    })
    .catch(error => {
        console.error("Erro ao buscar posts:", error);
    });
```

## Tarefa Prática do Dia: Exibindo Dados de uma API no Projeto

Vamos buscar uma lista de "todos" (tarefas) da JSONPlaceholder API e exibi-las na sua página.

1.  No seu `index.html`, adicione uma nova seção com um título `h2` "Minhas Tarefas da API" e uma lista não ordenada vazia com `id="listaTarefasAPI"`.

2.  No seu `script.js`, com o assistente de IA ativado, peça para ele:

    ```javascript
    // 1. Selecione a lista não ordenada com id 'listaTarefasAPI'.
    // 2. Faça uma requisição GET para a URL 'https://jsonplaceholder.typicode.com/todos?_limit=10' (para pegar apenas 10 tarefas).
    // 3. Quando os dados forem recebidos e convertidos para JSON, itere sobre cada tarefa.
    // 4. Para cada tarefa, crie um item de lista (li) e adicione o título da tarefa a ele.
    // 5. Adicione o item de lista à 'listaTarefasAPI'.
    // 6. Adicione um bloco .catch para lidar com possíveis erros e imprimi-los no console.
    ```

3.  Revise o código gerado pela IA e aceite-o.
4.  Execute o projeto (`Run`) e observe as tarefas sendo carregadas dinamicamente na sua página.

## Exercícios de Revisão e Autoavaliação

*   Por que a programação assíncrona é importante no desenvolvimento web?
*   Qual o papel da `Promise` na Fetch API?
*   Como você faria para buscar apenas um único post da JSONPlaceholder API (ex: o post com ID 1)?
*   O que aconteceria se a URL da API estivesse incorreta? Como você lidaria com isso?

## Links para Materiais Complementares

*   [Usando Fetch - MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)
*   [Promises - MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)
*   [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## Orientações para Interação com a IA

*   **Especifique o método HTTP:** Embora o padrão seja GET, é bom mencionar `GET` para clareza.
*   **Descreva o processamento dos dados:** Diga à IA como você quer que os dados recebidos sejam usados (ex: "exiba o título de cada item na lista").

## Recomendações para Revisão e Testes

*   **Verifique a aba "Network" nas ferramentas de desenvolvedor:** Esta aba mostra todas as requisições de rede feitas pela sua página, incluindo o status (200 OK, 404 Not Found, etc.) e a resposta. É essencial para depurar problemas de API.
*   **Teste com e sem conexão:** Simule a falta de conexão ou erros de rede para ver como seu `.catch()` lida com isso.

## Projeto Prático: Próximos Passos

Agora você sabe como buscar dados de APIs externas! Isso abre um mundo de possibilidades para o seu produto digital. Nos próximos módulos, vamos começar a construir nosso próprio backend para servir dados personalizados e aprender sobre o ambiente Node.js.

