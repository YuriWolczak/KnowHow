# FizzBuzz com regras explícitas

> 🟢 Básico — classifique números conforme divisibilidade por 3 e 5.

## 🎯 Objetivo

Praticar condicionais, resto da divisão e a importância de testar a regra mais específica antes das regras individuais.

## 📋 Pré-requisitos

Estude [condicionais](../conditionals.md), [loops](../loops.md) e [algoritmos](../algorithms.md).

## 📝 Problema

Para cada número de 1 até um limite informado, mostre:

- `FizzBuzz` quando for divisível por 3 e por 5;
- `Fizz` quando for divisível apenas por 3;
- `Buzz` quando for divisível apenas por 5;
- o próprio número nos demais casos.

## 💡 Exemplo

```text
Limite: 5
Saída:
1
2
Fizz
4
Buzz
```

## ⚠️ Restrições

O limite deve ser maior ou igual a 1. A condição de divisibilidade por 3 e 5 deve ser verificada antes das condições isoladas.

## 🧠 Dicas

1. Use o resto da divisão para testar divisibilidade.
2. Escreva uma tabela com os quatro resultados possíveis.
3. Teste pelo menos 15, 3, 5 e 1.

## ✅ Pseudocódigo de referência

```text
ler limite
para numero de 1 até limite:
    se numero é divisível por 3 e por 5:
        exibir FizzBuzz
    senão se numero é divisível por 3:
        exibir Fizz
    senão se numero é divisível por 5:
        exibir Buzz
    senão:
        exibir numero
```

## ➡️ Extensões

Permita que as regras e as palavras sejam configuradas, em vez de fixar 3, 5, `Fizz` e `Buzz`. Explique como resolver conflitos quando duas regras se aplicarem.

[Voltar para exercícios de fundamentos](./README.md) · [Ver condicionais](../conditionals.md)
