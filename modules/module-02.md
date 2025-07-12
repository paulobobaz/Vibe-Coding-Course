# Módulo 2: Fundamentos de HTML - Estrutura e Conteúdo

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender a estrutura básica de um documento HTML.
*   Utilizar as principais tags HTML para estruturar o conteúdo de uma página web.
*   Criar títulos, parágrafos, listas e links com HTML.
*   Continuar a desenvolver o projeto prático, adicionando mais conteúdo à sua página.

## Conteúdo Teórico e Prático

### A Estrutura Básica do HTML

HTML (HyperText Markup Language) é a linguagem de marcação padrão para criar páginas web. Ele usa "tags" para definir a estrutura e o conteúdo de uma página. Todo documento HTML segue uma estrutura básica:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Página</title>
</head>
<body>
    <!-- Conteúdo da página vai aqui -->
</body>
</html>
```

*   `<!DOCTYPE html>`: Declara o tipo de documento como HTML5.
*   `<html lang="pt-br">`: O elemento raiz de uma página HTML. O atributo `lang="pt-br"` define o idioma da página.
*   `<head>`: Contém metadados sobre a página, como o título que aparece na aba do navegador (`<title>`), a codificação de caracteres (`<meta charset="UTF-8">`) e a configuração de viewport para responsividade (`<meta name="viewport">`).
*   `<body>`: Contém todo o conteúdo visível da página, como textos, imagens, links, etc.

### Tags HTML Essenciais para Conteúdo

Vamos explorar algumas tags HTML fundamentais para adicionar conteúdo à sua página:

*   **Títulos (`<h1>` a `<h6>`)**: Usados para definir títulos e subtítulos. `<h1>` é o mais importante, `<h6>` o menos importante.
    ```html
    <h1>Título Principal</h1>
    <h2>Subtítulo</h2>
    ```

*   **Parágrafos (`<p>`)**: Usados para blocos de texto.
    ```html
    <p>Este é um parágrafo de texto.</p>
    ```

*   **Listas (`<ul>`, `<ol>`, `<li>`)**: Usadas para criar listas.
    *   `<ul>` (unordered list): Lista não ordenada (com marcadores).
    *   `<ol>` (ordered list): Lista ordenada (com números).
    *   `<li>` (list item): Item da lista.
    ```html
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>

    <ol>
        <li>Primeiro item</li>
        <li>Segundo item</li>
    </ol>
    ```

*   **Links (`<a>`)**: Usados para criar hiperlinks para outras páginas ou recursos. O atributo `href` define o destino do link.
    ```html
    <a href="https://www.google.com">Visite o Google</a>
    ```

## Tarefa Prática do Dia: Estruturando o Conteúdo do Projeto

Vamos aprimorar a página do seu projeto prático, adicionando mais conteúdo e utilizando as tags que você aprendeu.

1.  Abra o arquivo `index.html` no seu Replit.
2.  Com o assistente de IA ativado, adicione o seguinte conteúdo dentro da tag `<body>` (apague o conteúdo anterior, se houver, ou peça para a IA substituí-lo):

    ```html
    <!-- Adicione um título h1 "Bem-vindo ao Meu Produto Digital", um parágrafo de introdução sobre o projeto, uma lista não ordenada de 3 funcionalidades principais do produto e um link para uma página de "Sobre Nós" (que ainda não existe, então use # como placeholder) -->
    ```

3.  A IA irá gerar o código HTML. Revise-o e aceite a sugestão.
4.  Execute o projeto (`Run`) para ver as mudanças.

## Exercícios de Revisão e Autoavaliação

*   Qual a diferença entre as tags `<head>` e `<body>` em HTML?
*   Quando você usaria `<h1>` em vez de `<h2>`?
*   Como você criaria uma lista numerada de itens?
*   Qual atributo é essencial para a tag `<a>` e para que serve?

## Links para Materiais Complementares

*   [HTML Básico - W3Schools (em português)](https://www.w3schools.com/html/html_basic.asp)
*   [Elementos HTML - MDN Web Docs (em português)](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Elemento)

## Orientações para Interação com a IA

*   **Seja descritivo:** Ao pedir para a IA criar elementos, descreva o tipo de elemento (título, parágrafo, lista) e o conteúdo que ele deve ter.
*   **Use exemplos:** Se você tiver um exemplo de como quer que algo se pareça, inclua-o na sua descrição para a IA.

## Recomendações para Revisão e Testes

*   **Valide a estrutura:** Verifique se as tags estão aninhadas corretamente (ex: `<li>` dentro de `<ul>` ou `<ol>`).
*   **Teste os links:** Mesmo que o link seja um placeholder (`#`), clique nele para garantir que ele se comporte como um link.

## Projeto Prático: Próximos Passos

Hoje você adicionou estrutura e conteúdo à sua página. Nos próximos módulos, vamos começar a dar estilo a ela com CSS e adicionar interatividade com JavaScript.

