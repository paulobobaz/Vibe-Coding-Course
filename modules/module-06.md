# Módulo 6: Lógica de Programação - Condicionais e Laços

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender os conceitos fundamentais de lógica de programação.
*   Utilizar estruturas condicionais (`if`, `else if`, `else`) para controlar o fluxo do programa.
*   Utilizar laços de repetição (`for`, `while`) para executar tarefas repetitivas.
*   Aplicar lógica de programação para criar funcionalidades mais inteligentes no seu projeto prático.

## Conteúdo Teórico e Prático

### O que é Lógica de Programação?

Lógica de programação é a base para qualquer linguagem de programação. É a forma como você organiza e estrutura seus pensamentos para resolver um problema. Antes de escrever qualquer código, você precisa pensar na sequência de passos que o computador deve seguir para alcançar um objetivo. É como criar uma receita: você lista os ingredientes e os passos para preparar um prato.

### Estruturas Condicionais: `if`, `else if`, `else`

As estruturas condicionais permitem que seu programa tome decisões com base em certas condições. Se uma condição for verdadeira, um bloco de código é executado; caso contrário, outro bloco pode ser executado.

*   **`if`**: Executa um bloco de código se a condição for verdadeira.
    ```javascript
    let idade = 18;
    if (idade >= 18) {
        console.log("Você é maior de idade.");
    }
    ```

*   **`else`**: Executa um bloco de código se a condição do `if` for falsa.
    ```javascript
    let temperatura = 25;
    if (temperatura > 30) {
        console.log("Está muito quente!");
    } else {
        console.log("A temperatura está agradável.");
    }
    ```

*   **`else if`**: Permite testar múltiplas condições em sequência.
    ```javascript
    let nota = 75;
    if (nota >= 90) {
        console.log("Excelente!");
    } else if (nota >= 70) {
        console.log("Bom!");
    } else {
        console.log("Precisa melhorar.");
    }
    ```

### Operadores Lógicos

Para construir condições mais complexas, usamos operadores lógicos:

*   **`&&` (AND lógico)**: Ambas as condições devem ser verdadeiras.
    ```javascript
    if (idade >= 18 && temCarteira) {
        console.log("Pode dirigir.");
    }
    ```

*   **`||` (OR lógico)**: Pelo menos uma das condições deve ser verdadeira.
    ```javascript
    if (estaChovendo || temGuardaChuva) {
        console.log("Vou sair.");
    }
    ```

*   **`!` (NOT lógico)**: Inverte o valor booleano da condição.
    ```javascript
    if (!estaLogado) {
        console.log("Por favor, faça login.");
    }
    ```

### Laços de Repetição: `for` e `while`

Laços de repetição permitem executar um bloco de código várias vezes, o que é essencial para automatizar tarefas repetitivas.

*   **`for`**: Usado quando você sabe o número de vezes que deseja repetir.
    ```javascript
    for (let i = 0; i < 5; i++) {
        console.log("Contagem: " + i);
    }
    // Saída: Contagem: 0, Contagem: 1, ..., Contagem: 4
    ```

*   **`while`**: Usado quando a repetição continua enquanto uma condição for verdadeira.
    ```javascript
    let contador = 0;
    while (contador < 3) {
        console.log("Repetição: " + contador);
        contador++;
    }
    // Saída: Repetição: 0, Repetição: 1, Repetição: 2
    ```

## Tarefa Prática do Dia: Adicionando Lógica ao Projeto

Vamos adicionar uma funcionalidade ao seu projeto que exibe uma mensagem diferente dependendo da hora do dia e uma lista dinâmica de itens.

1.  No seu `index.html`, adicione um parágrafo com `id="mensagemSaudacao"`.
2.  No seu `script.js`, com o assistente de IA ativado, peça para ele:

    ```javascript
    // 1. Selecione o parágrafo com id 'mensagemSaudacao'.
    // 2. Obtenha a hora atual do sistema.
    // 3. Se a hora for antes das 12h, defina o texto do parágrafo como "Bom dia!".
    // 4. Se a hora for entre 12h e 18h, defina o texto como "Boa tarde!".
    // 5. Caso contrário, defina o texto como "Boa noite!".
    ```

3.  Ainda no `script.js`, peça para a IA:

    ```javascript
    // 1. Crie um array de strings com 5 nomes de funcionalidades do seu produto (ex: "Login", "Cadastro", "Dashboard", "Relatórios", "Configurações").
    // 2. Selecione a lista não ordenada (ul) que você criou no Módulo 2 (se não tiver um id, adicione um, ex: id="listaFuncionalidades").
    // 3. Use um laço for para iterar sobre o array de funcionalidades.
    // 4. Para cada funcionalidade, crie um novo item de lista (li) e adicione-o à lista ul.
    ```

4.  Revise o código gerado pela IA e aceite-o.
5.  Execute o projeto (`Run`) e observe as mudanças na mensagem de saudação e na lista de funcionalidades.

## Exercícios de Revisão e Autoavaliação

*   Explique a diferença entre `if` e `while`.
*   Quando você usaria `&&` e quando usaria `||`?
*   Escreva um pequeno trecho de código JavaScript que imprima os números de 1 a 10 no console usando um laço `for`.
*   Como você faria para que a mensagem de saudação fosse atualizada automaticamente a cada minuto?

## Links para Materiais Complementares

*   [Condicionais em JavaScript - MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#condicionais)
*   [Laços de Repetição em JavaScript - MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)

## Orientações para Interação com a IA

*   **Descreva a lógica:** Ao pedir para a IA implementar condicionais ou laços, descreva a lógica que você quer que ela siga (ex: "se isso, faça aquilo; senão, faça outra coisa").
*   **Forneça exemplos:** Se a lógica for complexa, dê exemplos de entradas e saídas esperadas.

## Recomendações para Revisão e Testes

*   **Teste todas as condições:** Para condicionais, certifique-se de testar todos os caminhos possíveis (verdadeiro, falso, diferentes `else if`).
*   **Verifique os limites dos laços:** Para laços, verifique se eles começam e terminam corretamente e se não caem em um loop infinito.

## Projeto Prático: Próximos Passos

Com a lógica de programação, seu produto digital começa a ganhar inteligência. Nos próximos módulos, vamos explorar como organizar seu código JavaScript em funções e como ele pode interagir com dados mais complexos.

