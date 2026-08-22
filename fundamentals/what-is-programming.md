# O que é programação?

> Programar é descrever uma solução de forma precisa para que um computador possa executá-la.

## 🎯 Objetivo

Ao terminar, você deverá conseguir explicar o que são instruções, programa, entrada, processamento e saída.

## 📋 Pré-requisitos

Não há pré-requisitos.

## 🧠 O que é?

Um computador executa instruções. **Programação** é o trabalho de analisar um problema, definir uma solução e escrever essas instruções em uma linguagem que ferramentas possam traduzir ou interpretar.

Uma linguagem de programação é um conjunto de regras para representar instruções. Ela não é “o idioma do computador” no sentido literal: programas passam por compiladores, interpretadores ou outros componentes que transformam o código em operações executáveis.

## ❓ Por que isso existe?

Computadores são bons em repetir operações com velocidade e consistência, mas não conhecem por conta própria o objetivo humano. A programação transforma uma necessidade, como calcular uma média ou organizar tarefas, em passos que podem ser verificados.

## 🔎 Um modelo simples

```text
entrada → processamento → saída
```

Para uma média, a entrada pode ser três notas, o processamento é somá-las e dividir por três, e a saída é o resultado. O programa também precisa decidir o que fazer quando uma nota está ausente ou fora do intervalo esperado.

## 💻 Exemplo em Python

```python
notas = [8, 7, 9]
media = sum(notas) / len(notas)
print(media)
```

`notas` representa a entrada disponível, `sum` e a divisão realizam o processamento, e `print` apresenta a saída. A escolha de Python é apenas uma forma concreta de demonstrar a ideia; o modelo existe antes da linguagem.

## ⚠️ Erros comuns

Confundir escrever código com resolver o problema é um erro frequente. Código pode estar sintaticamente correto e ainda calcular a coisa errada. Antes de digitar, descreva o resultado esperado e alguns exemplos.

## ✅ Boas práticas

Comece pelo problema, escreva exemplos pequenos e divida a solução em passos que possam ser explicados. Depois escolha a linguagem e valide o comportamento com entradas diferentes.

## 🧪 Exercícios

- [Média de três notas](../exercises/average-of-three-grades.md)
- [Maior de três números](../exercises/largest-of-three-numbers.md)

## ➡️ Próximos passos

Estude [como computadores executam instruções](./how-computers-execute-instructions.md) para entender o que acontece entre o código e o resultado.

## 📚 Referências

- [Documentação oficial do Python](https://docs.python.org/3/)

[Voltar para fundamentos](./README.md) · [Voltar para a trilha](../docs/learning-paths/fundamentals.md)
