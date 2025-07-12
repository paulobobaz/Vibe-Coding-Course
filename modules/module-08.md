# Módulo 8: JavaScript Avançado - Objetos e JSON

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender o conceito de objetos em JavaScript e como eles representam dados complexos.
*   Criar e manipular objetos, acessando suas propriedades e métodos.
*   Entender o formato JSON (JavaScript Object Notation) e sua importância na comunicação web.
*   Converter objetos JavaScript para JSON e vice-versa.
*   Aplicar objetos e JSON para estruturar dados no seu projeto prático.

## Conteúdo Teórico e Prático

### O que são Objetos em JavaScript?

Em JavaScript, um objeto é uma coleção de propriedades, onde cada propriedade tem um nome (chave) e um valor. Os valores podem ser de qualquer tipo de dado, incluindo outras funções (que, quando associadas a um objeto, são chamadas de métodos) ou até mesmo outros objetos. Objetos são fundamentais para organizar dados relacionados de forma lógica e para modelar entidades do mundo real.

**Sintaxe básica de um objeto:**

```javascript
let pessoa = {
    nome: "Alice",
    idade: 30,
    cidade: "São Paulo",
    interesses: ["leitura", "viagem", "cozinhar"],
    saudar: function() {
        console.log("Olá, meu nome é " + this.nome);
    }
};
```

### Acessando Propriedades e Métodos

Você pode acessar as propriedades de um objeto de duas maneiras:

1.  **Notação de ponto (`.`)**: Mais comum e legível.
    ```javascript
    console.log(pessoa.nome);    // Saída: "Alice"
    pessoa.saudar();             // Saída: "Olá, meu nome é Alice"
    ```

2.  **Notação de colchetes (`[]`)**: Útil quando o nome da propriedade é dinâmico (armazenado em uma variável) ou contém caracteres especiais.
    ```javascript
    let chave = "idade";
    console.log(pessoa[chave]); // Saída: 30
    ```

Você também pode adicionar ou modificar propriedades:

```javascript
pessoa.profissao = "Engenheira"; // Adiciona uma nova propriedade
pessoa.idade = 31;              // Modifica uma propriedade existente
```

### O que é JSON?

JSON (JavaScript Object Notation) é um formato leve de troca de dados. É fácil para humanos lerem e escreverem, e fácil para máquinas analisarem e gerarem. Apesar do nome, JSON é independente de linguagem e é amplamente utilizado para comunicação entre servidores e aplicações web (APIs).

Um objeto JSON é muito parecido com um objeto JavaScript, mas com algumas regras mais estritas:

*   As chaves devem ser strings (entre aspas duplas).
*   Os valores podem ser strings, números, booleanos, arrays, outros objetos ou `null`.
*   Não pode conter funções.

**Exemplo de JSON:**

```json
{
    "produto": {
        "nome": "Smartphone X",
        "preco": 999.99,
        "disponivel": true,
        "cores": ["preto", "branco", "azul"]
    }
}
```

### Convertendo entre JavaScript e JSON

JavaScript possui métodos embutidos para trabalhar com JSON:

*   **`JSON.stringify()`**: Converte um objeto JavaScript em uma string JSON.
    ```javascript
    let produtoJS = {
        nome: "Laptop Pro",
        preco: 1500.00
    };
    let produtoJSON = JSON.stringify(produtoJS);
    console.log(produtoJSON); // Saída: {"nome":"Laptop Pro","preco":1500}
    ```

*   **`JSON.parse()`**: Converte uma string JSON em um objeto JavaScript.
    ```javascript
    let dadosJSON = '{"usuario":"Maria","id":123}';
    let usuarioJS = JSON.parse(dadosJSON);
    console.log(usuarioJS.usuario); // Saída: "Maria"
    ```

## Tarefa Prática do Dia: Gerenciando Dados do Produto com Objetos e JSON

Vamos criar um objeto JavaScript para representar seu produto digital e, em seguida, convertê-lo para JSON.

1.  No seu `script.js`, com o assistente de IA ativado, peça para ele:

    ```javascript
    // 1. Crie um objeto JavaScript chamado 'dadosProduto' com as seguintes propriedades:
    //    - nome: (string, ex: 


"Meu App Incrível")
    //    - versao: (string, ex: "1.0.0")
    //    - funcionalidades: (array de strings, use as funcionalidades que você já tem)
    //    - detalhes: (objeto com propriedades: publicoAlvo (string), tecnologiaPrincipal (string))
    //    - disponivel: (booleano, true ou false)
    // 2. Imprima o objeto `dadosProduto` no console.
    // 3. Converta `dadosProduto` para uma string JSON e imprima-a no console.
    // 4. Crie uma string JSON de exemplo para um usuário (ex: {"nome":"João","email":"joao@example.com"}).
    // 5. Converta essa string JSON de usuário para um objeto JavaScript e imprima o nome do usuário no console.
    ```

2.  Revise o código gerado pela IA e aceite-o.
3.  Execute o projeto (`Run`) e verifique a saída no console do navegador (F12).

## Exercícios de Revisão e Autoavaliação

*   Qual a principal diferença entre um objeto JavaScript e uma string JSON?
*   Quando você usaria a notação de ponto (`.`) e quando usaria a notação de colchetes (`[]`) para acessar propriedades de um objeto?
*   Para que servem `JSON.stringify()` e `JSON.parse()`?
*   Crie um objeto JavaScript que represente um livro, com propriedades como título, autor, ano de publicação e um array de gêneros. Em seguida, converta-o para JSON.

## Links para Materiais Complementares

*   [Trabalhando com Objetos - MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects)
*   [Introdução ao JSON - W3Schools (em inglês)](https://www.w3schools.com/js/js_json_intro.asp)

## Orientações para Interação com a IA

*   **Descreva a estrutura do objeto:** Ao pedir para a IA criar um objeto, liste as propriedades e seus tipos de valor (string, número, array, outro objeto).
*   **Especifique a conversão:** Deixe claro se você quer converter para JSON (`stringify`) ou de JSON para objeto (`parse`).

## Recomendações para Revisão e Testes

*   **Verifique a sintaxe JSON:** Certifique-se de que as chaves estão entre aspas duplas e que não há vírgulas extras ou faltando.
*   **Teste com dados aninhados:** Se seu objeto tiver outros objetos ou arrays dentro, verifique se o acesso e a conversão funcionam corretamente.

## Projeto Prático: Próximos Passos

Com objetos e JSON, você tem as ferramentas para estruturar dados complexos no seu frontend. Isso é crucial para quando começarmos a interagir com o backend, que geralmente envia e recebe dados nesse formato. Nos próximos módulos, vamos explorar a comunicação assíncrona e como fazer requisições a APIs.

