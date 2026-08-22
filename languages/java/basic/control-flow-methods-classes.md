# Controle de fluxo, métodos e classes em Java

> Como expressar decisões, repetições, métodos e uma classe simples em Java.

## 🎯 Objetivo

Aplicar condicionais e loops em Java e entender como métodos e classes organizam comportamento e estado.

## 📋 Pré-requisitos

Leia [condicionais](../../../fundamentals/conditionals.md), [loops](../../../fundamentals/loops.md) e [sintaxe, tipos e variáveis](./syntax-types-variables.md).

## Condicionais e loops

```java
public class FlowExample {
    public static void main(String[] args) {
        for (int numero = 1; numero <= 3; numero++) {
            if (numero % 2 == 0) {
                System.out.println(numero + " é par");
            } else {
                System.out.println(numero + " é ímpar");
            }
        }
    }
}
```

A lógica é a mesma de qualquer linguagem: uma sequência contém uma decisão dentro de uma repetição. A sintaxe de Java exige tipos, parênteses e chaves explícitos.

## Métodos

```java
public class MathExample {
    static int somar(int primeiro, int segundo) {
        return primeiro + segundo;
    }

    public static void main(String[] args) {
        System.out.println(somar(2, 3));
    }
}
```

Um método declara o tipo do retorno e os tipos dos parâmetros. `static` permite chamá-lo sem criar um objeto; essa escolha é específica do exemplo e não deve ser aplicada sem entender o ciclo de vida do objeto.

## Classes e estado

```java
public class Counter {
    private int value;

    public void increment() {
        value++;
    }

    public int getValue() {
        return value;
    }
}
```

`private` restringe o acesso direto ao campo. O método expõe uma operação controlada, mas encapsulamento não significa criar getters e setters automaticamente para todo campo.

## ⚠️ Erros comuns

Criar classes apenas para imitar um modelo, esquecer que `String` é comparada por conteúdo com `equals` e confundir método `static` com método de instância são problemas comuns.

## ✅ Boas práticas

Comece pelo comportamento e pelos dados necessários. Mantenha métodos pequenos, use nomes que comuniquem intenção e valide invariantes em um ponto claro.

## 🧪 Prática relacionada

- [Maior de três números](../../../exercises/largest-of-three-numbers.md)
- [Lista de tarefas em Python](../../../exercises/python-todo-list.md) — compare a organização de funções e classes sem copiar a implementação.

## ➡️ Próximos passos

A trilha intermediária abordará coleções, exceções, interfaces, generics, testes e build.

## 📚 Referências

- [The Java Tutorials — Language Basics](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/)
- [Java SE 25 API Specification](https://docs.oracle.com/en/java/javase/25/docs/api/index.html)

[Voltar para Java básico](./README.md) · [Ver orientação a objetos](../../../fundamentals/object-oriented-programming.md)
