# Módulo 14: Introdução a Bancos de Dados - Conceitos e SQL

**Tempo Estimado:** 1,5 - 2 horas

## Objetivos do Dia

Ao final deste módulo, você será capaz de:

*   Compreender o que é um banco de dados e por que ele é essencial para aplicações web.
*   Diferenciar entre bancos de dados relacionais e não relacionais (NoSQL).
*   Entender os conceitos básicos de tabelas, colunas, linhas e chaves primárias.
*   Escrever consultas SQL básicas para criar, ler, atualizar e deletar dados.
*   Preparar o terreno para integrar um banco de dados ao seu projeto prático.

## Conteúdo Teórico e Prático

### Por que Precisamos de Bancos de Dados?

Até agora, os dados do nosso backend (as tarefas) estão sendo armazenados em memória. Isso significa que, toda vez que o servidor é reiniciado, todos os dados são perdidos. Para que uma aplicação seja útil e persistente, ela precisa de um lugar para armazenar dados de forma duradoura. É aí que entram os **bancos de dados**.

Um banco de dados é um sistema organizado para armazenar, gerenciar e recuperar grandes quantidades de informações de forma eficiente e segura. Eles são a espinha dorsal de quase todas as aplicações web modernas.

### Tipos de Bancos de Dados

Existem dois tipos principais de bancos de dados:

1.  **Bancos de Dados Relacionais (SQL)**:
    *   Organizam os dados em tabelas, que possuem colunas (atributos) e linhas (registros).
    *   As tabelas são relacionadas entre si através de chaves (primárias e estrangeiras).
    *   Usam a linguagem SQL (Structured Query Language) para interagir com os dados.
    *   Exemplos: MySQL, PostgreSQL, SQLite, SQL Server, Oracle.
    *   **Vantagens:** Integridade de dados, transações ACID (Atomicidade, Consistência, Isolamento, Durabilidade), bem estabelecidos.
    *   **Desvantagens:** Menos flexíveis para dados não estruturados, escalabilidade vertical (geralmente).

2.  **Bancos de Dados Não Relacionais (NoSQL)**:
    *   Oferecem modelos de dados mais flexíveis, não usando tabelas tradicionais.
    *   São otimizados para diferentes tipos de dados e necessidades de escalabilidade.
    *   Exemplos: MongoDB (documento), Cassandra (coluna larga), Redis (chave-valor), Neo4j (grafo).
    *   **Vantagens:** Escalabilidade horizontal, flexibilidade de esquema, bom para grandes volumes de dados não estruturados.
    *   **Desvantagens:** Menos consistência de dados (eventual), menos ferramentas e maturidade em alguns casos.

Neste curso, focaremos em bancos de dados relacionais e SQL, pois são um excelente ponto de partida para entender os conceitos fundamentais de persistência de dados.

### Conceitos Básicos de Bancos de Dados Relacionais

*   **Tabela:** Uma coleção de dados relacionados, organizada em linhas e colunas. Pense em uma planilha.
*   **Coluna (Campo/Atributo):** Representa uma categoria de dados em uma tabela (ex: `nome`, `idade`, `email`).
*   **Linha (Registro/Tupla):** Representa uma única entrada de dados em uma tabela (ex: um usuário específico).
*   **Chave Primária (Primary Key - PK):** Uma coluna (ou conjunto de colunas) que identifica unicamente cada linha em uma tabela. Não pode ter valores duplicados ou nulos. (Ex: `id` de um usuário).
*   **Chave Estrangeira (Foreign Key - FK):** Uma coluna em uma tabela que se refere à chave primária de outra tabela. Usada para estabelecer relacionamentos entre tabelas.

### SQL Básico (Structured Query Language)

SQL é a linguagem padrão para gerenciar e manipular bancos de dados relacionais. Vamos ver as operações CRUD em SQL:

*   **CREATE (Criar Tabela):**
    ```sql
    CREATE TABLE usuarios (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE
    );
    ```

