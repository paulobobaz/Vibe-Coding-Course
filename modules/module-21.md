# Módulo 21: Deploy - Conceitos e Opções

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender o que é deploy e por que ele é necessário.
*   Conhecer as diferentes opções de deploy para aplicações web (frontend e backend).
*   Entender os conceitos de hospedagem, domínios e DNS.
*   Preparar sua aplicação para o deploy, revisando configurações.
*   Escolher uma estratégia de deploy para o seu projeto prático.

## Conteúdo Teórico e Prático

### O que é Deploy?

**Deploy** (ou implantação) é o processo de tornar sua aplicação web acessível ao público na internet. Até agora, sua aplicação só funciona no seu ambiente de desenvolvimento (Replit). Para que outras pessoas possam usá-la, você precisa "implantá-la" em um servidor que esteja sempre online e acessível.

O deploy envolve várias etapas, como empacotar o código, configurar o ambiente do servidor, configurar o banco de dados, e garantir que tudo esteja funcionando corretamente.

### Opções de Deploy para Frontend

Para o frontend (HTML, CSS, JavaScript estático), as opções de deploy são geralmente mais simples:

*   **Hospedagem Estática:** Serviços que hospedam arquivos estáticos (HTML, CSS, JS, imagens) de forma eficiente. São ideais para sites que não precisam de um servidor backend complexo para renderizar páginas.
    *   **Exemplos:** Netlify, Vercel, GitHub Pages, Firebase Hosting, Amazon S3.
    *   **Vantagens:** Simples, rápido, barato (muitas vezes gratuito para projetos pequenos), escalável.
    *   **Desvantagens:** Não suporta lógica de servidor (para isso, você precisaria de um backend separado).

### Opções de Deploy para Backend

Para o backend (Node.js, Express.js, banco de dados), as opções são mais variadas e dependem da complexidade e escala da sua aplicação:

*   **Servidores Virtuais Privados (VPS) / Máquinas Virtuais (VMs):** Você aluga uma máquina virtual e tem controle total sobre o sistema operacional e as configurações. Você precisa instalar e configurar tudo manualmente (Node.js, banco de dados, servidor web como Nginx/Apache).
    *   **Exemplos:** DigitalOcean Droplets, AWS EC2, Google Cloud Compute Engine, Azure Virtual Machines.
    *   **Vantagens:** Controle total, flexibilidade.
    *   **Desvantagens:** Requer mais conhecimento técnico para configuração e manutenção, mais caro.

*   **Plataformas como Serviço (PaaS):** O provedor gerencia a infraestrutura (servidores, sistemas operacionais, bancos de dados), e você se concentra apenas no seu código. Você "implanta" seu código, e a plataforma cuida do resto.
    *   **Exemplos:** Heroku, Render, Railway, Google App Engine, AWS Elastic Beanstalk.
    *   **Vantagens:** Facilidade de uso, escalabilidade automática, menos gerenciamento de infraestrutura.
    *   **Desvantagens:** Menos controle, pode ser mais caro para grandes volumes, dependência do provedor.

*   **Funções como Serviço (FaaS) / Serverless:** Você implanta funções individuais que são executadas em resposta a eventos (ex: requisição HTTP). O provedor gerencia completamente os servidores, e você paga apenas pelo tempo de execução do seu código.
    *   **Exemplos:** AWS Lambda, Google Cloud Functions, Azure Functions.
    *   **Vantagens:** Escalabilidade extrema, custo-benefício para tráfego variável, sem gerenciamento de servidor.
    *   **Desvantagens:** Complexidade para aplicações grandes, pode não ser ideal para todas as cargas de trabalho.

Para o nosso projeto, as PaaS (como Render ou Railway) são uma excelente opção, pois simplificam o processo de deploy para iniciantes.

### Domínios e DNS

*   **Domínio:** É o endereço amigável do seu site na internet (ex: `meuproduto.com`).
*   **DNS (Domain Name System):** É como uma "lista telefônica" da internet. Ele traduz nomes de domínio legíveis por humanos (como `google.com`) em endereços IP numéricos (como `172.217.160.142`) que os computadores usam para se comunicar.

Ao fazer o deploy, você precisará configurar seu domínio para apontar para o servidor onde sua aplicação está hospedada.

### Preparando sua Aplicação para o Deploy

Antes de fazer o deploy, algumas coisas a considerar:

