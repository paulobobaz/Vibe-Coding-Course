# Módulo 26: Manutenção, Atualizações e Backups

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender a importância da manutenção contínua de uma aplicação em produção.
*   Entender as estratégias para aplicar atualizações de código e dependências.
*   Implementar uma rotina de backup para o banco de dados do seu projeto.
*   Lidar com a evolução do seu produto digital após o deploy.

## Conteúdo Teórico e Prático

### A Importância da Manutenção Pós-Deploy

O deploy não é o fim do ciclo de vida de um produto digital; é apenas o começo. Uma aplicação em produção requer manutenção contínua para garantir sua segurança, desempenho e funcionalidade. Isso inclui:

*   **Correção de Bugs:** Identificar e corrigir falhas que surgem após o deploy.
*   **Atualizações de Segurança:** Manter as dependências e o sistema operacional atualizados para proteger contra vulnerabilidades.
*   **Otimização de Desempenho:** Continuar monitorando e otimizando a aplicação conforme o uso cresce.
*   **Adição de Novas Funcionalidades:** Evoluir o produto com base no feedback dos usuários e nas necessidades do negócio.
*   **Gerenciamento de Infraestrutura:** Garantir que os servidores e bancos de dados estejam funcionando corretamente.

### Estratégias de Atualização

Atualizar uma aplicação em produção requer cuidado para evitar interrupções no serviço. Algumas estratégias:

*   **Atualizações de Código:**
    *   **CI/CD:** Como vimos, o uso de Integração Contínua e Entrega Contínua (CI/CD) automatiza o processo de build e deploy de novas versões do seu código. Isso minimiza erros manuais e acelera as entregas.
    *   **Versionamento:** Use sistemas de controle de versão (Git) e versionamento semântico (ex: `1.0.0`, `1.0.1`, `2.0.0`) para gerenciar as mudanças no seu código.
    *   **Testes:** Antes de implantar novas versões, execute testes rigorosos (unitários, de integração, de ponta a ponta) para garantir que as mudanças não introduzam novos bugs.

*   **Atualizações de Dependências:**
    *   Bibliotecas e frameworks que você usa (Express.js, Knex.js, etc.) recebem atualizações constantes. É importante mantê-los atualizados para ter acesso a novos recursos, melhorias de desempenho e, crucialmente, correções de segurança.
    *   Use `npm outdated` para verificar dependências desatualizadas.
    *   Use `npm update` para atualizar dependências para versões compatíveis.
    *   Use `npm audit` para verificar vulnerabilidades de segurança nas suas dependências.

### Backups de Banco de Dados

O banco de dados é o coração da sua aplicação. Perder dados pode ser catastrófico. Por isso, uma rotina de backup robusta é essencial.

**Tipos de Backup:**

*   **Backup Completo:** Uma cópia completa de todo o banco de dados.
*   **Backup Incremental:** Copia apenas os dados que foram alterados desde o último backup (completo ou incremental).
*   **Backup Diferencial:** Copia os dados que foram alterados desde o último backup completo.

**Estratégias de Backup:**

*   **Frequência:** Defina a frequência dos backups (diário, semanal, horário) com base na criticidade dos seus dados e na frequência das mudanças.
*   **Armazenamento:** Armazene os backups em um local seguro e diferente do servidor principal (ex: armazenamento em nuvem, outro datacenter).
*   **Testes de Restauração:** Periodicamente, teste a restauração dos seus backups para garantir que eles são válidos e podem ser usados em caso de desastre.

**Para SQLite:** Como o SQLite armazena o banco de dados em um único arquivo (`.sqlite3`), o backup é tão simples quanto copiar esse arquivo. No entanto, certifique-se de que o banco de dados não esteja sendo escrito ativamente durante a cópia para evitar corrupção.

### Monitoramento Contínuo

Como vimos no Módulo 24, o monitoramento é crucial para identificar problemas rapidamente. Configure alertas para quando o uso de recursos atingir limites, erros aumentarem ou a aplicação ficar indisponível.

## Tarefa Prática do Dia: Implementando um Backup Simples

Vamos simular uma rotina de backup para o seu banco de dados SQLite.

1.  **Crie um script de backup:** No seu projeto backend, crie um novo arquivo chamado `backup.js`.
2.  Com o assistente de IA ativado, peça para ele:

    ```javascript
    // 1. Escreva um script Node.js que copie o arquivo do banco de dados SQLite (dev.sqlite3) para uma pasta de backups.
    // 2. O nome do arquivo de backup deve incluir a data e hora atuais (ex: backup-2025-07-04-10-30-00.sqlite3).
    // 3. Use o módulo `fs` do Node.js para operações de arquivo.
    // 4. Adicione um console.log para indicar que o backup foi concluído com sucesso.
    ```

3.  Revise o código gerado pela IA e aceite-o.
4.  **Adicione um script npm para o backup:** No seu `package.json`, adicione um novo script na seção `scripts`:

    ```json
    "backup": "node backup.js"
    ```

5.  **Execute o backup:** No terminal do Replit, execute `npm run backup`.
6.  Verifique se o arquivo de backup foi criado na pasta correta com o nome esperado.

## Exercícios de Revisão e Autoavaliação

*   Por que a manutenção contínua é tão importante quanto o desenvolvimento inicial?
*   Qual a diferença entre `npm update` e `npm install`?
*   Descreva os passos para restaurar seu banco de dados a partir de um backup.
*   Quais são os riscos de não ter uma rotina de backup para o seu banco de dados?

## Links para Materiais Complementares

*   [Estratégias de Backup de Banco de Dados (em inglês)](https://www.ibm.com/cloud/blog/database-backup-strategies)
*   [Gerenciamento de Dependências com npm (em inglês)](https://docs.npmjs.com/cli/v10/commands/npm-update)

## Orientações para Interação com a IA

*   **Descreva a operação de arquivo:** Seja claro sobre o que você quer copiar, para onde e com que nome.
*   **Peça por automação:** "Como posso agendar este script de backup para rodar todos os dias à meia-noite?" (Isso envolveria ferramentas externas como cron jobs, que podem ser pesquisadas em módulos futuros).

## Recomendações para Revisão e Testes

*   **Teste o script de backup:** Execute-o várias vezes para garantir que ele funciona consistentemente.
*   **Simule uma perda de dados:** Para ter certeza de que seu backup funciona, tente deletar seu arquivo `dev.sqlite3` e restaurá-lo a partir do backup.

## Projeto Prático: Próximos Passos

Você agora tem uma base sólida para manter seu produto digital em produção. Nos próximos módulos, vamos explorar a coleta de feedback de usuários, a iteração de funcionalidades e como continuar aprendendo e crescendo como desenvolvedor.

