# Algoritmos

> Um algoritmo é uma sequência finita e organizada de passos para resolver um problema ou produzir um resultado.

## 🎯 Objetivo

Aprender a transformar um problema em passos claros, identificar entradas e saídas e perceber que uma solução pode ser correta mesmo antes de virar código.

## 📋 Pré-requisitos

Leia [o que é programação](./what-is-programming.md).

## 🧠 O que é?

Um algoritmo precisa ser suficientemente preciso para que seus passos possam ser seguidos e verificados. Ele deve indicar o que fazer, em que ordem e, quando necessário, como tratar situações diferentes.

Para calcular a média de três notas, uma descrição possível é:

1. receber três notas;
2. somar os valores;
3. dividir a soma por três;
4. mostrar o resultado.

Essa descrição ainda não escolhe Python, JavaScript ou outra linguagem. Ela representa a ideia antes da sintaxe.

## ❓ Por que isso existe?

Problemas mal definidos produzem código confuso. Escrever o algoritmo primeiro permite encontrar ambiguidades, testar exemplos manualmente e discutir a solução sem depender de uma ferramenta específica.

## 🔎 Propriedades úteis

Um algoritmo deve ter início e fim identificáveis, passos que possam ser executados, uma relação clara entre entrada e saída e tratamento para casos relevantes. “Faça algo inteligente” não é um passo verificável; “compare o valor com zero” é mais preciso.

## 💻 Exemplo em pseudocódigo

```text
ler nota_1, nota_2, nota_3
soma ← nota_1 + nota_2 + nota_3
media ← soma / 3
exibir media
```

O pseudocódigo não precisa obedecer à sintaxe de uma linguagem. Ele serve para discutir a sequência e as decisões antes da implementação.

## ⚠️ Erros comuns

Confundir algoritmo com código é comum. Código é uma representação executável em uma linguagem; algoritmo é a solução organizada. Outro erro é ignorar casos de entrada, como notas fora do intervalo ou dados ausentes.

## ✅ Boas práticas

Comece com um exemplo concreto, descreva os passos em linguagem simples, procure ambiguidades e só depois implemente. Reescreva o algoritmo quando a experiência com os exemplos revelar uma regra faltante.

## 🧪 Exercícios

- [Média de três notas](../exercises/average-of-three-grades.md)
- [Maior de três números](../exercises/largest-of-three-numbers.md)
- [Classificador de idade](../exercises/age-classifier.md)

## ➡️ Próximos passos

Estude [lógica de programação](./programming-logic.md) para representar decisões, repetições e decomposição com mais precisão.

[Voltar para fundamentos](./README.md) · [Voltar para a trilha](../docs/learning-paths/fundamentals.md)