*   **Variáveis de Ambiente:** Informações sensíveis (chaves de API, segredos JWT, credenciais de banco de dados) não devem estar no código. Use variáveis de ambiente (`process.env.NOME_DA_VARIAVEL`) e configure-as no seu provedor de deploy.
*   **CORS (Cross-Origin Resource Sharing):** Se seu frontend e backend estiverem em domínios diferentes (o que é comum no deploy), você precisará configurar o CORS no seu backend para permitir que o frontend faça requisições. O Express.js tem um pacote `cors` para isso.
    ```bash
    npm install cors
    ```
    ```javascript
    const cors = require("cors");
    app.use(cors()); // Permite todas as origens (para desenvolvimento)
    // Para produção, configure origens específicas:
    // app.use(cors({ origin: "https://seufrontend.com" }));
    ```
*   **Scripts de Inicialização:** Certifique-se de que seu `package.json` tenha um script `start` que o provedor de deploy possa usar para iniciar seu servidor (ex: `


"start": "node server.js"`).

## Tarefa Prática do Dia: Preparando o Projeto para o Deploy

Para esta tarefa, vamos simular algumas preparações para o deploy no seu projeto Replit.

1.  **Instale o pacote `cors`:** No terminal do Replit, execute `npm install cors`.
2.  **Configure o CORS no seu `server.js`:**
    *   Importe o `cors` no início do arquivo: `const cors = require("cors");`
    *   Adicione o middleware `app.use(cors());` logo após a inicialização do `app = express();`.
    *   **Importante:** Para fins de desenvolvimento e teste no Replit, `app.use(cors());` (permitindo todas as origens) é aceitável. Em produção, você restringiria as origens.

3.  **Adicione um script `start` ao seu `package.json`:**
    *   Abra o arquivo `package.json`.
    *   Dentro da seção `

"scripts"`, adicione:

    ```json
    "start": "node server.js"
    ```
    Isso permitirá que plataformas de deploy saibam como iniciar seu servidor.

4.  **Simule o uso de variáveis de ambiente:**
    *   No seu `server.js`, altere a linha do `JWT_SECRET` para usar `process.env.JWT_SECRET`:
        ```javascript
        const JWT_SECRET = process.env.JWT_SECRET || "seu_segredo_muito_secreto";
        ```
    *   No Replit, você pode definir variáveis de ambiente na seção "Secrets" (geralmente um ícone de cadeado na barra lateral). Adicione uma nova variável chamada `JWT_SECRET` com o mesmo valor que você usou anteriormente.

5.  **Revise e teste:** Execute seu servidor novamente (`node server.js` ou `npm start` no terminal). Certifique-se de que tudo ainda funciona como esperado, especialmente a autenticação e as requisições do frontend.

## Exercícios de Revisão e Autoavaliação

*   Qual a principal diferença entre PaaS e IaaS (VPS/VMs) para deploy?
*   Por que é crucial usar variáveis de ambiente para informações sensíveis?
*   Para que serve o CORS e quando ele é necessário?
*   Se você quisesse que seu frontend fosse acessível em `https://meuapp.com` e seu backend em `https://api.meuapp.com`, como você configuraria o CORS no backend?

## Links para Materiais Complementares

*   [O que é Deploy? - Alura (artigo)](https://www.alura.com.br/artigos/o-que-e-deploy)
*   [Guia de Deploy para Node.js - DigitalOcean (em inglês)](https://www.digitalocean.com/community/tutorials/how-to-deploy-a-node-js-application-to-production-on-ubuntu-18-04)
*   [Documentação do pacote `cors` para Express.js (em inglês)](https://www.npmjs.com/package/cors)

## Orientações para Interação com a IA

*   **Descreva o ambiente de deploy:** Se você tiver uma plataforma específica em mente (ex: Render, Heroku), mencione-a para que a IA possa dar dicas mais específicas.
*   **Peça por configurações:** "Como configuro o CORS para permitir requisições do meu frontend em `https://meufrontend.com`?"

## Recomendações para Revisão e Testes

*   **Teste o CORS:** Se você configurar origens específicas, tente acessar seu frontend de uma origem não permitida para garantir que o CORS esteja funcionando corretamente.
*   **Verifique os logs:** Após o deploy, sempre verifique os logs do seu servidor na plataforma de hospedagem para identificar quaisquer erros ou problemas.

## Projeto Prático: Próximos Passos

Você está pronto para o deploy! Nos próximos módulos, vamos explorar ferramentas e plataformas específicas para o deploy do seu frontend e backend, e como gerenciar o projeto após ele estar online.

