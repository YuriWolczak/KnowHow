# Classificador de idade

> 🟢 Básico — classifique uma idade válida usando regras claras.

## 🎯 Objetivo

Praticar condicionais, validação e a importância de definir limites antes de implementar.

## 📚 Conceitos praticados

- operadores relacionais;
- condicionais;
- validação de domínio;
- mensagens de saída.

## 📝 Problema

Receba uma idade em anos completos e classifique-a como `criança` (0 a 11), `adolescente` (12 a 17) ou `adulto` (18 ou mais).

## 📋 Requisitos

1. Aceitar apenas idades inteiras.
2. Rejeitar valores negativos.
3. Aplicar os limites exatamente como descritos.

## 💡 Exemplos

```text
Entrada: 10
Saída: criança

Entrada: 15
Saída: adolescente

Entrada: 18
Saída: adulto
```

## ⚠️ Restrições

Não crie uma categoria para valores negativos: eles representam entrada inválida. A classificação não define regras legais ou médicas; é apenas um exercício de lógica.

## 🧠 Dicas

Teste primeiro os limites `0`, `11`, `12`, `17` e `18`. Depois escreva as condições em ordem crescente.

## ✅ Solução em Python

```python
def classificar_idade(idade):
    if idade < 0:
        raise ValueError("a idade não pode ser negativa")
    if idade <= 11:
        return "criança"
    if idade <= 17:
        return "adolescente"
    return "adulto"

print(classificar_idade(15))
```

A validação acontece antes da classificação. Depois que a idade não é negativa, basta verificar os limites superiores em ordem.

## ➡️ Próximos passos

Adapte a função para receber uma lista de idades e contar quantas pessoas existem em cada categoria.

[Voltar para exercícios](./README.md) · [Ver condicionais](../fundamentals/conditionals.md)
