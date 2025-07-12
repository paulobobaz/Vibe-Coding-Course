# Módulo 5: JavaScript Avançado - Manipulando o DOM

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Aprofundar seus conhecimentos em manipulação do DOM com JavaScript.
*   Selecionar elementos HTML de diversas formas (ID, classe, tag).
*   Modificar o conteúdo e os atributos de elementos HTML dinamicamente.
*   Adicionar e remover classes CSS com JavaScript para alterar estilos.
*   Continuar aprimorando a interatividade do seu projeto prático.

## Conteúdo Teórico e Prático

### Entendendo a Manipulação do DOM

No Módulo 4, você aprendeu que o DOM (Document Object Model) é a representação estruturada de um documento HTML. A manipulação do DOM é a capacidade do JavaScript de acessar e modificar essa estrutura, permitindo que você altere o conteúdo, o estilo e a estrutura da sua página web em tempo real, em resposta a interações do usuário ou a outras lógicas.

### Selecionando Elementos HTML

Para manipular um elemento, primeiro você precisa selecioná-lo. As formas mais comuns de selecionar elementos são:

*   **`document.getElementById('idDoElemento')`**: Seleciona um único elemento pelo seu atributo `id`. O `id` deve ser único na página.
    ```javascript
    const meuTitulo = document.getElementById('tituloPrincipal');
    ```

*   **`document.querySelector('seletorCSS')`**: Seleciona o primeiro elemento que corresponde a um seletor CSS especificado. Pode ser um ID (`#id`), uma classe (`.classe`), uma tag (`tag`), ou uma combinação.
    ```javascript
    const meuParagrafo = document.querySelector('.introducao');
    const primeiroLink = document.querySelector('a');
    ```

*   **`document.querySelectorAll('seletorCSS')`**: Seleciona todos os elementos que correspondem a um seletor CSS especificado. Retorna uma NodeList (que se comporta como um array).
    ```javascript
    const todosOsParagrafos = document.querySelectorAll('p');
    ```

### Modificando Conteúdo e Atributos

Uma vez que você seleciona um elemento, pode modificar seu conteúdo e atributos:

*   **`elemento.textContent`**: Obtém ou define o conteúdo de texto de um elemento (ignora HTML).
    ```javascript
    meuTitulo.textContent = 'Novo Título!';
    ```

*   **`elemento.innerHTML`**: Obtém ou define o conteúdo HTML de um elemento (interpreta HTML).
    ```javascript
    meuParagrafo.innerHTML = 'Este é um <strong>parágrafo</strong> atualizado.';
    ```

*   **`elemento.setAttribute('atributo', 'valor')`**: Define o valor de um atributo de um elemento.
    ```javascript
    const meuLink = document.querySelector('a');
    meuLink.setAttribute('href', 'https://www.novosite.com');
    ```

### Manipulando Classes CSS

Você pode adicionar ou remover classes CSS de elementos para alterar seus estilos dinamicamente. Isso é muito útil para criar efeitos visuais ou para alternar entre diferentes estados de um elemento.

*   **`elemento.classList.add('nomeDaClasse')`**: Adiciona uma classe ao elemento.
*   **`elemento.classList.remove('nomeDaClasse')`**: Remove uma classe do elemento.
*   **`elemento.classList.toggle('nomeDaClasse')`**: Adiciona a classe se ela não estiver presente, ou remove se estiver.

Exemplo:

```javascript
// No CSS:
// .destaque { color: red; font-weight: bold; }

const meuBotao = document.getElementById('botaoDestaque');
meuBotao.addEventListener('click', () => {
    meuTitulo.classList.toggle('destaque');
});
```

## Tarefa Prática do Dia: Interatividade Avançada no Projeto

Vamos adicionar uma funcionalidade ao seu projeto: um botão que muda o texto de um parágrafo e outro que altera o estilo de um título.

1.  No seu `index.html`, adicione um `id="paragrafoIntro"` ao seu parágrafo de introdução e um `id="tituloPrincipal"` ao seu título `h1`.
2.  Adicione dois novos botões ao `index.html`:
    *   Um com `id="mudarTextoBtn"` e texto "Mudar Texto do Parágrafo".
    *   Outro com `id="alternarEstiloBtn"` e texto "Alternar Estilo do Título".

3.  No seu `style.css`, crie uma nova classe CSS:

    ```css
    .destaque {
        color: purple;
        font-style: italic;
        text-decoration: underline;
    }
    ```

4.  No seu `script.js`, com o assistente de IA ativado, peça para ele:

    ```javascript
    // 1. Selecione o parágrafo com id 'paragrafoIntro' e o botão com id 'mudarTextoBtn'.
    // 2. Adicione um event listener ao 'mudarTextoBtn' que, ao ser clicado, mude o textContent de 'paragrafoIntro' para 'O texto foi alterado dinamicamente pelo JavaScript!'
    // 3. Selecione o título com id 'tituloPrincipal' e o botão com id 'alternarEstiloBtn'.
    // 4. Adicione um event listener ao 'alternarEstiloBtn' que, ao ser clicado, alterne a classe 'destaque' no 'tituloPrincipal'.
    ```

5.  Revise o código gerado pela IA e aceite-o.
6.  Execute o projeto (`Run`) e teste os novos botões.

## Exercícios de Revisão e Autoavaliação

*   Qual a diferença entre `getElementById`, `querySelector` e `querySelectorAll`?
*   Quando você usaria `textContent` e quando usaria `innerHTML`?
*   Como você adicionaria uma nova classe CSS a um elemento HTML usando JavaScript?
*   Explique como a manipulação de classes CSS pode ser útil para criar interatividade.

## Links para Materiais Complementares

*   [Introdução ao DOM - MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introducao)
*   [Manipulando Classes com classList - W3Schools (em inglês)](https://www.w3schools.com/howto/howto_js_add_class.asp)

## Orientações para Interação com a IA

*   **Seja preciso nos seletores:** Ao pedir para a IA selecionar elementos, forneça o ID ou a classe exata.
*   **Descreva a ação e o alvo:** Deixe claro qual elemento deve ser manipulado e qual a modificação desejada (ex: "mudar o texto de X para Y", "adicionar classe Z ao elemento W").

## Recomendações para Revisão e Testes

*   **Verifique o console:** Erros de JavaScript geralmente aparecem no console do navegador. Fique atento a eles.
*   **Inspecione os elementos:** Use as ferramentas de desenvolvedor para ver se as classes CSS estão sendo adicionadas/removidas corretamente e se o conteúdo HTML está sendo atualizado.

## Projeto Prático: Próximos Passos

Você está ganhando fluência em JavaScript! A manipulação do DOM é fundamental para criar interfaces de usuário dinâmicas. Nos próximos módulos, vamos explorar a lógica de programação mais a fundo e como ela se aplica na construção de funcionalidades mais complexas para o seu produto digital.

