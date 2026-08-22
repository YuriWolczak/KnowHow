# Introdução à orientação a objetos

> Orientação a objetos é uma forma de organizar software reunindo dados e comportamentos relacionados em abstrações que colaboram.

## 🎯 Objetivo

Compreender os conceitos de objeto, classe, estado e comportamento, além de reconhecer quando esse modelo ajuda e quando pode adicionar complexidade.

## 📋 Pré-requisitos

Leia [funções](./functions.md) e [estruturas de dados](./data-structures.md).

## 🧠 Conceitos básicos

Um **objeto** representa algo com estado e comportamentos. Uma **classe** é uma definição que pode servir de molde para criar objetos, dependendo da linguagem. Encapsulamento significa controlar como o estado é acessado e alterado; não significa esconder tudo sem critério.

```python
class Conta:
    def __init__(self, saldo_inicial=0):
        self.saldo = saldo_inicial

    def depositar(self, valor):
        if valor <= 0:
            raise ValueError("o depósito deve ser positivo")
        self.saldo += valor

conta = Conta()
conta.depositar(100)
```

`Conta` combina um estado (`saldo`) com um comportamento (`depositar`) e protege uma regra simples. O exemplo não representa um sistema bancário completo.

## ❓ Por que isso existe?

Quando um domínio possui entidades com regras próprias, reunir dados e operações pode evitar que qualquer parte do programa altere o estado de qualquer maneira. Porém, funções e estruturas simples continuam sendo melhores para muitos problemas.

## ⚠️ Erros comuns

Criar classes apenas para envolver uma variável, usar herança como padrão e esconder regras em muitos métodos tornam o sistema difícil de entender. “Orientado a objetos” não é sinônimo de “muitas classes”.

## ✅ Boas práticas

Comece pelo comportamento necessário, mantenha invariantes explícitas e prefira composição quando objetos menores puderem colaborar sem criar uma hierarquia artificial. Teste regras de estado com entradas válidas e inválidas.

## 🧪 Exercícios e projetos

- [Organizador de despesas](../challenges/expense-organizer.md)
- [Controle de despesas pessoais](../projects/beginner/expense-tracker.md)

## ➡️ Próximos passos

Estude [algoritmos e complexidade](./algorithms-and-complexity.md) para comparar o custo das operações realizadas pelo programa.

[Voltar para fundamentos](./README.md) · [Voltar para a trilha](../docs/learning-paths/fundamentals.md)
