# Lista de tarefas

> 🟢 Básico — organize tarefas pendentes e concluídas em um programa local.

## 🌍 Contexto

Uma pessoa precisa manter uma lista pequena de tarefas e marcar o que já foi concluído. O objetivo é praticar modelagem simples antes de introduzir banco de dados ou interface web.

## 🎯 Objetivo

Criar uma primeira versão que permita adicionar, listar, concluir e remover tarefas.

## 👥 Público

Quem está praticando funções, listas, dicionários e controle de fluxo em Python.

## ⚙️ Funcionalidades

### Obrigatórias

- adicionar uma tarefa com descrição;
- listar tarefas com identificador e estado;
- marcar uma tarefa como concluída;
- remover uma tarefa;
- informar quando o identificador não existe.

### Futuras

- salvar em arquivo;
- filtrar por estado;
- editar uma descrição;
- adicionar prazo e prioridade;
- criar testes automatizados.

## 📋 Requisitos

- A descrição não pode ser vazia.
- Cada tarefa deve possuir identificador estável durante a execução.
- Concluir uma tarefa não deve apagar sua descrição.
- A primeira versão pode armazenar dados apenas em memória.

## 🧰 Tecnologias sugeridas

| Parte | Sugestão | Motivo |
| --- | --- | --- |
| Linguagem | Python 3 | Aplicar funções e coleções da trilha básica |
| Interface | Terminal | Concentrar o aprendizado no domínio |
| Armazenamento inicial | Lista de dicionários | Tornar estado e operações visíveis para iniciantes |

## ✅ Critérios de conclusão

- [ ] A aplicação cria tarefas válidas.
- [ ] A listagem mostra estado pendente ou concluído.
- [ ] Concluir e remover usam o identificador correto.
- [ ] A aplicação trata descrição vazia e identificador desconhecido.
- [ ] A execução e as limitações estão documentadas.

## 🧠 Conhecimentos necessários

- [Estruturas de dados](../../fundamentals/data-structures.md)
- [Funções](../../fundamentals/functions.md)
- [Controle de fluxo em Python](../../languages/python/basic/control-flow.md)
- [Lista de tarefas em Python](../../exercises/python-todo-list.md)

## ➡️ Possíveis melhorias

Separe o código em módulos, persista as tarefas e escreva testes para cada operação. Só adicione uma interface gráfica depois de validar as regras do domínio.

[Voltar para projetos iniciantes](./README.md) · [Voltar para a área de projetos](../README.md)
