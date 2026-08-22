# Estruturas de dados

> Estruturas de dados organizam valores para que operações como acessar, inserir, remover e buscar possam ser realizadas de forma adequada.

## 🎯 Objetivo

Reconhecer estruturas comuns e escolher uma representação compatível com as operações que o programa precisa realizar.

## 📋 Pré-requisitos

Leia [funções](./functions.md), [variáveis e tipos de dados](./variables-and-data-types.md) e [loops](./loops.md).

## 🧠 Escolha orientada ao problema

Não existe uma estrutura “melhor” em qualquer situação. Uma lista é útil quando a ordem importa e os itens são percorridos. Um conjunto é útil quando a presença de um valor importa mais que a repetição. Um mapa ou dicionário associa chaves a valores.

```python
nomes = ["Ana", "Bruno", "Caio"]
visitantes = {"ana", "bruno"}
idades = {"Ana": 28, "Bruno": 31}
```

A sintaxe é de Python, mas a decisão é conceitual: escolha a estrutura pela pergunta que o programa precisa responder.

## Comparação inicial

| Estrutura | Pergunta que favorece | Cuidados |
| --- | --- | --- |
| Lista | “Qual é o item nesta posição?” | Buscar um item pode exigir percorrer vários valores |
| Conjunto | “Este valor está presente?” | Não use quando ordem ou repetição forem essenciais |
| Dicionário | “Qual valor corresponde a esta chave?” | Chaves precisam ser adequadas à linguagem |

## ⚠️ Erros comuns

Escolher uma coleção por hábito, misturar tipos sem motivo e modificar uma coleção durante a iteração são fontes frequentes de bugs. Também é comum usar uma lista para representar uma relação de chave e valor, tornando o código mais difícil de interpretar.

## ✅ Boas práticas

Descreva a operação principal antes de escolher a estrutura. Dê nomes que expliquem o papel da coleção e escreva testes para lista vazia, chaves ausentes e valores repetidos quando esses casos forem possíveis.

## 🧪 Exercícios e projetos

- [Contador de vogais](../exercises/vowel-counter.md)
- [Manipulação de lista de tarefas](../exercises/python-todo-list.md)
- [Lista de tarefas](../projects/beginner/task-list.md)

## ➡️ Próximos passos

Estude a [introdução à orientação a objetos](./object-oriented-programming.md) para modelar dados e comportamentos que pertencem juntos.

[Voltar para fundamentos](./README.md) · [Voltar para a trilha](../docs/learning-paths/fundamentals.md)
