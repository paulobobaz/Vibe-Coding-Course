## Orientações para Interação com a IA

### Princípios Fundamentais

**1. Seja Específico e Detalhado**

❌ **Exemplo Ruim:** "Crie um código"

✅ **Exemplo Bom:** "Crie uma função JavaScript que valide se um email tem formato correto, retornando true ou false, e mostre uma mensagem de erro se for inválido"

**2. Use Contexto e Exemplos**

Sempre forneça contexto sobre o que você está tentando fazer:

```javascript
// Estou criando um formulário de contato para meu projeto.
// Preciso de uma função que:
// - Valide se o campo email não está vazio
// - Verifique se tem formato de email válido
// - Mostre mensagem de erro se inválido
// - Retorne true se tudo estiver correto
```

**3. Descreva o Resultado Esperado**

Em vez de apenas pedir código, explique o que deveria acontecer:

```javascript
// Quando o usuário digitar um email inválido e clicar em enviar,
// deveria aparecer uma mensagem vermelha dizendo "Email inválido"
// e o formulário não deveria ser enviado
```

### Comandos Práticos por Situação

**Para criar código do zero:**
```
"Crie [tipo de código] que [função específica] com as seguintes características:
- [característica 1]
- [característica 2]
- [característica 3]
Use [tecnologia específica] e siga [padrão ou estilo]"
```

**Para corrigir erros:**
```
"Estou tendo o seguinte erro: [descrição do erro]
O que deveria acontecer: [comportamento esperado]
O que está acontecendo: [comportamento atual]
Aqui está meu código: [cole o código]
Por favor, identifique o problema e forneça a correção."
```

**Para melhorar código existente:**
```
"Tenho este código funcionando: [cole o código]
Gostaria de melhorar para:
- [melhoria 1]
- [melhoria 2]
- [melhoria 3]
Mantenha a funcionalidade atual e adicione essas melhorias."
```

### Estratégias de Comunicação Eficaz

**1. Construa em Etapas**

Não tente fazer tudo de uma vez:

- **Etapa 1:** "Crie a estrutura básica"
- **Etapa 2:** "Adicione estilo e aparência"
- **Etapa 3:** "Adicione funcionalidade"
- **Etapa 4:** "Melhore e otimize"

**2. Peça Explicações**

Após receber o código, pergunte:
- "Pode explicar como esta função funciona linha por linha?"
- "Por que você usou este método em vez de [outro método]?"
- "Quais são as melhores práticas para este tipo de código?"

**3. Forneça Contexto do Projeto**

Sempre mencione:
- Em que projeto você está trabalhando
- Qual tecnologia está usando
- Que parte específica está desenvolvendo

### Dicas Específicas para Ferramentas

**No Replit:**
```html
<!-- Comentário: Crie uma função que [descrição detalhada] -->
```

**No Cursor:**
- Digite comentários descritivos antes do código
- Use nomes de variáveis e funções descritivos
- Pressione Tab para aceitar sugestões

**No ChatGPT/Claude:**
```
Contexto: [seu projeto e tecnologias]
Objetivo: [o que quer alcançar]
Problema: [se houver algum erro ou dificuldade]
Código atual: [se aplicável]
Pergunta específica: [sua dúvida exata]
```

### Checklist para Cada Interação

Antes de pedir ajuda à IA:
- [ ] Fui específico sobre o que quero?
- [ ] Forneci contexto suficiente?
- [ ] Expliquei o resultado esperado?
- [ ] Incluí código relevante (se aplicável)?
- [ ] Mencionei a tecnologia que estou usando?

Depois de receber a resposta:
- [ ] Testei o código fornecido?
- [ ] Entendi como funciona?
- [ ] Funcionou como esperado?
- [ ] Se não funcionou, forneci feedback específico?
- [ ] Fiz perguntas de esclarecimento?

### Erros Comuns a Evitar

❌ **Comandos Muito Vagos**
- "Faça um site"
- "Corrija isso"
- "Não funciona"

❌ **Não Fornecer Contexto**
- Não dizer que tecnologia está usando
- Não explicar o objetivo final
- Não mostrar o código atual

❌ **Não Testar as Sugestões**
- Aceitar código sem entender
- Não testar antes de continuar
- Não fazer perguntas sobre o código

