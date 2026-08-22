# Maior de três números

> 🟢 Básico — identifique o maior valor entre três números.

## 🎯 Objetivo

Praticar comparações, condicionais e tratamento de empate.

## 📚 Conceitos praticados

- operadores relacionais;
- condicionais;
- valores iguais;
- saída clara.

## 📝 Problema

Leia três números e informe o maior valor. Se os três forem iguais, informe que existe um empate entre eles.

## 📋 Requisitos

1. Aceitar números inteiros.
2. Comparar os três valores.
3. Informar o maior número.
4. Tratar o caso em que todos são iguais.

## 💡 Exemplos

```text
Entrada: 4, 9, 2
Saída: Maior: 9

Entrada: 5, 5, 5
Saída: Os três números são iguais.
```

## ⚠️ Restrições

Não assuma que o primeiro número é o maior. Valores negativos também devem ser tratados corretamente.

## 🧠 Dicas

1. Comece usando o primeiro valor como candidato.
2. Compare o candidato com os demais.
3. Pense separadamente no caso de igualdade total.

## ✅ Solução em Python

```python
def maior_de_tres(a, b, c):
    if a == b == c:
        return None
    return max(a, b, c)

resultado = maior_de_tres(4, 9, 2)
if resultado is None:
    print("Os três números são iguais.")
else:
    print(f"Maior: {resultado}")
```

`max` resolve a comparação depois que o caso especial foi identificado. Retornar `None` comunica que não existe um único maior no caso de empate total.

## ➡️ Próximos passos

Adapte a solução para informar também quantas vezes o maior valor aparece.

[Voltar para exercícios](./README.md) · [Ver condicionais](../fundamentals/conditionals.md)
