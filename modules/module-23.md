# Módulo 23: Deploy do Backend - Plataformas como Serviço (PaaS)

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender o processo de deploy de aplicações backend usando Plataformas como Serviço (PaaS).
*   Utilizar uma plataforma PaaS (como Render ou Railway) para publicar seu backend Node.js.
*   Configurar variáveis de ambiente e banco de dados na plataforma de deploy.
*   Entender como conectar seu frontend implantado ao seu backend implantado.
*   Publicar o backend do seu projeto prático na internet.

## Conteúdo Teórico e Prático

### Deploy de Backends com PaaS

No Módulo 21, discutimos as vantagens das Plataformas como Serviço (PaaS) para o deploy de backends. Elas abstraem a complexidade de gerenciar servidores, sistemas operacionais e infraestrutura de rede, permitindo que você se concentre apenas no seu código. Você "empurra" seu código para a plataforma, e ela cuida do resto: provisionamento de servidores, instalação de dependências, execução do aplicativo e escalabilidade.

### Plataformas PaaS: Render e Railway

**Render** e **Railway** são exemplos populares de plataformas PaaS que são amigáveis para desenvolvedores e suportam Node.js e bancos de dados. Elas oferecem uma experiência de deploy simplificada, ideal para projetos como o nosso.

**Vantagens de usar Render/Railway:**

*   **Deploy Simplificado:** Conecte seu repositório Git, e a plataforma detecta o tipo de aplicação e faz o deploy.
*   **Gerenciamento de Variáveis de Ambiente:** Interface fácil para configurar variáveis de ambiente, mantendo suas credenciais seguras.
*   **Bancos de Dados Gerenciados:** Oferecem serviços de banco de dados (PostgreSQL, Redis, etc.) que são fáceis de provisionar e conectar ao seu backend.
*   **Escalabilidade:** Podem escalar sua aplicação automaticamente para lidar com mais tráfego.
*   **Logs e Monitoramento:** Ferramentas para visualizar logs e monitorar o desempenho da sua aplicação.

### Processo de Deploy (Exemplo com Render/Railway)

O processo geral de deploy de um backend Node.js com banco de dados SQLite (que usaremos para o deploy, embora SQLite não seja ideal para produção, é bom para aprendizado) em uma PaaS geralmente envolve:

1.  **Crie uma conta:** Acesse o site da plataforma (render.com ou railway.app) e crie uma conta, geralmente usando seu GitHub.
2.  **Crie um novo serviço:** Selecione a opção para criar um novo serviço (Web Service, para o backend).
3.  **Conecte seu repositório:** Conecte seu repositório GitHub onde está o código do seu backend (`server.js`, `package.json`, `knexfile.js`, etc.).
4.  **Configure o ambiente:**
    *   **Comando de Build:** Geralmente `npm install`.
    *   **Comando de Start:** O script `start` definido no seu `package.json` (ex: `npm start`).
    *   **Variáveis de Ambiente:** Adicione suas variáveis de ambiente (como `JWT_SECRET`).
    *   **Porta:** A plataforma geralmente expõe a porta 80 ou 443 e mapeia para a porta que seu aplicativo está escutando (ex: 3000). Certifique-se de que seu aplicativo Express.js escute na porta fornecida pela variável de ambiente `PORT` (ex: `process.env.PORT || 3000`).
5.  **Configure o Banco de Dados (se aplicável):**
    *   Para SQLite, como ele é baseado em arquivo, você precisaria de um sistema de arquivos persistente ou usar um banco de dados gerenciado pela plataforma (como PostgreSQL) e migrar seus dados para lá. Para simplificar, neste módulo, vamos focar no deploy do backend e assumir que o SQLite será recriado a cada deploy (o que não é ideal para produção, mas serve para o aprendizado do deploy).
    *   **Alternativa para produção:** Se você estivesse usando PostgreSQL, criaria um serviço de banco de dados PostgreSQL na plataforma e conectaria seu backend a ele usando uma string de conexão fornecida pela plataforma.
6.  **Deploy!** A plataforma fará o build e o deploy do seu backend, fornecendo uma URL pública.

### Conectando Frontend e Backend Implantados

Uma vez que seu frontend e backend estão implantados, você precisará atualizar o frontend para que ele faça requisições para a URL pública do seu backend, e não mais para `localhost:3000`.

