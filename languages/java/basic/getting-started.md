# Primeiro programa e JDK em Java

> Como compilar e executar um programa Java usando as ferramentas básicas do JDK.

## 🎯 Objetivo

Entender o papel do JDK e executar um programa Java pequeno a partir do terminal.

## 📋 Pré-requisitos

Leia [como computadores executam instruções](../../../fundamentals/how-computers-execute-instructions.md). Instale um JDK de uma distribuição confiável e consulte a documentação da versão usada.

## 🧠 JDK, compilação e execução

O **JDK** (*Java Development Kit*) reúne ferramentas para desenvolver em Java. O comando `javac` compila o código-fonte para bytecode; o comando `java` inicia a execução desse programa no ambiente Java.

Crie `HelloWorld.java`:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Olá, mundo!");
    }
}
```

O nome do arquivo precisa corresponder ao nome da classe pública. Compile e execute:

```bash
javac HelloWorld.java
java HelloWorld
```

O código fonte não é executado pelo terminal como texto puro. Ele é compilado e depois executado por uma implementação Java compatível.

## ⚠️ Erros comuns

Usar um nome de arquivo diferente do nome da classe pública, chamar `java HelloWorld.class` ou executar no diretório errado são erros frequentes. Se a versão do JDK importar, verifique-a com `java --version` e `javac --version`.

## ✅ Boas práticas

Mantenha uma versão de JDK declarada no projeto, leia os avisos do compilador e não misture arquivos compilados sem entender sua origem. Em projetos reais, uma ferramenta de build será introduzida depois.

## ➡️ Próximos passos

Estude [sintaxe, tipos e variáveis](./syntax-types-variables.md).

## 📚 Referências

- [Java SE Documentation](https://docs.oracle.com/en/java/javase/25/)
- [Java SE 25 API Specification](https://docs.oracle.com/en/java/javase/25/docs/api/index.html)

[Voltar para Java básico](./README.md) · [Voltar para Java](../README.md)
