# Módulo 22: Deploy do Frontend - Hospedagem Estática

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender o processo de deploy de aplicações frontend estáticas.
*   Utilizar uma plataforma de hospedagem estática (como Netlify ou Vercel) para publicar seu frontend.
*   Conectar seu repositório de código (GitHub) à plataforma de deploy.
*   Entender o conceito de CI/CD (Integração Contínua/Entrega Contínua) para o frontend.
*   Publicar o frontend do seu projeto prático na internet.

## Conteúdo Teórico e Prático

### Deploy de Aplicações Frontend Estáticas

Aplicações frontend construídas com HTML, CSS e JavaScript puro (como a nossa) são consideradas estáticas porque não precisam de um servidor para processar a lógica da página antes de enviá-la ao navegador. Elas são apenas um conjunto de arquivos que o navegador pode interpretar diretamente.

Isso torna o deploy de frontends estáticos muito mais simples e rápido. Existem diversas plataformas que se especializam em hospedar esses tipos de aplicações, oferecendo CDN (Content Delivery Network) para entrega rápida de conteúdo e integração com repositórios de código.

### Plataformas de Hospedagem Estática: Netlify e Vercel

**Netlify** e **Vercel** são duas das plataformas mais populares para deploy de frontends estáticos. Elas oferecem uma experiência de desenvolvedor excelente, com integração contínua, deploy automático a partir do Git, e gerenciamento de domínios personalizados.

**Vantagens de usar Netlify/Vercel:**

*   **Deploy Automático:** Conecte seu repositório GitHub (ou GitLab, Bitbucket), e a cada `push` para a branch principal, um novo deploy é feito automaticamente.
*   **CDNs Globais:** Seu site é distribuído em servidores ao redor do mundo, garantindo carregamento rápido para usuários em qualquer lugar.
*   **HTTPS Gratuito:** Certificados SSL/TLS são provisionados automaticamente, garantindo que seu site seja seguro.
*   **Domínios Personalizados:** Fácil de configurar seu próprio domínio.
*   **Funções Serverless:** Embora nosso foco seja estático, ambas as plataformas oferecem funções serverless para adicionar lógica de backend leve, se necessário.

### CI/CD para Frontend

**CI/CD** (Continuous Integration/Continuous Delivery ou Continuous Deployment) é um conjunto de práticas que automatizam as etapas de desenvolvimento de software. Para o frontend, isso significa:

*   **Integração Contínua (CI):** Cada vez que você faz uma alteração no código e a envia para o repositório (ex: GitHub), testes automatizados são executados para garantir que as novas mudanças não quebrem o código existente.
*   **Entrega Contínua (CD):** Após os testes passarem, o código é automaticamente construído e preparado para o deploy.
*   **Deploy Contínuo (CD):** O código é automaticamente implantado em produção, tornando as novas funcionalidades disponíveis para os usuários.

Netlify e Vercel implementam um fluxo de CI/CD simplificado, onde cada `push` para a branch principal (ex: `main` ou `master`) dispara um novo deploy.

### Processo de Deploy (Exemplo com Netlify/Vercel)

O processo geral é muito similar para ambas as plataformas:

1.  **Crie uma conta:** Acesse o site da plataforma (netlify.com ou vercel.com) e crie uma conta, geralmente usando seu GitHub.
2.  **Importe seu projeto:** Conecte seu repositório GitHub (onde seu código frontend está).
3.  **Configure as opções de build:** Para um projeto HTML/CSS/JS puro, geralmente não há um "build step" complexo. Você apenas aponta para a pasta raiz do seu projeto.
4.  **Deploy!** A plataforma detectará seu projeto e fará o primeiro deploy automaticamente, fornecendo uma URL pública.

## Tarefa Prática do Dia: Publicando seu Frontend

Vamos publicar o frontend do seu projeto prático usando uma dessas plataformas. Escolha uma (Netlify ou Vercel) e siga os passos.

1.  **Crie um repositório GitHub para o seu frontend:**
    *   No Replit, você pode integrar seu projeto com o GitHub. Procure pela opção "Version Control" ou "Git" na barra lateral.
    *   Crie um novo repositório GitHub e envie todo o código do seu frontend (HTML, CSS, JavaScript) para lá.
    *   **Importante:** Certifique-se de que o `index.html` esteja na raiz do repositório ou em uma pasta que você possa especificar como a pasta de publicação.

2.  **Escolha uma plataforma de deploy (Netlify ou Vercel) e crie uma conta:**
    *   Acesse [netlify.com](https://www.netlify.com/) ou [vercel.com](https://vercel.com/).
    *   Siga as instruções para criar uma conta e conectar seu GitHub.

3.  **Importe seu projeto:**
    *   Na plataforma, procure pela opção para "Importar um novo projeto" ou "Adicionar novo site".
    *   Selecione seu repositório GitHub que contém o código do frontend.

4.  **Configure o deploy:**
    *   A plataforma geralmente detectará automaticamente que é um projeto HTML/CSS/JS. Se perguntar sobre a pasta de build ou o comando de build, você pode deixar em branco ou apontar para a raiz do seu projeto (`.`).
    *   Clique em "Deploy" ou "Deploy Project".

5.  **Acesse seu site:** Após alguns segundos ou minutos, seu site estará online e você receberá uma URL pública. Acesse-a no navegador!

6.  **Teste a integração contínua:** Faça uma pequena alteração no seu `index.html` (ex: mude o título `<h1>`), salve, e faça um `git push` para o seu repositório GitHub. Observe como a plataforma de deploy detecta a mudança e faz um novo deploy automaticamente.

## Exercícios de Revisão e Autoavaliação

*   Qual a principal vantagem de usar uma plataforma de hospedagem estática para seu frontend?
*   Explique o conceito de CI/CD no contexto do deploy de frontend.
*   Se você fizesse uma alteração no seu `script.js` e enviasse para o GitHub, o que aconteceria na plataforma de deploy?
*   Quais são os benefícios de usar um CDN para entregar seu conteúdo estático?

## Links para Materiais Complementares

*   [Netlify Docs - Get Started (em inglês)](https://docs.netlify.com/get-started/)
*   [Vercel Docs - Quickstart (em inglês)](https://vercel.com/docs/quickstart)
*   [O que é CI/CD? - Red Hat (em português)](https://www.redhat.com/pt-br/topics/devops/what-is-ci-cd)

## Orientações para Interação com a IA

*   **Peça por comandos Git:** Se precisar de ajuda com comandos Git para enviar seu código para o GitHub, peça à IA.
*   **Dúvidas sobre a plataforma:** Se tiver dúvidas específicas sobre a interface do Netlify ou Vercel, descreva o que você está vendo e peça orientação.

## Recomendações para Revisão e Testes

*   **Verifique a URL:** Certifique-se de que a URL gerada pela plataforma está funcionando e exibindo seu site corretamente.
*   **Inspecione o código fonte:** No navegador, clique com o botão direito e selecione "Ver código fonte da página" para garantir que seus arquivos HTML, CSS e JS foram carregados.

## Projeto Prático: Próximos Passos

Seu frontend está online! Agora, qualquer pessoa pode acessá-lo. Nos próximos módulos, vamos fazer o deploy do seu backend, conectar os dois ambientes e, finalmente, ter seu produto digital completo e acessível globalmente.

