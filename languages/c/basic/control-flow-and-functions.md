# Controle de fluxo e funções em C

> Como expressar decisões, repetições e funções em C.

## 🎯 Objetivo

Aplicar condicionais, loops e funções em C, entendendo a sintaxe específica sem separar o código da lógica do problema.

## 📋 Pré-requisitos

Leia [condicionais](../../../fundamentals/conditionals.md), [loops](../../../fundamentals/loops.md) e [sintaxe, tipos e variáveis](./syntax-types-variables.md).

## Condicionais e loops

```c
#include <stdio.h>

int main(void) {
    for (int numero = 1; numero <= 3; numero++) {
        if (numero % 2 == 0) {
            printf("%d é par\n", numero);
        } else {
            printf("%d é ímpar\n", numero);
        }
    }
    return 0;
}
```

A ideia de sequência, decisão e repetição é independente de C. A sintaxe usa parênteses na condição e chaves para delimitar o bloco.

## Funções

```c
#include <stdio.h>

int somar(int primeiro, int segundo) {
    return primeiro + segundo;
}

int main(void) {
    printf("%d\n", somar(2, 3));
    return 0;
}
```

A declaração informa o tipo do retorno e os tipos dos parâmetros. `void` é usado quando uma função não recebe ou não devolve um valor, conforme o caso.

## ⚠️ Erros comuns

Esquecer o protótipo de uma função antes do uso, não retornar um valor em uma função que declara retorno e criar condições sem chaves em blocos maiores podem gerar erros ou leituras enganosas.

## ✅ Boas práticas

Mantenha funções com uma responsabilidade, declare tipos explicitamente, compile com avisos e teste casos de fronteira. Em C, erros de memória podem não aparecer imediatamente; não ignore avisos do compilador.

## 🧪 Prática relacionada

- [Maior de três números](../../../exercises/largest-of-three-numbers.md)
- [Média de três notas](../../../exercises/average-of-three-grades.md)

## ➡️ Próximos passos

Estude arrays, strings e ponteiros com cuidado antes de trabalhar em programas C maiores.

## 📚 Referências

- [GNU C Reference Manual — Statements](https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html#Statements)
- [GNU C Reference Manual — Functions](https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html#Functions)

[Voltar para C básico](./README.md) · [Voltar para C](../README.md)
