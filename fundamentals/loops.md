# Loops

> Loops repetem um conjunto de passos de maneira controlada.

## 🎯 Objetivo

Entender quando usar repetição, como definir uma condição de parada e como evitar loops infinitos.

## 📋 Pré-requisitos

Leia [condicionais](./conditionals.md) e [variáveis e tipos de dados](./variables-and-data-types.md).

## 🧠 Repetição

Sem um loop, repetir uma ação exige copiar instruções. Um loop descreve a regra que determina quantas vezes o bloco será executado.

```python
for numero in range(1, 4):
    print(numero)
```

Esse exemplo exibe 1, 2 e 3. O limite final de `range` não é incluído, um detalhe específico de Python que deve ser aprendido junto com o conceito geral de repetição.

## Repetição condicional

```python
contador = 0
while contador < 3:
    print(contador)
    contador += 1
```

A cada rodada, `contador` se aproxima da condição de parada. Se nenhuma parte do bloco alterar o estado relevante, o loop pode nunca terminar.

## ⚠️ Erros comuns

Esquecer de atualizar a variável de controle, usar um limite incorreto ou alterar uma coleção enquanto ela é percorrida pode causar resultados errados. Um loop que termina por acidente é tão perigoso quanto um loop infinito.

## ✅ Boas práticas

Especifique o estado inicial, a condição de continuação e a mudança que aproxima o fim. Teste zero elementos, um elemento e vários elementos. Se a repetição tiver uma intenção nomeável, extraia uma função.

## 🧪 Exercícios

- [Contador de vogais](../exercises/vowel-counter.md)
- [Lista de tarefas em Python](../exercises/python-todo-list.md)

## ➡️ Próximos passos

Estude [funções](./functions.md) para encapsular comportamentos que podem ser reutilizados.

[Voltar para fundamentos](./README.md) · [Voltar para a trilha](../docs/learning-paths/fundamentals.md)
