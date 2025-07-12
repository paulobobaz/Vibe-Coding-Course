# Módulo 4: Fundamentos de JavaScript - Adicionando Interatividade

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender o papel do JavaScript no desenvolvimento web.
*   Escrever seu primeiro script JavaScript para interagir com elementos HTML.
*   Utilizar variáveis, operadores e funções básicas em JavaScript.
*   Integrar um arquivo JavaScript externo ao seu projeto Replit.
*   Adicionar interatividade simples ao seu projeto prático.

## Conteúdo Teórico e Prático

### O que é JavaScript?

JavaScript é uma linguagem de programação que permite adicionar interatividade e dinamismo às páginas web. Enquanto HTML estrutura o conteúdo e CSS o estiliza, o JavaScript dá vida à página, permitindo que ela responda às ações do usuário, manipule dados, faça requisições a servidores e muito mais.

### Como o JavaScript Funciona: DOM e Eventos

O JavaScript interage com a página web através do DOM (Document Object Model). O DOM é uma representação em árvore da estrutura de um documento HTML, onde cada elemento HTML é um "nó" que pode ser acessado e manipulado pelo JavaScript.

Além disso, o JavaScript lida com **eventos**, que são ações que ocorrem na página (ex: clique de botão, carregamento da página, digitação do usuário). Você pode escrever código JavaScript para "ouvir" esses eventos e executar funções em resposta a eles.

### Formas de Incluir JavaScript

Assim como o CSS, o JavaScript pode ser incluído de algumas maneiras:

1.  **Inline:** Código JavaScript diretamente em um atributo HTML. **Não recomendado.**
    ```html
    <button onclick="alert('Olá!');">Clique-me</button>
    ```

2.  **Interno:** Código JavaScript dentro da tag `<script>` no HTML. Pode ser colocado no `<head>` ou no final do `<body>` (recomendado para garantir que o HTML seja carregado primeiro).
    ```html
    <body>
        <!-- Conteúdo HTML -->
        <script>
            console.log('Olá do JavaScript!');
        </script>
    </body>
    ```

3.  **Externo (Recomendado):** Código JavaScript em um arquivo `.js` separado e linkado ao HTML. Esta é a melhor prática para organização e reutilização.
    ```html
    <body>
        <!-- Conteúdo HTML -->
        <script src="script.js"></script>
    </body>
    ```
    No Replit, o arquivo `script.js` já está linkado por padrão no `index.html`.

### Conceitos Básicos de JavaScript

*   **Variáveis:** Usadas para armazenar dados. Declaradas com `let` ou `const`.
    ```javascript
    let nome = "Mundo";
    const PI = 3.14;
    ```

*   **Operadores:** Símbolos que realizam operações (ex: `+`, `-`, `*`, `/`, `=`, `==`, `===`).
    ```javascript
    let soma = 5 + 3; // 8
    let ehIgual = (10 == "10"); // true (compara valor)
    let ehEstritamenteIgual = (10 === "10"); // false (compara valor e tipo)
    ```

*   **Funções:** Blocos de código reutilizáveis que executam uma tarefa específica.
    ```javascript
    function saudar(nome) {
        return "Olá, " + nome + "!";
    }
    let mensagem = saudar("Usuário"); // "Olá, Usuário!"
    ```

*   **`console.log()`:** Uma função útil para exibir mensagens no console do navegador (ferramentas de desenvolvedor), ideal para depuração.

## Tarefa Prática do Dia: Adicionando Interatividade ao Projeto

Vamos adicionar um botão à sua página que, ao ser clicado, exibe uma mensagem.

1.  Abra o arquivo `index.html` no seu Replit e adicione um botão dentro do `<body>`:

    ```html
    <!-- Adicione um botão com o texto "Clique para uma mensagem!" -->
    ```

2.  Abra o arquivo `script.js`.
3.  Com o assistente de IA ativado, peça para a IA escrever um script que, ao clicar no botão, exiba um alerta no navegador.

    ```javascript
    // Selecione o botão e adicione um "event listener" para o clique. Quando clicado, exiba um alerta com a mensagem "Você clicou no botão!"
    ```

4.  A IA irá gerar o código JavaScript. Revise-o e aceite a sugestão.
5.  Execute o projeto (`Run`) e clique no botão para testar a interatividade.

## Exercícios de Revisão e Autoavaliação

*   Qual a principal função do JavaScript em uma página web?
*   O que é o DOM e como o JavaScript o utiliza?
*   Qual a diferença entre `let` e `const` na declaração de variáveis?
*   Para que serve a função `console.log()`?

## Links para Materiais Complementares

*   [Primeiros passos com JavaScript - MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Getting_started)
*   [Introdução ao DOM - W3Schools (em inglês)](https://www.w3schools.com/js/js_htmldom.asp)

## Orientações para Interação com a IA

*   **Descreva a ação e o resultado:** Ao pedir JavaScript, diga o que você quer que aconteça (a ação) e qual o resultado esperado (o que deve ser exibido, alterado, etc.).
*   **Mencione os elementos envolvidos:** Se a interação envolve um botão, um parágrafo, etc., mencione-os claramente.

## Recomendações para Revisão e Testes

*   **Use o console do navegador:** Abra as ferramentas de desenvolvedor (F12 no Chrome/Firefox) e vá para a aba "Console". Mensagens de erro e `console.log()` aparecerão lá, o que é crucial para depuração.
*   **Teste diferentes cenários:** Tente clicar no botão várias vezes, ou não clicar, para ver se o comportamento é o esperado.

## Projeto Prático: Próximos Passos

Agora que sua página tem estrutura (HTML), estilo (CSS) e interatividade (JavaScript), estamos construindo as bases do seu produto digital. Nos próximos módulos, vamos aprofundar em JavaScript e começar a pensar em como o frontend se comunica com o backend.

