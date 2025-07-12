# Módulo 15: Integrando Banco de Dados ao Backend - SQLite e Knex.js

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender como conectar um banco de dados ao seu backend Node.js.
*   Utilizar o SQLite como um banco de dados leve para desenvolvimento.
*   Aprender a usar um Query Builder (Knex.js) para interagir com o banco de dados sem escrever SQL puro.
*   Implementar operações CRUD na sua API usando o banco de dados.
*   Migrar a persistência de dados do seu projeto prático para o SQLite.

## Conteúdo Teórico e Prático

### Conectando o Backend ao Banco de Dados

Até agora, nossa API de tarefas armazenava dados em memória. Para que os dados sejam persistentes (não se percam ao reiniciar o servidor), precisamos conectá-la a um banco de dados. O processo envolve:

1.  **Escolher um banco de dados:** Para este curso, usaremos o SQLite, que é um banco de dados embutido, leve e não requer um servidor separado, sendo ideal para desenvolvimento e aprendizado.
2.  **Instalar um driver/biblioteca:** Para que o Node.js possa "falar" com o banco de dados, precisamos de uma biblioteca que faça essa ponte. Para SQLite, usaremos `sqlite3`.
3.  **Usar um Query Builder ou ORM:** Embora possamos escrever SQL puro, ferramentas como Query Builders (ex: Knex.js) ou ORMs (Object-Relational Mappers, ex: Sequelize, TypeORM) simplificam a interação com o banco de dados, permitindo escrever consultas em JavaScript e tornando o código mais legível e menos propenso a erros de SQL.

### SQLite: Um Banco de Dados Leve

**SQLite** é um sistema de gerenciamento de banco de dados relacional que é embutido em um aplicativo, o que significa que ele não precisa de um processo de servidor separado para operar. Ele armazena o banco de dados em um único arquivo no disco. É perfeito para aplicações pequenas a médias, desenvolvimento local e testes.

### Knex.js: Um Query Builder Poderoso

**Knex.js** é um "query builder" (construtor de consultas) SQL para JavaScript. Ele permite que você construa consultas SQL de forma programática usando métodos JavaScript, o que é mais seguro (previne SQL injection) e mais fácil de ler e manter do que concatenar strings SQL. Knex.js suporta vários bancos de dados, incluindo PostgreSQL, MySQL, SQLite3, Oracle, e MSSQL.

**Instalação do Knex.js e SQLite3:**

No terminal do Replit, execute:

```bash
npm install knex sqlite3
```

### Configurando o Knex.js

Você precisará de um arquivo de configuração para o Knex.js, geralmente chamado `knexfile.js`.

```javascript
// knexfile.js
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3' // Nome do arquivo do banco de dados
    },
    useNullAsDefault: true, // Necessário para SQLite
    migrations: {
      directory: './db/migrations' // Onde suas migrações ficarão
    },
    seeds: {
      directory: './db/seeds' // Onde seus seeds ficarão
    }
  }
};
```

### Migrações (Migrations)

Migrações são arquivos que contêm instruções para criar, modificar ou excluir tabelas no seu banco de dados. Elas permitem que você gerencie o esquema do seu banco de dados de forma versionada e colaborativa.

**Exemplo de migração para criar a tabela `tasks`:**

```javascript
// db/migrations/YYYYMMDDHHMMSS_create_tasks_table.js
exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments('id').primary(); // ID auto-incrementável, chave primária
    table.string('title').notNullable(); // Coluna para o título da tarefa
    table.boolean('completed').defaultTo(false); // Coluna para o status de conclusão
    table.timestamps(true, true); // created_at e updated_at
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks'); // Reverte a migração
};
```

Para executar as migrações, você usaria um comando Knex CLI (que pode ser configurado no `package.json`):

```json
// package.json scripts
"scripts": {
  "migrate:latest": "knex migrate:latest --knexfile knexfile.js",
  "migrate:rollback": "knex migrate:rollback --knexfile knexfile.js"
}
```

