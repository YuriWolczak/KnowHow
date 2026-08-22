# Contagem de frequência

> 🟡 Intermediário — conte quantas vezes cada valor aparece em uma sequência.

## 🎯 Objetivo

Praticar dicionários ou mapas, iteração e separação entre entrada, processamento e saída.

## 📋 Pré-requisitos

Estude [estruturas de dados](../data-structures.md), [loops](../loops.md) e [funções](../functions.md).

## 📝 Problema

Receba uma sequência de palavras e produza a frequência de cada palavra. A primeira versão deve tratar diferenças entre maiúsculas e minúsculas como diferenças reais; normalizar o texto é uma extensão que precisa ser declarada.

```text
Entrada: sol lua sol estrela lua sol
Saída:
sol: 3
lua: 2
estrela: 1
```

## ⚠️ Restrições

A ordem de apresentação pode ser a ordem da primeira ocorrência ou ordem alfabética, mas a escolha deve ser documentada. Não use uma busca linear repetida sem discutir seu custo.

## 🧠 Dicas

1. Use uma estrutura que associe cada palavra a um contador.
2. Se a palavra ainda não existir, comece em zero.
3. Faça uma etapa separada para apresentar o resultado.

## ✅ Pseudocódigo de referência

```text
ler palavras
frequencias ← mapa vazio
para cada palavra em palavras:
    se palavra não está em frequencias:
        frequencias[palavra] ← 0
    frequencias[palavra] ← frequencias[palavra] + 1
para cada palavra e contagem em frequencias:
    exibir palavra e contagem
```

## ➡️ Extensões

Normalize maiúsculas e minúsculas, ignore pontuação, conte caracteres e compare a solução baseada em mapa com uma baseada em lista de pares.

[Voltar para exercícios de fundamentos](./README.md) · [Ver estruturas de dados](../data-structures.md)
