# Tratamento de erros em Python

> Erros são situações em que o programa não consegue cumprir a operação planejada; tratá-los exige decidir o comportamento esperado.

## 🎯 Objetivo

Reconhecer exceções comuns, validar entradas e usar `try`/`except` de forma específica.

## 📋 Pré-requisitos

Leia [texto e arquivos](./text-and-files.md) e [operadores, entrada e saída](../../../fundamentals/operators-input-output.md).

## Exceções

Converter uma entrada inválida pode gerar `ValueError`:

```python
def ler_inteiro(mensagem):
    while True:
        try:
            return int(input(mensagem))
        except ValueError:
            print("Digite um número inteiro.")
```

O bloco tenta uma operação que pode falhar. O `except` trata apenas o erro conhecido e permite que a pessoa corrija a entrada.

## 🔎 Validação não é a mesma coisa que exceção

`int("abc")` é uma entrada que não pode ser convertida e causa uma exceção. Já `int("-1")` é conversível, mas pode violar uma regra de negócio. O programa precisa validar as duas dimensões quando o domínio exigir.

## ⚠️ Erros comuns

Usar `except Exception` sem necessidade, ignorar a exceção ou exibir uma mensagem que não explica o que fazer esconde problemas. Capturar erros demais pode transformar um bug em comportamento silencioso.

## ✅ Boas práticas

Capture a exceção mais específica que você sabe tratar, explique a correção possível e preserve o contexto ao registrar falhas. Não use exceções como substituto para toda validação simples.

## 🧪 Exercícios e projetos

- [Classificador de idade](../../../exercises/age-classifier.md)
- [Controle de despesas pessoais](../../../projects/beginner/expense-tracker.md)

## ➡️ Próximos passos

A trilha intermediária abordará testes, módulos, ambientes virtuais e organização de pacotes quando houver conteúdo revisado.

## 📚 Referências

- [Python — Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html)
- [Python — Built-in Exceptions](https://docs.python.org/3/library/exceptions.html)

[Voltar para Python](../README.md) · [Voltar para fundamentos](../../../fundamentals/README.md)