### Operações CRUD com Knex.js

Uma vez configurado, você pode usar o Knex.js no seu `server.js` para interagir com o banco de dados:

```javascript
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig.development);

// Inserir dados
async function createTask(title) {
  const [id] = await knex('tasks').insert({ title: title });
  return knex('tasks').where({ id }).first();
}

// Selecionar todos os dados
async function getAllTasks() {
  return knex('tasks').select('*');
}

// Selecionar por ID
async function getTaskById(id) {
  return knex('tasks').where({ id }).first();
}

// Atualizar dados
async function updateTask(id, updates) {
  await knex('tasks').where({ id }).update(updates);
  return knex('tasks').where({ id }).first();
}

// Deletar dados
async function deleteTask(id) {
  return knex('tasks').where({ id }).del();
}
```

## Tarefa Prática do Dia: Migrando a API de Tarefas para o Banco de Dados

Vamos refatorar sua API de tarefas para usar o SQLite com Knex.js.

1.  No seu projeto Replit, crie uma pasta `db` e dentro dela uma pasta `migrations`.
2.  Crie o arquivo `knexfile.js` na raiz do seu projeto com o conteúdo de configuração acima.
3.  No terminal do Replit, peça para a IA:

    ```bash
    # Crie um script npm no package.json para executar migrações com knex.
    # O script deve ser chamado 'migrate:latest' e deve rodar 'knex migrate:latest --knexfile knexfile.js'.
    # Em seguida, execute este script para criar a tabela de tarefas.
    ```

4.  A IA irá gerar o script e você o executará. Isso criará o arquivo `dev.sqlite3` e a tabela `tasks`.
5.  No seu `server.js`, com o assistente de IA ativado, peça para ele:

    ```javascript
    // 1. Importe o knex e a configuração do knexfile.js.
    // 2. Substitua o array `let tasks = [];` pelas funções assíncronas de CRUD (createTask, getAllTasks, getTaskById, updateTask, deleteTask) usando o knex.
    // 3. Modifique as rotas GET, POST, PUT, DELETE para usar essas novas funções de banco de dados em vez de manipular o array em memória.
    //    - Lembre-se de usar `async/await` nas funções de rota para lidar com as Promises retornadas pelo knex.
    ```

6.  Revise o código gerado pela IA e aceite-o.
7.  Execute o servidor (`node server.js`).
8.  **Teste sua API novamente:** Use Postman/Insomnia ou o frontend que você criou. Agora, os dados devem persistir mesmo se você reiniciar o servidor!

## Exercícios de Revisão e Autoavaliação

*   Qual a vantagem de usar um banco de dados como o SQLite em vez de armazenar dados em memória?
*   Para que serve um Query Builder como o Knex.js?
*   Explique o conceito de migrações de banco de dados.
*   Como você garantiria que uma nova tarefa criada no frontend seja salva no banco de dados?

## Links para Materiais Complementares

*   [SQLite Tutorial - SQLitetutorial.net (em inglês)](https://www.sqlitetutorial.net/)
*   [Knex.js Documentation (em inglês)](https://knexjs.org/)

## Orientações para Interação com a IA

*   **Seja específico sobre as operações:** Ao pedir funções de banco de dados, diga se é para criar, ler, atualizar ou deletar.
*   **Mencione o Query Builder:** Diga que você quer usar Knex.js para as operações.

## Recomendações para Revisão e Testes

*   **Verifique o arquivo `.sqlite3`:** Você pode usar ferramentas como o DB Browser for SQLite para abrir o arquivo `dev.sqlite3` e inspecionar os dados diretamente.
*   **Teste cenários de erro:** O que acontece se você tentar atualizar uma tarefa que não existe? Sua API deve retornar um status 404.

## Projeto Prático: Próximos Passos

Com o banco de dados integrado, seu produto digital agora tem persistência de dados! Nos próximos módulos, vamos aprofundar em conceitos de segurança, como autenticação e autorização, e preparar sua aplicação para o deploy.

