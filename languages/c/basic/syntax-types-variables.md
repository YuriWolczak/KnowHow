# Sintaxe, tipos e variáveis em C

> Como declarar dados e realizar uma operação simples em C.

## 🎯 Objetivo

Conhecer declarações básicas, tipos primitivos e a diferença entre código que recebe texto e código que recebe números.

## 📋 Pré-requisitos

Leia [variáveis e tipos de dados](../../../fundamentals/variables-and-data-types.md) e [primeiro programa e compilação](./getting-started.md).

## Declarações

Em C, uma variável é declarada com um tipo antes do nome:

```c
#include <stdio.h>

int main(void) {
    int idade = 28;
    double altura = 1.68;

    printf("Idade: %d\n", idade);
    printf("Altura: %.2f\n", altura);
    return 0;
}
```

O especificador de formato precisa corresponder ao tipo usado com `printf`. `int` representa um inteiro e `double` uma representação de ponto flutuante; os limites exatos dependem do tipo e do ambiente.

## Entrada simples

```c
#include <stdio.h>

int main(void) {
    int numero;

    printf("Digite um inteiro: ");
    if (scanf("%d", &numero) != 1) {
        fprintf(stderr, "Entrada inválida.\n");
        return 1;
    }

    printf("Você digitou %d.\n", numero);
    return 0;
}
```

`scanf` precisa do endereço da variável para escrever o valor. A verificação do retorno evita assumir que a conversão funcionou.

## ⚠️ Erros comuns

Usar o especificador errado em `printf`, ler sem verificar o retorno de `scanf` e assumir que `int` possui o mesmo tamanho em todas as plataformas são erros frequentes. Strings e ponteiros exigem cuidado adicional e serão tratados depois.

## ✅ Boas práticas

Declare variáveis próximas do uso, inicialize-as quando possível e valide dados vindos de fora. Para programas reais, avalie alternativas mais robustas a `scanf` quando o formato da entrada for complexo.

## ➡️ Próximos passos

Estude [controle de fluxo e funções](./control-flow-and-functions.md).

## 📚 Referências

- [GNU C Reference Manual — Data Types](https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html#Data-Types)
- [GNU C Reference Manual — Input and Output](https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html#Input-and-Output)

[Voltar para C básico](./README.md) · [Ver fundamentos](../../../fundamentals/README.md)
