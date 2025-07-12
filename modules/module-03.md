# Módulo 3: Fundamentos de CSS - Estilizando sua Página

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender o que é CSS e sua importância para o design web.
*   Aplicar estilos CSS a elementos HTML usando seletores básicos.
*   Modificar cores, fontes, tamanhos e alinhamentos de texto.
*   Integrar um arquivo CSS externo ao seu projeto Replit.
*   Continuar a estilizar o projeto prático, dando uma aparência mais profissional à sua página.

## Conteúdo Teórico e Prático

### O que é CSS?

CSS (Cascading Style Sheets) é uma linguagem de folha de estilo usada para descrever a apresentação de um documento escrito em HTML. Enquanto o HTML estrutura o conteúdo, o CSS o estiliza. Com CSS, você pode controlar cores, fontes, espaçamento, layout e muito mais, transformando uma página HTML básica em um design visualmente atraente.

### Como o CSS Funciona: Seletores e Propriedades

O CSS funciona selecionando elementos HTML e aplicando regras de estilo a eles. Uma regra CSS consiste em um seletor e um bloco de declaração:

```css
selector {
    property: value;
}
```

*   **Seletor:** Aponta para o elemento HTML que você deseja estilizar (ex: `p` para parágrafos, `h1` para títulos `h1`).
*   **Propriedade:** O atributo de estilo que você deseja alterar (ex: `color`, `font-size`, `text-align`).
*   **Valor:** O valor que você deseja aplicar à propriedade (ex: `blue`, `16px`, `center`).

Exemplo:

```css
h1 {
    color: blue;
    font-size: 36px;
}

p {
    text-align: justify;
}
```

### Formas de Incluir CSS

Existem três maneiras principais de incluir CSS em um documento HTML:

1.  **Inline:** Estilos aplicados diretamente na tag HTML usando o atributo `style`. **Não recomendado para projetos maiores.**
    ```html
    <h1 style="color: red;">Título Vermelho</h1>
    ```

2.  **Interno:** Estilos definidos dentro da tag `<style>` no `<head>` do documento HTML. Útil para estilos específicos de uma única página.
    ```html
    <head>
        <style>
            h1 {
                color: green;
            }
        </style>
    </head>
    ```

3.  **Externo (Recomendado):** Estilos definidos em um arquivo `.css` separado e linkados ao documento HTML. Esta é a melhor prática para manter o código organizado e reutilizável.
    ```html
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    ```
    No Replit, o arquivo `style.css` já está linkado por padrão no `index.html`.

### Propriedades CSS Comuns

*   **`color`**: Define a cor do texto.
*   **`background-color`**: Define a cor de fundo de um elemento.
*   **`font-family`**: Define a fonte do texto.
*   **`font-size`**: Define o tamanho da fonte.
*   **`text-align`**: Alinha o texto (left, right, center, justify).
*   **`margin`**: Define o espaçamento externo de um elemento.
*   **`padding`**: Define o espaçamento interno de um elemento.

## Tarefa Prática do Dia: Estilizando o Projeto

Vamos dar uma nova cara à sua página usando CSS.

1.  Abra o arquivo `style.css` no seu Replit.
2.  Com o assistente de IA ativado, peça para a IA adicionar estilos básicos para o `body`, `h1`, `p` e `ul`.

    ```css
    /* Adicione estilos para o body (cor de fundo clara, fonte geral), h1 (cor, alinhamento central), p (tamanho da fonte, espaçamento de linha) e ul (sem marcadores, padding) */
    ```

3.  A IA irá gerar o código CSS. Revise-o e aceite a sugestão.
4.  Experimente mudar as cores, fontes e tamanhos. Peça para a IA fazer essas alterações para você.
    *   Exemplo: `/* Mude a cor do h1 para um tom de roxo */`
5.  Execute o projeto (`Run`) para ver as mudanças visuais.

## Exercícios de Revisão e Autoavaliação

*   Qual a função principal do CSS?
*   Explique a diferença entre um seletor e uma propriedade em CSS.
*   Qual a forma mais recomendada de incluir CSS em um projeto web e por quê?
*   Como você mudaria a cor de fundo de toda a página para um tom de cinza claro?

## Links para Materiais Complementares

*   [Introdução ao CSS - MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Introducao)
*   [Seletores CSS - W3Schools (em português)](https://www.w3schools.com/css/css_selectors.asp)

## Orientações para Interação com a IA

*   **Seja específico com as propriedades:** Ao pedir estilos, mencione a propriedade CSS que você quer alterar (ex: `color`, `font-size`).
*   **Use valores claros:** Para cores, você pode usar nomes de cores (red, blue), códigos hexadecimais (#FF0000) ou RGB (rgb(255,0,0)).

## Recomendações para Revisão e Testes

*   **Inspecione os elementos:** Use as ferramentas de desenvolvedor do navegador (clique com o botão direito na página e selecione "Inspecionar") para ver quais estilos estão sendo aplicados a cada elemento.
*   **Teste a responsividade:** Redimensione a janela do navegador para ver como seus estilos se comportam em diferentes tamanhos de tela. Embora ainda não tenhamos abordado responsividade, é bom começar a observar.

## Projeto Prático: Próximos Passos

Com HTML e CSS, sua página já tem estrutura e estilo. Nos próximos módulos, vamos adicionar interatividade com JavaScript e começar a pensar na lógica por trás do seu produto digital.

