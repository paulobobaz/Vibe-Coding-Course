# Módulo 24: Monitoramento e Logs

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender a importância do monitoramento e dos logs em aplicações em produção.
*   Configurar o log de eventos no seu backend Node.js.
*   Utilizar ferramentas de monitoramento básicas para acompanhar a saúde da sua aplicação.
*   Identificar e depurar problemas usando logs e métricas.
*   Implementar um sistema de logs simples no seu projeto prático.

## Conteúdo Teórico e Prático

### Por que Monitorar e Registrar Logs?

Uma vez que sua aplicação está em produção, ela está sujeita a uma série de fatores externos: tráfego de usuários, erros inesperados, problemas de rede, etc. Sem monitoramento e logs adequados, é impossível saber o que está acontecendo com sua aplicação, identificar gargalos de desempenho ou depurar problemas quando eles surgem.

*   **Logs:** São registros de eventos que ocorrem na sua aplicação (ex: requisições recebidas, erros, operações de banco de dados). Eles são cruciais para depuração e auditoria.
*   **Monitoramento:** Envolve a coleta e análise de métricas (ex: uso de CPU, memória, tempo de resposta, número de erros) para entender o desempenho e a saúde geral da sua aplicação em tempo real.

### Tipos de Logs

*   **Logs de Aplicação:** Gerados pelo seu próprio código para registrar eventos específicos (ex: `console.log`, logs de erro).
*   **Logs de Servidor Web:** Gerados pelo servidor web (Nginx, Apache) ou pelo servidor de aplicação (Express.js) para registrar requisições HTTP.
*   **Logs de Banco de Dados:** Registram operações no banco de dados.

### Níveis de Log

É uma boa prática categorizar seus logs por nível de severidade:

*   **DEBUG:** Informações detalhadas, úteis apenas para depuração.
*   **INFO:** Informações gerais sobre o fluxo da aplicação (ex: "Usuário logado").
*   **WARN:** Avisos sobre situações potencialmente problemáticas, mas que não impedem a execução (ex: "Parâmetro ausente").
*   **ERROR:** Erros que impedem uma operação específica de ser concluída (ex: "Falha ao conectar ao banco de dados").
*   **FATAL:** Erros críticos que causam a interrupção da aplicação.

### Ferramentas de Logging para Node.js

Embora `console.log()` seja útil para desenvolvimento, em produção é melhor usar bibliotecas de logging mais robustas que permitem configurar níveis de log, formatar saídas e enviar logs para arquivos ou serviços externos.

**Winston** e **Pino** são bibliotecas populares para logging em Node.js.

**Exemplo básico com Winston:**

```bash
npm install winston
```

```javascript
// logger.js
const winston = require("winston");

const logger = winston.createLogger({
    level: "info", // Nível mínimo de log a ser exibido
    format: winston.format.json(), // Formato JSON para logs
    transports: [
        new winston.transports.Console(), // Exibe logs no console
        new winston.transports.File({ filename: "error.log", level: "error" }), // Salva erros em arquivo
        new winston.transports.File({ filename: "combined.log" }) // Salva todos os logs em outro arquivo
    ]
});

module.exports = logger;
```

No seu `server.js`:

```javascript
const logger = require("./logger");

app.get("/", (req, res) => {
    logger.info("Requisição GET recebida na rota raiz.");
    res.send("Olá!");
});

app.post("/api/data", (req, res) => {
    try {
        // ... processar dados ...
        logger.info("Dados processados com sucesso.", { data: req.body });
        res.status(200).send("OK");
    } catch (error) {
        logger.error("Erro ao processar dados:", error); // Loga o erro
        res.status(500).send("Erro interno do servidor");
    }
});
```

### Ferramentas de Monitoramento

Plataformas PaaS (Render, Railway) geralmente oferecem dashboards básicos para monitorar o uso de recursos (CPU, memória) e visualizar logs. Para monitoramento mais avançado, existem ferramentas dedicadas:

*   **APM (Application Performance Monitoring):** Ferramentas que coletam métricas detalhadas sobre o desempenho da sua aplicação (tempo de resposta, erros, transações de banco de dados).
    *   Exemplos: New Relic, Datadog, Sentry (para rastreamento de erros).
*   **Ferramentas de Log Aggregation:** Coletam logs de várias fontes e os centralizam para facilitar a busca e análise.
    *   Exemplos: ELK Stack (Elasticsearch, Logstash, Kibana), Splunk, Loggly.

## Tarefa Prática do Dia: Implementando Logs no Backend

Vamos integrar a biblioteca Winston ao seu backend para um logging mais estruturado.

1.  **Instale Winston:** No terminal do Replit (ou seu ambiente de desenvolvimento), execute `npm install winston`.

2.  **Crie um arquivo `logger.js`:** Na raiz do seu projeto backend, crie um arquivo `logger.js` com o conteúdo do exemplo acima.

3.  **Integre o logger no `server.js`:**
    *   No seu `server.js`, importe o logger: `const logger = require("./logger");`
    *   Substitua todos os `console.log()` por chamadas ao `logger` apropriadas (`logger.info()`, `logger.error()`).
    *   Adicione logs em pontos chave:
        *   Quando o servidor iniciar.
        *   Quando uma requisição for recebida em uma rota importante (ex: `/api/tasks`).
        *   Quando uma tarefa for criada, atualizada ou deletada com sucesso.
        *   Em todos os blocos `catch` para registrar erros.

4.  **Teste os logs:**
    *   Execute seu servidor (`node server.js`).
    *   Faça algumas requisições do frontend (login, criar tarefa, deletar).
    *   Verifique o terminal do Replit para ver os logs. Se você configurou para salvar em arquivos, verifique os arquivos `error.log` e `combined.log` que serão criados.

## Exercícios de Revisão e Autoavaliação

*   Qual a diferença entre logs e monitoramento?
*   Cite três níveis de log e quando você os usaria.
*   Por que `console.log()` não é ideal para produção?
*   Como você usaria os logs para depurar um erro de autenticação na sua API?

## Links para Materiais Complementares

*   [Logging em Node.js com Winston (em inglês)](https://www.digitalocean.com/community/tutorials/how-to-implement-logging-in-node-js-with-winston)
*   [Introdução ao Monitoramento de Aplicações (em inglês)](https://www.datadoghq.com/blog/application-monitoring-guide/)

## Orientações para Interação com a IA

*   **Peça para adicionar logs:** "Adicione logs de info para cada requisição recebida na rota X" ou "Adicione logs de erro para o bloco catch Y".
*   **Pergunte sobre melhores práticas:** "Quais são as melhores práticas para logging em produção com Node.js?"

## Recomendações para Revisão e Testes

*   **Não logue dados sensíveis:** Nunca logue senhas, tokens JWT completos ou outras informações sensíveis diretamente nos logs.
*   **Logs em JSON:** Para logs que serão processados por ferramentas de agregação, o formato JSON é geralmente o mais recomendado.

## Projeto Prático: Próximos Passos

Com monitoramento e logs, você tem visibilidade sobre o que está acontecendo com sua aplicação em produção. Nos próximos módulos, vamos explorar a otimização de desempenho e a escalabilidade, garantindo que seu produto digital possa lidar com um número crescente de usuários.

