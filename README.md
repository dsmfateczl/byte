# Byte

Projeto Interdisciplinar do 1º semestre de DSM da FATEC ZL — 2026/2.

## 👥 Equipe

- Alexandre
- Gustavo Karl
- Gustavo Oliveira
- João Victor
- Renan

## 💻 Configuração do projeto

### 1. Clonar o repositório pela primeira vez

Acima da lista de arquivos, clique no botão <> **Code**.

<img width="350" height="150" alt="image" src="https://github.com/user-attachments/assets/f62c8ac0-ffaf-4c0b-a43e-e378c5672ae9" />

<br>
<br>

Em seguida copie a URL do repositório, na aba **HTTPS**.

<img width="350" height="250" alt="image" src="https://github.com/user-attachments/assets/0be50b97-8f17-434a-8ade-33f17474fbfc" />

<br>
<br>
No VSCode:

Clique em **File** > Selecione **Open Folder...** > Escolha a pasta onde você deseja armazenar os projetos da faculdade > Clique em **Select Folder**.
No menu superior: Clique em **Terminal** > Selecione **New Terminal** > Selecione **Git Bash**.<br>
No terminal, digite:
```text
git clone https://github.com/dsmfateczl/byte.git
```
Após o clone terminar: <br>
Clique em **File** > **Open Folder...** > Entre na pasta **byte** > Clique em **Select Folder**.

Pronto! O projeto estará disponível no seu computador.

---

### 2. Criar uma branch para sua tarefa

No terminal, primeiro verifique em qual branch você está:
```
git branch
```
A branch atual será identificada com um `*`.

Para criar uma nova branch, utilize:
```
git branch nome-da-branch
```
Depois, entre na nova branch:
```
git checkout nome-da-branch
```
Ou, de forma mais rápida, crie e entre na branch ao mesmo tempo:
```
git checkout -b nome-da-branch
```
A partir desse momento, você estará trabalhando na sua própria branch.

> ⚠️ **IMPORTANTE:** Cada integrante deverá criar uma **branch própria** para desenvolver sua tarefa, utilizando um nome que identifique o que será desenvolvido. Não faça alterações diretamente na branch `main` ou na branch de outro integrante.

Exemplos de nomes:

```text
pagina-seminovos
pagina-faq
pagina-garantia
pagina-sobre
questionario-orcamento
entrada-retirada
```
---

### 3. Enviar suas alterações para o GitHub

Depois de terminar sua tarefa, você precisa registrar as alterações no Git e enviá-las para o GitHub.

> 💡 Lembrete: `git add` prepara as alterações, `git commit` registra as alterações no Git e `git push` envia o Commit para o GitHub.

Verifique as alterações:

```bash
git status
```

Adicione um arquivo específico ao próximo Commit:
```
git add nome-do-arquivo
```
> É possível usar `git add .` para adicionar todos os arquivos alterados de uma vez.

Registre as alterações no Git:
```
git commit -m "mensagem curta descrevendo o que foi feito"
```

Depois do Commit, envie as alterações para sua branch no GitHub:
```
git push -u origin nome-da-sua-branch
```
---

### 4. Atualizar o projeto

> ⚠️ **IMPORTANTE:** Faça essa atualização antes de começar a trabalhar na sua tarefa, principalmente se outros integrantes já tiverem enviado alterações para a `main`.

Depois que o repositório já estiver clonado no seu computador, **não é necessário clonar novamente**.

Antes de começar a trabalhar, atualize sua branch com as alterações mais recentes da `main`.

Primeiro, verifique em qual branch você está:

```bash
git branch
```

Se você estiver na sua branch de trabalho, volte para a `main`:

```bash
git checkout main
```

Atualize a `main` com as alterações do GitHub:

```bash
git pull origin main
```

Depois, volte para a sua branch:

```bash
git checkout nome-da-sua-branch
```

E atualize sua branch com a versão mais recente da `main`:

```bash
git merge main
```

Depois disso, você pode continuar normalmente o desenvolvimento na sua branch.

> Para manter todos trabalhando com a versão mais atualizada do projeto e reduzir conflitos, a atualização da `main` será realizada diariamente às *12h*.
