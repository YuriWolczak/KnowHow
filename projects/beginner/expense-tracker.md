# Controle de despesas pessoais

> 🟢 Básico — um programa local para registrar despesas e consultar totais.

## 🌍 Contexto

Uma pessoa quer acompanhar gastos do dia a dia e precisa de uma primeira versão simples, executável no terminal e fácil de ampliar depois.

## 🎯 Objetivo

Criar um programa que registre despesas, liste os lançamentos e calcule o total. O projeto aplica variáveis, condicionais, loops, funções, coleções e tratamento de entradas.

## 👥 Público

Uma pessoa que deseja aprender programação construindo um sistema pequeno, mas com regras e decisões reais.

## ⚙️ Funcionalidades

### Obrigatórias

- registrar descrição, categoria e valor;
- listar despesas cadastradas;
- calcular o total acumulado;
- rejeitar valores menores ou iguais a zero;
- explicar como executar o programa.

### Futuras

- salvar em arquivo;
- filtrar por categoria;
- editar e remover lançamentos;
- adicionar testes;
- usar banco de dados.

## 📋 Requisitos

- A descrição não pode ser vazia.
- O valor deve ser positivo.
- A listagem deve mostrar descrição, categoria e valor.
- O total deve ser calculado a partir dos lançamentos atuais.
- O programa deve informar entradas inválidas sem encerrar silenciosamente.

## 🧰 Tecnologias sugeridas

| Parte | Sugestão | Motivo |
| --- | --- | --- |
| Linguagem | Python 3 | Aplicar a primeira trilha com uma sintaxe direta |
| Interface | Terminal | Manter o escopo focado em regras e dados |
| Armazenamento inicial | Memória | Evitar esconder conceitos atrás de infraestrutura |

## 🗂️ Estrutura sugerida

```text
expense-tracker/
├── README.md
└── expense_tracker.py
```

## ✅ Critérios de conclusão

- [ ] É possível registrar ao menos duas despesas.
- [ ] A listagem diferencia descrição, categoria e valor.
- [ ] O total está correto para exemplos manuais.
- [ ] Entradas inválidas recebem mensagens úteis.
- [ ] O README local explica execução, escopo e limitações.

## 🧠 Conhecimentos necessários

- [Variáveis e tipos de dados](../../fundamentals/variables-and-data-types.md)
- [Condicionais](../../fundamentals/conditionals.md)
- [Loops](../../fundamentals/loops.md)
- [Funções](../../fundamentals/functions.md)
- [Coleções em Python](../../languages/python/basic/collections.md)

## ➡️ Possíveis melhorias

Depois da primeira versão, implemente persistência em JSON com cuidado para arquivo ausente ou inválido. Em seguida, compare essa solução com uma versão que usa banco de dados e registre as diferenças de complexidade.

[Voltar para projetos iniciantes](./README.md) · [Ver o desafio de organizador de despesas](../../challenges/expense-organizer.md)