1.  **Obtenha a URL do Backend:** Após o deploy do backend, a plataforma fornecerá uma URL pública (ex: `https://seu-backend.render.com`).
2.  **Atualize o Frontend:** No seu `script.js` do frontend, substitua todas as ocorrências de `http://localhost:3000` pela URL pública do seu backend.
3.  **Redeploy do Frontend:** Faça um novo deploy do seu frontend (basta um `git push` se você configurou CI/CD) para que as mudanças na URL do backend sejam aplicadas.

## Tarefa Prática do Dia: Publicando seu Backend

Vamos publicar o backend do seu projeto prático usando uma plataforma PaaS. Escolha uma (Render ou Railway) e siga os passos.

1.  **Certifique-se de que seu código backend está em um repositório GitHub separado** (ou em uma pasta separada no mesmo repositório, se a plataforma suportar). Se você usou o mesmo repositório para frontend e backend no Replit, pode ser necessário criar um novo repositório apenas para o backend ou configurar a plataforma para implantar uma subpasta.

2.  **Escolha uma plataforma de deploy (Render ou Railway) e crie uma conta:**
    *   Acesse [render.com](https://render.com/) ou [railway.app](https://railway.app/).
    *   Siga as instruções para criar uma conta e conectar seu GitHub.

3.  **Crie um novo Web Service (para o backend):**
    *   Na plataforma, selecione a opção para criar um novo Web Service.
    *   Conecte seu repositório GitHub que contém o código do backend.

4.  **Configure o deploy:**
    *   **Build Command:** `npm install`
    *   **Start Command:** `npm start` (certifique-se de que seu `package.json` tem `


"start": "node server.js"`)
    *   **Environment Variables:** Adicione `JWT_SECRET` e qualquer outra variável de ambiente que seu backend precise. Se você estiver usando SQLite, não precisará de variáveis de ambiente de banco de dados por enquanto, mas se fosse um PostgreSQL, adicionaria a string de conexão aqui.
    *   **Port:** Certifique-se de que seu `server.js` escuta em `process.env.PORT || 3000` para que a plataforma possa atribuir uma porta dinâmica.

5.  **Deploy!** A plataforma fará o build e o deploy do seu backend, fornecendo uma URL pública.

6.  **Atualize seu Frontend:**
    *   Copie a URL pública do seu backend (ex: `https://seu-backend.render.com`).
    *   No seu `script.js` do frontend, substitua todas as referências a `http://localhost:3000` por esta nova URL.
    *   Faça um `git push` para o repositório do seu frontend para que a plataforma de hospedagem estática (Netlify/Vercel) faça um novo deploy com a URL atualizada.

7.  **Teste a Aplicação Completa:** Acesse a URL do seu frontend implantado e teste todas as funcionalidades (login, adicionar/deletar tarefas). Agora, seu frontend está se comunicando com seu backend implantado!

## Exercícios de Revisão e Autoavaliação

*   Qual a principal vantagem de usar uma PaaS para o deploy do seu backend?
*   Como você garantiria que seu backend Express.js escute na porta correta em um ambiente PaaS?
*   Descreva o processo de atualização da URL do backend no frontend após o deploy do backend.
*   Quais são os desafios de usar SQLite em um ambiente de produção PaaS?

## Links para Materiais Complementares

*   [Render Docs - Deploy a Node.js App (em inglês)](https://render.com/docs/deploy-node-express-app)
*   [Railway Docs - Deploy Node.js (em inglês)](https://docs.railway.app/deploy/guides/nodejs)

## Orientações para Interação com a IA

*   **Problemas de Deploy:** Se você encontrar erros durante o deploy, copie os logs da plataforma e peça ajuda à IA para depurar.
*   **Configuração de Banco de Dados:** Se você decidir usar um banco de dados gerenciado pela plataforma, peça à IA para ajudar a configurar a string de conexão no seu `knexfile.js`.

## Recomendações para Revisão e Testes

*   **Logs da Plataforma:** Sempre monitore os logs da sua aplicação na plataforma de deploy. Eles são cruciais para identificar e resolver problemas.
*   **Testes End-to-End:** Após o deploy completo, realize testes de ponta a ponta para garantir que todas as partes da sua aplicação (frontend, backend, banco de dados) estão se comunicando corretamente.

## Projeto Prático: Próximos Passos

Parabéns! Seu produto digital está agora totalmente implantado e acessível na internet! Nos próximos módulos, vamos focar em como manter sua aplicação, monitorar seu desempenho e adicionar novas funcionalidades de forma contínua.

