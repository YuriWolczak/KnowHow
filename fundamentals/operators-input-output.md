# Operadores, entrada e saída

> Operadores transformam ou comparam valores; entrada e saída conectam o programa a pessoas, arquivos ou outros sistemas.

## 🎯 Objetivo

Aprender a combinar valores, receber dados e apresentar resultados sem confundir texto com número.

## 📋 Pré-requisitos

Leia [variáveis e tipos de dados](./variables-and-data-types.md).

## Operadores

Operadores aritméticos calculam (`+`, `-`, `*`, `/`), operadores relacionais comparam (`<`, `>`, `==`) e operadores lógicos combinam condições (`and`, `or`, `not` em Python). A disponibilidade e a precedência podem variar entre linguagens.

```python
subtotal = 40
quantidade = 3
total = subtotal * quantidade
```

O resultado de `total` é 120. A expressão deve ser lida considerando o significado das variáveis, não apenas os símbolos.

## Entrada e saída em Python

```python
nome = input("Nome: ")
print(f"Olá, {nome}!")
```

`input` devolve texto. Para receber um número inteiro, é necessário converter explicitamente:

```python
idade = int(input("Idade: "))
```

Essa conversão pode falhar se a pessoa digitar algo que não represente um inteiro. O tratamento desse caso aparece em [tratamento de erros em Python](../languages/python/basic/error-handling.md).

## ⚠️ Erros comuns

Dividir por zero, comparar texto com número ou converter entrada sem validar são problemas frequentes. A saída também pode estar formatada de forma ambígua; uma mensagem clara ajuda a pessoa a interpretar o resultado.

## ✅ Boas práticas

Defina o tipo esperado da entrada, informe o formato pedido, use nomes claros e teste valores normais e inválidos. Separe cálculo e apresentação quando isso facilitar a verificação.

## 🧪 Exercícios

- [Média de três notas](../exercises/average-of-three-grades.md)
- [Conversões na lista de tarefas em Python](../exercises/python-todo-list.md)

## ➡️ Próximos passos

Estude [condicionais](./conditionals.md) para escolher comportamentos diferentes conforme os valores recebidos.

[Voltar para fundamentos](./README.md) · [Voltar para a trilha](../docs/learning-paths/fundamentals.md)
