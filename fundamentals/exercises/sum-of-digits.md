# Soma dos algarismos

> 🟢 Básico — some os algarismos de um número inteiro positivo.

## 🎯 Objetivo

Praticar decomposição de números, repetição e a diferença entre divisão inteira e resto.

## 📋 Pré-requisitos

Estude [loops](../loops.md), [variáveis e tipos de dados](../variables-and-data-types.md) e [operadores](../operators-input-output.md).

## 📝 Problema

Receba um número inteiro não negativo e produza a soma de seus algarismos. Por exemplo, para `507`, o resultado é `12`.

## 📥 Entrada e 📤 saída

A entrada é um inteiro não negativo. A saída deve ser um único inteiro com a soma dos algarismos.

```text
Entrada: 507
Saída: 12
```

```text
Entrada: 0
Saída: 0
```

## ⚠️ Restrições

A primeira versão deve tratar apenas números inteiros não negativos. Não converta o número para texto como atalho; o objetivo é praticar operações aritméticas.

## 🧠 Dicas

1. O resto da divisão por 10 revela o último algarismo.
2. A divisão inteira por 10 remove o último algarismo.
3. Repita enquanto ainda houver parte do número para processar.

## ✅ Pseudocódigo de referência

```text
ler numero
soma ← 0
se numero = 0:
    exibir 0
senão:
    enquanto numero > 0:
        algarismo ← numero resto 10
        soma ← soma + algarismo
        numero ← numero divisão inteira 10
    exibir soma
```

## ➡️ Extensões

Adapte o algoritmo para números negativos, documentando como o sinal deve ser tratado, e compare a versão aritmética com uma versão baseada em texto.

[Voltar para exercícios de fundamentos](./README.md) · [Ver loops](../loops.md)
