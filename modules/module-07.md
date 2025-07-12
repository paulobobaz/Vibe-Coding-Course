# Módulo 7: JavaScript Avançado - Funções e Arrays

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Definir e utilizar funções em JavaScript para organizar e reutilizar código.
*   Compreender e manipular arrays (listas de dados) em JavaScript.
*   Aplicar métodos de array para realizar operações comuns (adicionar, remover, iterar).
*   Refatorar o código do seu projeto prático usando funções e arrays para melhor organização.

## Conteúdo Teórico e Prático

### Funções em JavaScript

Funções são blocos de código reutilizáveis que executam uma tarefa específica. Elas ajudam a organizar seu código, torná-lo mais legível e evitar a repetição. Uma função pode receber dados (parâmetros) e retornar um resultado.

**Sintaxe básica de uma função:**

```javascript
function nomeDaFuncao(parametro1, parametro2) {
    // Bloco de código a ser executado
    return resultado;
}
```

**Exemplo:**

```javascript
function somar(a, b) {
    return a + b;
}

let resultadoSoma = somar(5, 3); // resultadoSoma será 8
console.log(resultadoSoma);

function saudarUsuario(nome) {
    console.log("Olá, " + nome + "! Bem-vindo ao nosso sistema.");
}

saudarUsuario("Alice"); // Imprime "Olá, Alice! Bem-vindo ao nosso sistema."
```

### Arrays em JavaScript

Arrays são estruturas de dados que permitem armazenar uma coleção de itens (elementos) em uma única variável. Os elementos em um array são acessados por um índice numérico, que começa em 0.

**Sintaxe básica de um array:**

```javascript
let meuArray = [elemento1, elemento2, elemento3];
```

**Exemplo:**

```javascript
let frutas = ["Maçã", "Banana", "Laranja"];

console.log(frutas[0]); // Saída: "Maçã"
console.log(frutas[1]); // Saída: "Banana"

frutas[2] = "Uva"; // Altera o elemento no índice 2
console.log(frutas); // Saída: ["Maçã", "Banana", "Uva"]

console.log(frutas.length); // Saída: 3 (número de elementos)
```

### Métodos Comuns de Array

Arrays possuem vários métodos úteis para manipulá-los:

*   **`push()`**: Adiciona um ou mais elementos ao final do array.
    ```javascript
    frutas.push("Pera"); // frutas agora é ["Maçã", "Banana", "Uva", "Pera"]
    ```

*   **`pop()`**: Remove o último elemento do array e o retorna.
    ```javascript
    let ultimaFruta = frutas.pop(); // ultimaFruta é "Pera", frutas é ["Maçã", "Banana", "Uva"]
    ```

*   **`unshift()`**: Adiciona um ou mais elementos ao início do array.
    ```javascript
    frutas.unshift("Limão"); // frutas agora é ["Limão", "Maçã", "Banana", "Uva"]
    ```

*   **`shift()`**: Remove o primeiro elemento do array e o retorna.
    ```javascript
    let primeiraFruta = frutas.shift(); // primeiraFruta é "Limão", frutas é ["Maçã", "Banana", "Uva"]
    ```

*   **`forEach()`**: Executa uma função para cada elemento do array. (Útil para iterar, alternativa ao `for` loop).
    ```javascript
    frutas.forEach(function(fruta) {
        console.log("Eu gosto de " + fruta);
    });
    ```

## Tarefa Prática do Dia: Refatorando e Adicionando Funcionalidades com Funções e Arrays

Vamos refatorar a funcionalidade de lista de funcionalidades do seu projeto usando uma função e adicionar uma nova funcionalidade que exibe itens de um array.

1.  No seu `script.js`, com o assistente de IA ativado, peça para ele:

    ```javascript
    // 1. Crie uma função chamada 'gerarListaFuncionalidades' que recebe um array de strings como parâmetro.
    // 2. Dentro dessa função, selecione a lista não ordenada (ul) com id 'listaFuncionalidades'.
    // 3. Limpe o conteúdo atual da lista (innerHTML = ").
    // 4. Use o método forEach para iterar sobre o array de funcionalidades passado como parâmetro.
    // 5. Para cada funcionalidade, crie um novo item de lista (li) e adicione-o à lista ul.
    // 6. Chame essa função 'gerarListaFuncionalidades' passando o array de funcionalidades que você criou no Módulo 6.
    ```

2.  Ainda no `script.js`, peça para a IA:

    ```javascript
    // 1. Crie um novo array chamado 'tarefasPendentes' com 3 strings de exemplo (ex: "Comprar pão", "Estudar JS", "Fazer exercício").
    // 2. No seu index.html, adicione uma nova seção com um título h2 "Tarefas do Dia" e uma lista não ordenada vazia com id="listaTarefas".
    // 3. Crie uma função chamada 'exibirTarefas' que não recebe parâmetros.
    // 4. Dentro dessa função, selecione a lista com id 'listaTarefas'.
    // 5. Use um laço forEach ou for...of para iterar sobre o array 'tarefasPendentes'.
    // 6. Para cada tarefa, crie um item de lista (li) e adicione-o à 'listaTarefas'.
    // 7. Chame a função 'exibirTarefas' quando a página carregar.
    ```

3.  Revise o código gerado pela IA e aceite-o.
4.  Execute o projeto (`Run`) e observe as listas geradas dinamicamente.

## Exercícios de Revisão e Autoavaliação

*   Qual a vantagem de usar funções no seu código?
*   Como você acessa o primeiro elemento de um array?
*   Qual a diferença entre `push()` e `unshift()`?
*   Quando seria mais apropriado usar `forEach()` em vez de um laço `for` tradicional para iterar sobre um array?

## Links para Materiais Complementares

*   [Funções em JavaScript - MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
*   [Arrays em JavaScript - MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Orientações para Interação com a IA

*   **Descreva a estrutura da função:** Ao pedir uma função, especifique o nome, os parâmetros e o que ela deve fazer.
*   **Mencione os métodos de array:** Se você souber qual método de array quer usar, mencione-o na sua solicitação (ex: "use `forEach`").

## Recomendações para Revisão e Testes

*   **Teste com arrays vazios e com muitos elementos:** Verifique se suas funções e laços lidam bem com diferentes tamanhos de arrays.
*   **Verifique o console:** Use `console.log()` dentro das funções para ver os valores dos parâmetros e o fluxo de execução.

## Projeto Prático: Próximos Passos

Com funções e arrays, seu código JavaScript está se tornando mais modular e poderoso. Nos próximos módulos, vamos explorar objetos em JavaScript e como eles são usados para representar dados mais complexos, preparando o terreno para a comunicação com o backend.

