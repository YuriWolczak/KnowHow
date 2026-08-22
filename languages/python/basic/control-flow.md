# Controle de fluxo em Python

> Como executar blocos diferentes e repetir ações em Python 3.

## 🎯 Objetivo

Usar `if`, `elif`, `else`, `for` e `while` com condições e limites explícitos.

## 📋 Pré-requisitos

Leia [condicionais](../../../fundamentals/conditionals.md), [loops](../../../fundamentals/loops.md) e [sintaxe, variáveis e tipos](./syntax-variables-types.md).

## Condicionais

```python
idade = 20

if idade < 0:
    resultado = "idade inválida"
elif idade >= 18:
    resultado = "maior de idade"
else:
    resultado = "menor de idade"

print(resultado)
```

As condições são verificadas de cima para baixo. Quando uma é verdadeira, o bloco correspondente é executado e as seguintes não são avaliadas naquela cadeia.

## Loop `for`

```python
for numero in range(1, 4):
    print(numero)
```

`range(1, 4)` produz 1, 2 e 3. O limite final é exclusivo.

## Loop `while`

```python
contador = 3
while contador > 0:
    print(contador)
    contador -= 1
```

O estado de `contador` muda a cada repetição, garantindo que a condição se torne falsa. Em loops reais, trate também encerramento, entradas inválidas e o caso de coleção vazia.

## ⚠️ Erros comuns

Confundir o limite final de `range`, esquecer a atualização em `while` e misturar muitas condições em um único bloco são problemas frequentes.

## ✅ Boas práticas

Dê nomes às regras importantes, teste limites e extraia funções quando o bloco começar a ter mais de uma responsabilidade.

## 🧪 Exercícios

- [Maior de três números](../../../exercises/largest-of-three-numbers.md)
- [Classificador de idade](../../../exercises/age-classifier.md)
- [Contador de vogais](../../../exercises/vowel-counter.md)

## ➡️ Próximos passos

Estude [funções em Python](./functions.md) para encapsular partes reutilizáveis.

[Voltar para Python](../README.md) · [Voltar para fundamentos](../../../fundamentals/README.md)
