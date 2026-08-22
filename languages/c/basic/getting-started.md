# Primeiro programa e compilação em C

> Como transformar um arquivo C em um programa executável usando um compilador.

## 🎯 Objetivo

Entender o papel do compilador e executar um programa mínimo em C.

## 📋 Pré-requisitos

Leia [como computadores executam instruções](../../../fundamentals/how-computers-execute-instructions.md) e tenha um compilador C compatível com seu sistema. O exemplo abaixo usa a interface de linha de comando do GCC.

## 🧠 Código-fonte e executável

Em C, o arquivo fonte precisa ser compilado antes de ser executado. O compilador analisa o texto, verifica regras da linguagem e produz um executável para o ambiente escolhido.

Crie `hello.c`:

```c
#include <stdio.h>

int main(void) {
    printf("Olá, mundo!\n");
    return 0;
}
```

Compile e execute em um ambiente Unix-like com GCC:

```bash
gcc -std=c17 -Wall -Wextra -Wpedantic hello.c -o hello
./hello
```

As opções pedem o padrão C17 e avisos úteis. O comando pode variar em Windows ou com outro compilador; confirme a sintaxe do ambiente antes de tratá-la como universal.

## 🔎 O programa

`#include <stdio.h>` disponibiliza a declaração de `printf`. `main` é o ponto de entrada do programa. `printf` escreve na saída padrão e `return 0` indica término normal ao ambiente.

## ⚠️ Erros comuns

Executar `./hello` antes de compilar, omitir o ponto e vírgula ou usar um compilador que não está instalado são erros comuns. Avisos não devem ser ignorados automaticamente: eles podem indicar um comportamento que merece investigação.

## ✅ Boas práticas

Compile com avisos ativados, mantenha o código formatado e corrija avisos antes de adicionar complexidade. Não confunda “compilou” com “está correto”: o programa ainda precisa ser testado.

## ➡️ Próximos passos

Estude [sintaxe, tipos e variáveis](./syntax-types-variables.md).

## 📚 Referências

- [GNU C Reference Manual](https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html)
- [GCC online documentation](https://gcc.gnu.org/onlinedocs/)

[Voltar para C básico](./README.md) · [Voltar para C](../README.md)
