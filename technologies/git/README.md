# Git

> Sistema de controle de versão usado para registrar, comparar e compartilhar mudanças em arquivos.

## 🎯 Objetivo

Ao terminar esta introdução, você deverá entender por que o versionamento ajuda no aprendizado e conseguir criar commits pequenos, consultar o histórico e trabalhar em uma branch.

## 📋 Pré-requisitos

É útil conhecer arquivos, diretórios e o [terminal](../../resources/glossary/README.md#terminal), mas não é necessário ter usado Git antes.

## 🧠 O que é controle de versão?

Controle de versão é uma forma de registrar mudanças ao longo do tempo. Em vez de depender de cópias como `projeto-final-2-agora-vai`, você pode identificar o estado do trabalho, comparar alterações e retornar a uma versão anterior quando necessário.

O Git é distribuído: uma cópia local contém o histórico do repositório. Isso permite estudar e criar commits mesmo sem enviar cada alteração imediatamente para um servidor.

## 🔎 Primeiro fluxo

Dentro de um diretório que já contenha um projeto:

```bash
git status
git add README.md
git commit -m "docs: improve project introduction"
```

`git status` mostra o estado atual. `git add` coloca mudanças selecionadas na área de preparação (*staging area*). `git commit` cria um registro permanente dessas mudanças no histórico local.

> Os comandos acima pressupõem que o diretório já é um repositório Git configurado. Inicializar um repositório e configurar uma identidade são etapas de ambiente que devem ser aprendidas com cuidado e documentadas conforme o sistema operacional.

## ✅ Boas práticas

- Faça commits pequenos e com uma intenção clara.
- Leia `git diff` antes de adicionar mudanças.
- Não inclua segredos, chaves ou arquivos gerados.
- Escreva mensagens que expliquem a mudança, não apenas “update”.
- Use branches para separar uma proposta de trabalho.

## ⚠️ Erros comuns

Adicionar tudo com `git add .` pode incluir arquivos que não deveriam ser versionados. Antes do commit, confira `git status` e use `.gitignore` para arquivos locais, caches e segredos.

Um commit não é um backup automático de tudo: ele registra o que foi adicionado à área de preparação. Se algo não foi preparado, não fará parte daquele commit.

## 🧪 Prática relacionada

- [Guia de contribuição](../../CONTRIBUTING.md)
- [Desafio de organizador de despesas](../../challenges/expense-organizer.md)
- [Documentação oficial do Git](https://git-scm.com/doc)

## ➡️ Próximos passos

Estude branches, `git log`, `git diff`, remotos, Pull Requests e resolução de conflitos. Esses assuntos serão desenvolvidos em uma trilha própria de Git/GitHub.

[Voltar para tecnologias](../README.md) · [Voltar para a Knowledge Base](../../README.md) · [Voltar para a trilha de fundamentos](../../docs/learning-paths/fundamentals.md)