*   **INSERT (Inserir Dados):**
    ```sql
    INSERT INTO usuarios (nome, email) VALUES (
        'João Silva', 'joao@example.com'
    );
    ```

*   **SELECT (Ler Dados):**
    ```sql
    SELECT * FROM usuarios; -- Seleciona todas as colunas de todas as linhas
    SELECT nome, email FROM usuarios WHERE id = 1; -- Seleciona nome e email do usuário com id 1
    ```

*   **UPDATE (Atualizar Dados):**
    ```sql
    UPDATE usuarios SET email = 'joao.silva@example.com' WHERE id = 1;
    ```

*   **DELETE (Deletar Dados):**
    ```sql
    DELETE FROM usuarios WHERE id = 1;
    ```

## Tarefa Prática do Dia: Modelando Dados e Escrevendo SQL

Para esta tarefa, você não precisará de um banco de dados real ainda, mas usará a IA para praticar a modelagem de dados e a escrita de consultas SQL.

1.  **Cenário:** Você está construindo um sistema para gerenciar livros. Cada livro tem um título, autor, ano de publicação e um gênero. Autores também têm um nome e uma biografia.

2.  Com o assistente de IA ativado, peça para ele:

    ```sql
    -- 1. Crie uma tabela chamada 'autores' com as colunas: id (chave primária, auto-incremento), nome (texto, não nulo), biografia (texto).
    -- 2. Crie uma tabela chamada 'livros' com as colunas: id (chave primária, auto-incremento), titulo (texto, não nulo), ano_publicacao (inteiro), genero (texto).
    -- 3. Adicione uma chave estrangeira na tabela 'livros' que se refere ao 'id' da tabela 'autores'. Chame a coluna de 'autor_id'.
    -- 4. Insira 2 autores na tabela 'autores'.
    -- 5. Insira 3 livros na tabela 'livros', associando-os aos autores que você inseriu.
    -- 6. Selecione todos os livros e seus respectivos autores (usando JOIN).
    -- 7. Atualize o gênero de um dos livros.
    -- 8. Delete um dos autores (e observe o que acontece com os livros associados - a IA pode te dar um aviso ou sugestão de como lidar com isso).
    ```

3.  Revise as consultas SQL geradas pela IA. Preste atenção à sintaxe e à lógica.
4.  **Autoavaliação:** Você consegue explicar o propósito de cada comando SQL gerado?

## Exercícios de Revisão e Autoavaliação

*   Qual a principal diferença entre um banco de dados relacional e um NoSQL?
*   Para que serve uma chave primária? E uma chave estrangeira?
*   Qual comando SQL você usaria para obter apenas os nomes de todos os usuários de uma tabela `usuarios`?
*   Descreva um cenário onde um banco de dados NoSQL seria mais adequado que um relacional.

## Links para Materiais Complementares

*   [Introdução a Bancos de Dados - Alura (artigo)](https://www.alura.com.br/artigos/banco-de-dados-o-que-e-e-para-que-serve)
*   [SQL Tutorial - W3Schools (em inglês)](https://www.w3schools.com/sql/)

## Orientações para Interação com a IA

*   **Descreva a estrutura dos dados:** Ao pedir para criar tabelas, liste as colunas, seus tipos e restrições (PRIMARY KEY, NOT NULL, UNIQUE).
*   **Seja claro sobre as relações:** Ao pedir chaves estrangeiras, especifique quais tabelas estão sendo relacionadas e quais colunas.

## Recomendações para Revisão e Testes

*   **Valide a sintaxe SQL:** Embora a IA ajude, sempre verifique se o SQL gerado está sintaticamente correto.
*   **Pense nos relacionamentos:** Entenda como as chaves primárias e estrangeiras conectam as tabelas e como isso afeta as consultas.

## Projeto Prático: Próximos Passos

Com uma compreensão sólida de bancos de dados e SQL, você está pronto para integrar um banco de dados real ao seu backend. Nos próximos módulos, vamos usar o SQLite (um banco de dados leve e fácil de usar) com Node.js para persistir os dados do seu projeto digital.

