# Condicionais

> Condicionais permitem que um programa escolha caminhos diferentes conforme uma condição.

## 🎯 Objetivo

Aprender a representar decisões, ordenar regras e testar caminhos alternativos.

## 📋 Pré-requisitos

Leia [operadores, entrada e saída](./operators-input-output.md).

## 🧠 Como funciona?

Uma condição é uma expressão que pode ser avaliada como verdadeira ou falsa. O programa executa um bloco quando a condição é verdadeira e pode executar outro quando ela é falsa.

```python
idade = 20

if idade >= 18:
    mensagem = "maior de idade"
else:
    mensagem = "menor de idade"

print(mensagem)
```

Os dois pontos e a indentação fazem parte da sintaxe de Python. Em outra linguagem, a forma de escrever pode mudar, mas a ideia de decisão permanece.

## 🔎 Ordem das regras

Quando há mais de uma condição, a ordem importa. Regras específicas devem ser avaliadas antes de regras gerais quando uma puder esconder a outra.

```python
nota = 8

if nota < 0 or nota > 10:
    resultado = "inválida"
elif nota >= 7:
    resultado = "aprovado"
else:
    resultado = "não aprovado"
```

## ⚠️ Erros comuns

Usar `=` quando a linguagem espera comparação, esquecer casos inválidos e criar condições que se sobrepõem são erros frequentes. Teste limites como `0`, `7` e `10`, não apenas valores intermediários.

## ✅ Boas práticas

Escreva as regras em linguagem natural antes do código, mantenha condições curtas e extraia uma função quando a decisão crescer demais. Dê nomes aos resultados para separar regra de apresentação.

## 🧪 Exercícios

- [Maior de três números](../exercises/largest-of-three-numbers.md)
- [Classificador de idade](../exercises/age-classifier.md)

## ➡️ Próximos passos

Estude [loops](./loops.md) para repetir ações sem copiar o mesmo bloco.

[Voltar para fundamentos](./README.md) · [Voltar para a trilha](../docs/learning-paths/fundamentals.md)
