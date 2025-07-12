# 🚀 Guia de Instalação - Curso de Vibe Coding

## Pré-requisitos

- Computador com Windows, Mac ou Linux
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com a internet

## Instalação Passo a Passo

### 1. Download do Curso

Você recebeu uma pasta chamada `vibe-coding-course` contendo todos os arquivos do curso.

### 2. Verificar a Estrutura

Certifique-se de que a pasta contém:
```
vibe-coding-course/
├── index.html
├── css/
├── js/
├── modules/
├── README.md
└── INSTALACAO.md
```

### 3. Instalar Python (Recomendado)

Para a melhor experiência, instale Python para executar um servidor local:

#### Windows:
1. Acesse [python.org](https://python.org)
2. Baixe a versão mais recente do Python
3. Execute o instalador
4. **IMPORTANTE**: Marque a opção "Add Python to PATH"

#### Mac:
```bash
# Usando Homebrew (recomendado)
brew install python3

# Ou baixe diretamente de python.org
```

#### Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install python3
```

### 4. Executar o Curso

#### Opção A: Com Servidor Local (Recomendado)

1. **Abra o terminal/prompt de comando**

2. **Navegue até a pasta do curso**:
   ```bash
   cd caminho/para/vibe-coding-course
   ```

3. **Inicie o servidor**:
   ```bash
   python3 -m http.server 8080
   ```
   
   No Windows, pode ser:
   ```bash
   python -m http.server 8080
   ```

4. **Abra o navegador** e acesse:
   ```
   http://localhost:8080
   ```

5. **Para parar o servidor**: Pressione `Ctrl+C` no terminal

#### Opção B: Arquivo Local (Limitado)

1. Navegue até a pasta `vibe-coding-course`
2. Clique duas vezes no arquivo `index.html`
3. O curso abrirá no seu navegador padrão

**Nota**: Algumas funcionalidades podem não funcionar devido a restrições de segurança do navegador.

## Solução de Problemas

### Problema: "Python não é reconhecido"
**Solução**: Reinstale o Python marcando "Add to PATH" ou adicione manualmente ao PATH do sistema.

### Problema: Porta 8080 já está em uso
**Solução**: Use uma porta diferente:
```bash
python3 -m http.server 8081
```
Então acesse `http://localhost:8081`

### Problema: Módulos não carregam
**Solução**: Certifique-se de estar usando o servidor HTTP local, não abrindo o arquivo diretamente.

### Problema: Página não carrega
**Solução**: 
1. Verifique se o servidor está rodando
2. Confirme o endereço no navegador
3. Tente recarregar a página (F5)

## Testando a Instalação

1. Acesse a página principal do curso
2. Clique em "Módulos" no menu
3. Clique no "Módulo 1"
4. Verifique se o conteúdo carrega corretamente

Se tudo funcionar, você está pronto para começar o curso!

## Alternativas Online

Se tiver dificuldades com a instalação local, você pode:

1. **Usar o Replit**:
   - Acesse [replit.com](https://replit.com)
   - Crie uma conta gratuita
   - Faça upload dos arquivos do curso
   - Execute diretamente no navegador

2. **Usar o CodePen**:
   - Acesse [codepen.io](https://codepen.io)
   - Crie uma conta
   - Copie e cole o código dos módulos

## Suporte

Se ainda tiver problemas:

1. Verifique o arquivo README.md
2. Consulte a documentação do Python
3. Procure ajuda em fóruns de programação
4. Use assistentes de IA para resolver dúvidas técnicas

**Boa sorte com o curso! 🎯**

