# Número primo

> 🟡 Intermediário — verifique se um número possui exatamente dois divisores positivos.

## 🎯 Objetivo

Praticar loops, divisibilidade, casos de fronteira e uma decisão simples sobre otimização.

## 📋 Pré-requisitos

Estude [condicionais](../conditionals.md), [loops](../loops.md) e [introdução a algoritmos e complexidade](../algorithms-and-complexity.md).

## 📝 Problema

Receba um inteiro e informe se ele é primo. Um número primo é maior que 1 e possui apenas 1 e ele próprio como divisores positivos.

```text
Entrada: 2
Saída: primo

Entrada: 12
Saída: não primo

Entrada: 1
Saída: não primo
```

## ⚠️ Restrições

Trate números menores que 2 como não primos. A primeira solução pode testar divisores de 2 até `n - 1`; depois compare com uma solução que testa apenas até a raiz quadrada.

## 🧠 Dicas

1. Um divisor produz resto zero.
2. Ao encontrar um divisor, você pode encerrar a busca.
3. Pergunte por que não é necessário testar todos os valores até `n - 1` em uma versão melhorada.

## ✅ Pseudocódigo de referência

```text
ler numero
se numero < 2:
    exibir não primo
senão:
    é_primo ← verdadeiro
    para divisor de 2 até raiz quadrada de numero:
        se numero resto divisor = 0:
            é_primo ← falso
            parar repetição
    exibir é_primo
```

## ➡️ Extensões

Liste todos os primos até um limite e compare a solução simples com o Crivo de Eratóstenes, explicando memória, tempo e tamanho de entrada.

[Voltar para exercícios de fundamentos](./README.md) · [Ver complexidade](../algorithms-and-complexity.md)
