# Média de três notas

> 🟢 Básico — calcule a média aritmética de três notas.

## 🎯 Objetivo

Praticar entrada, números, operadores e apresentação de uma saída formatada.

## 📚 Conceitos praticados

- variáveis;
- entrada e saída;
- soma e divisão;
- validação simples.

## 📝 Problema

Leia três notas e mostre a média aritmética entre elas. Considere notas válidas no intervalo de 0 a 10.

## 📋 Requisitos

1. Ler três valores numéricos.
2. Rejeitar uma nota menor que 0 ou maior que 10.
3. Exibir a média com duas casas decimais.

## 💡 Exemplos

```text
Entrada: 8, 7, 9
Saída: Média: 8.00
```

## ⚠️ Restrições

O programa deve informar a entrada inválida em vez de calcular uma média com ela. Não arredonde cada nota antes de calcular.

## 🧠 Dicas

1. Guarde as três notas em variáveis.
2. Valide cada valor.
3. Some as notas e divida por 3.
4. Formate apenas a saída.

## ✅ Solução em Python

```python
def calcular_media(notas):
    if len(notas) != 3:
        raise ValueError("informe exatamente três notas")
    if any(nota < 0 or nota > 10 for nota in notas):
        raise ValueError("as notas devem estar entre 0 e 10")
    return sum(notas) / len(notas)

notas = [8.0, 7.0, 9.0]
media = calcular_media(notas)
print(f"Média: {media:.2f}")
```

A função separa a regra de cálculo da entrada e da apresentação. O exemplo usa valores fixos para que a lógica possa ser testada sem depender de interação.

## ➡️ Próximos passos

Tente adaptar o exercício para ler as notas com `input` e tratar conversões inválidas com base em [tratamento de erros em Python](../languages/python/basic/error-handling.md).

[Voltar para exercícios](./README.md) · [Ver variáveis e tipos](../fundamentals/variables-and-data-types.md)
