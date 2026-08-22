# Sequência de Fibonacci

> 🟡 Intermediário — gere os primeiros termos de uma sequência definida pelos dois anteriores.

## 🎯 Objetivo

Praticar estado, repetição, ordem de atualização e análise de limites.

## 📋 Pré-requisitos

Estude [loops](../loops.md), [variáveis](../variables-and-data-types.md) e [funções](../functions.md).

## 📝 Problema

Receba uma quantidade `n` e produza os primeiros `n` termos da sequência em que os dois primeiros termos são `0` e `1`, e cada termo seguinte é a soma dos dois anteriores.

```text
Entrada: 6
Saída: 0, 1, 1, 2, 3, 5
```

## ⚠️ Restrições

Defina o resultado para `n = 0` e `n = 1`. A primeira solução deve ser iterativa. Uma versão recursiva pode ser criada depois para comparar legibilidade e custo.

## 🧠 Dicas

1. Mantenha duas variáveis representando os últimos termos.
2. Exiba ou armazene o termo atual antes de atualizá-las.
3. Atualize as duas variáveis na ordem correta, evitando perder o valor anterior.

## ✅ Pseudocódigo de referência

```text
ler n
anterior ← 0
atual ← 1
sequencia ← vazia
repetir n vezes:
    adicionar anterior à sequencia
    proximo ← anterior + atual
    anterior ← atual
    atual ← proximo
exibir sequencia
```

## ➡️ Extensões

Gere apenas termos menores que um limite, calcule um termo específico e compare a versão iterativa com a recursiva usando uma análise de complexidade.

[Voltar para exercícios de fundamentos](./README.md) · [Ver loops](../loops.md) · [Ver complexidade](../algorithms-and-complexity.md)
