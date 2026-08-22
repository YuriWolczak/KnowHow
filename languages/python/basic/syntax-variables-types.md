# Sintaxe, variáveis e tipos em Python

> Como representar valores e associar nomes a eles em Python 3.

## 🎯 Objetivo

Declarar variáveis, reconhecer tipos básicos e converter entrada de texto quando necessário.

## 📋 Pré-requisitos

Leia [começando com Python](./getting-started.md) e [variáveis e tipos de dados](../../../fundamentals/variables-and-data-types.md).

## Sintaxe essencial

Python usa indentação para delimitar blocos e diferencia maiúsculas de minúsculas. Uma instrução simples pode ser:

```python
nome = "Ana"
idade = 28
print(f"{nome} tem {idade} anos.")
```

O `f` antes da string permite inserir expressões entre chaves. O nome de uma variável deve comunicar seu significado e seguir as regras da linguagem.

## Tipos e conversões

```python
idade_texto = "28"
idade = int(idade_texto)
altura = 1.68
ativo = True
```

`idade_texto` é texto; `idade` é um inteiro. A conversão não valida todo o domínio: `int("-2")` é possível, embora possa ser inválido para uma regra de negócio que aceite apenas idade não negativa.

## Erros comuns

Usar `int` em texto que não representa inteiro causa `ValueError`. Misturar texto e número sem conversão explícita também pode causar erro ou produzir uma representação diferente do esperado.

## ✅ Boas práticas

Defina o tipo esperado na fronteira de entrada, escolha nomes descritivos e mantenha cada variável com um significado estável. Não use `float` para representar dinheiro real sem entender arredondamento e requisitos do domínio.

## 🧪 Exercícios

- [Média de três notas](../../../exercises/average-of-three-grades.md)
- [Classificador de idade](../../../exercises/age-classifier.md)

## ➡️ Próximos passos

Estude [controle de fluxo](./control-flow.md) e revise [condicionais](../../../fundamentals/conditionals.md).

## 📚 Referências

- [Python — Built-in Types](https://docs.python.org/3/library/stdtypes.html)
- [Python — Lexical analysis](https://docs.python.org/3/reference/lexical_analysis.html)

[Voltar para Python](../README.md) · [Voltar para fundamentos](../../../fundamentals/README.md)
