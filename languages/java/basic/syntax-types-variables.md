# Sintaxe, tipos e variáveis em Java

> Como declarar valores e realizar uma operação simples em Java.

## 🎯 Objetivo

Conhecer declarações básicas, tipos primitivos, strings e uma conversão controlada de entrada.

## 📋 Pré-requisitos

Leia [variáveis e tipos de dados](../../../fundamentals/variables-and-data-types.md) e [primeiro programa e JDK](./getting-started.md).

## Tipos e declarações

Java exige que o tipo seja declarado:

```java
public class Example {
    public static void main(String[] args) {
        int idade = 28;
        double altura = 1.68;
        String nome = "Ana";
        boolean ativo = true;

        System.out.println(nome + " tem " + idade + " anos.");
    }
}
```

`int`, `double` e `boolean` são tipos primitivos; `String` é uma classe da biblioteca Java. Essa distinção importa para operações, valores padrão e uso de APIs.

## Entrada simples

```java
import java.util.Scanner;

public class ReadNumber {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.print("Digite um inteiro: ");
            if (!scanner.hasNextInt()) {
                System.out.println("Entrada inválida.");
                return;
            }
            int numero = scanner.nextInt();
            System.out.println("Você digitou " + numero + ".");
        }
    }
}
```

O `Scanner` lê a entrada e `hasNextInt` verifica se o próximo valor pode ser interpretado como inteiro. O `try` com recursos garante o fechamento do scanner.

## ⚠️ Erros comuns

Confundir `String` com `char`, comparar strings com `==` em vez de uma operação de conteúdo apropriada e ignorar entradas inválidas são erros frequentes. Conversões podem falhar; a fronteira deve decidir como reagir.

## ✅ Boas práticas

Escolha nomes descritivos, declare a versão do JDK e use tipos compatíveis com o domínio. Não use `double` para dinheiro sem entender precisão e arredondamento.

## ➡️ Próximos passos

Estude [controle de fluxo, métodos e classes](./control-flow-methods-classes.md).

## 📚 Referências

- [Java Language Basics](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/)
- [Java SE 25 API — java.lang](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/module-summary.html)

[Voltar para Java básico](./README.md) · [Ver fundamentos](../../../fundamentals/README.md)
