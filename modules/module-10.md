# Módulo 10: Introdução ao Backend - Node.js e npm

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender o que é o backend e sua função em uma aplicação web.
*   Entender o papel do Node.js no desenvolvimento backend com JavaScript.
*   Instalar e configurar o Node.js e o npm (Node Package Manager) no ambiente de desenvolvimento.
*   Criar e executar seu primeiro script Node.js.
*   Iniciar a estrutura do backend do seu projeto prático.

## Conteúdo Teórico e Prático

### O que é o Backend?

Até agora, focamos no **frontend**, que é a parte da aplicação com a qual o usuário interage diretamente (HTML, CSS, JavaScript no navegador). O **backend**, por outro lado, é a parte da aplicação que roda no servidor. Ele é responsável por:

*   **Armazenar e gerenciar dados:** Interage com bancos de dados para guardar e recuperar informações.
*   **Lógica de negócio:** Contém as regras e a inteligência da aplicação (ex: processar pagamentos, autenticar usuários).
*   **Segurança:** Garante que os dados estejam seguros e que apenas usuários autorizados possam acessá-los.
*   **APIs (Application Programming Interfaces):** Fornece os "serviços" que o frontend consome, permitindo a comunicação entre as duas partes da aplicação.

Em resumo, o frontend é a "vitrine" e o backend é o "estoque e a cozinha" de uma loja online. O frontend mostra os produtos e permite que o cliente faça um pedido, enquanto o backend gerencia o inventário, processa o pedido e garante que tudo funcione por trás das cenas.

### Node.js: JavaScript no Servidor

Tradicionalmente, JavaScript era executado apenas no navegador. No entanto, com o surgimento do **Node.js**, o JavaScript pode ser executado fora do navegador, ou seja, no servidor. Isso significa que você pode usar a mesma linguagem (JavaScript) tanto para o frontend quanto para o backend, o que simplifica o processo de aprendizado e desenvolvimento.

Node.js é um ambiente de tempo de execução JavaScript de código aberto e multiplataforma que permite aos desenvolvedores criar ferramentas e aplicações de servidor. Ele é conhecido por sua eficiência e escalabilidade, sendo ideal para construir APIs e serviços em tempo real.

### npm: O Gerenciador de Pacotes do Node.js

**npm** (Node Package Manager) é o gerenciador de pacotes padrão para o Node.js. Ele permite que você instale, compartilhe e gerencie bibliotecas de código (chamadas de "pacotes" ou "módulos") que outros desenvolvedores criaram. Isso acelera muito o desenvolvimento, pois você não precisa reinventar a roda para funcionalidades comuns.

**Comandos npm básicos:**

*   `npm init`: Inicializa um novo projeto Node.js, criando um arquivo `package.json` que gerencia as dependências do seu projeto.
*   `npm install <nome-do-pacote>`: Instala um pacote específico no seu projeto.
*   `npm install`: Instala todas as dependências listadas no `package.json`.

## Tarefa Prática do Dia: Configurando o Ambiente Node.js e Seu Primeiro Script

Para este módulo, vamos precisar de um ambiente de linha de comando. O Replit oferece um terminal integrado que é perfeito para isso.

1.  No seu projeto Replit, você deve ver uma aba "Shell" ou "Console" (geralmente na parte inferior ou lateral). Clique nela para abrir o terminal.

2.  **Verifique a instalação do Node.js e npm:**
    No terminal, digite:
    ```bash
    node -v
    npm -v
    ```
    Você deverá ver as versões instaladas. Se não vir, o Replit geralmente já vem com eles pré-instalados. Se por algum motivo não estiverem, você pode tentar instalá-los (mas é raro no Replit).

3.  **Inicialize um novo projeto Node.js:**
    No terminal, digite:
    ```bash
    npm init -y
    ```
    O `-y` aceita todas as configurações padrão, criando um arquivo `package.json` automaticamente. Você pode ver este arquivo na árvore de arquivos do Replit.

4.  **Crie seu primeiro script Node.js:**
    Crie um novo arquivo no seu projeto Replit chamado `app.js`.
    Com o assistente de IA ativado, peça para ele:

    ```javascript
    // Escreva um script Node.js que imprima "Servidor iniciado com sucesso!" no console.
    // Em seguida, imprima a data e hora atuais.
    ```

5.  **Execute o script Node.js:**
    No terminal, digite:
    ```bash
    node app.js
    ```
    Você deverá ver as mensagens que seu script imprimiu no console.

## Exercícios de Revisão e Autoavaliação

*   Qual a diferença fundamental entre frontend e backend?
*   Por que o Node.js é importante para o desenvolvimento web moderno?
*   Para que serve o npm?
*   Como você inicializaria um novo projeto Node.js e instalaria um pacote chamado `express`?

## Links para Materiais Complementares

*   [O que é Node.js? - Node.js (em português)](https://nodejs.org/pt-br/about)
*   [Introdução ao npm - npm Docs (em inglês)](https://docs.npmjs.com/cli/v10/commands/npm)

## Orientações para Interação com a IA

*   **Especifique o ambiente:** Ao pedir código para o backend, mencione que é para Node.js ou para o servidor.
*   **Descreva a funcionalidade do servidor:** Pense no que o seu backend precisa fazer (ex: "criar um endpoint que retorna dados de usuários").

## Recomendações para Revisão e Testes

*   **Verifique o `package.json`:** Entenda o que cada campo significa, especialmente `name`, `version` e `scripts`.
*   **Teste os comandos no terminal:** Familiarize-se com a execução de scripts Node.js e comandos npm.

## Projeto Prático: Próximos Passos

Você deu um grande passo hoje, entrando no mundo do backend! Nos próximos módulos, vamos usar o Node.js para construir uma API simples que o seu frontend poderá consumir, e aprender sobre frameworks como o Express.js.

