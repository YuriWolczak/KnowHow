# Listas, tuplas, conjuntos e dicionários

> As coleções de Python representam grupos de valores com propriedades e operações diferentes.

## 🎯 Objetivo

Escolher uma coleção adequada, percorrer seus valores e evitar confundir ordem, repetição e associação por chave.

## 📋 Pré-requisitos

Leia [estruturas de dados](../../../fundamentals/data-structures.md) e [funções em Python](./functions.md).

## Listas

Listas preservam uma sequência e podem ser alteradas:

```python
tarefas = ["estudar", "praticar"]
tarefas.append("revisar")
```

## Tuplas

Tuplas representam uma sequência que, por convenção e comportamento, não deve ser alterada após criada:

```python
coordenada = (10, 20)
```

## Conjuntos

Conjuntos são úteis quando a presença de valores únicos importa:

```python
linguagens = {"Python", "Python", "Go"}
print(linguagens)  # contém cada valor uma vez
```

Não dependa da ordem de exibição de um conjunto.

## Dicionários

Dicionários associam chaves a valores:

```python
idades = {"Ana": 28, "Bruno": 31}
print(idades["Ana"])
```

Considere o caso de uma chave ausente quando os dados vierem de fora.

## ⚠️ Erros comuns

Escolher uma lista quando a chave é a operação principal, assumir que conjuntos mantêm uma ordem útil e acessar uma chave sem definir o que fazer quando ela não existe são erros recorrentes.

## ✅ Boas práticas

Escreva a pergunta principal (“preciso buscar por chave?”, “a ordem importa?”, “duplicatas são válidas?”) antes de escolher a coleção. Encapsule operações repetidas em funções.

## 🧪 Exercícios e projetos

- [Contador de vogais](../../../exercises/vowel-counter.md)
- [Lista de tarefas em Python](../../../exercises/python-todo-list.md)
- [Lista de tarefas](../../../projects/beginner/task-list.md)

## ➡️ Próximos passos

Estude [texto e arquivos](./text-and-files.md) para persistir dados simples e tratar strings.

[Voltar para Python](../README.md) · [Voltar para fundamentos](../../../fundamentals/README.md)
