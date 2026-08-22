# Introdução a algoritmos e complexidade

> Complexidade ajuda a estimar como o custo de uma solução cresce quando o tamanho da entrada aumenta.

## 🎯 Objetivo

Entender por que duas soluções corretas podem ter custos diferentes e reconhecer a notação de crescimento como uma ferramenta de comparação.

## 📋 Pré-requisitos

Leia [algoritmos](./algorithms.md), [loops](./loops.md) e [estruturas de dados](./data-structures.md).

## 🧠 Custo de uma solução

Ao analisar um algoritmo, podemos perguntar quanto tempo ele precisa ou quanta memória usa. A resposta exata depende de hardware, implementação e entrada; por isso, introduções costumam observar como o custo cresce com `n`, o tamanho da entrada.

Um loop que percorre `n` itens tende a realizar uma quantidade de trabalho proporcional a `n`, chamada de **O(n)**. Dois loops aninhados que percorrem os mesmos `n` itens tendem a produzir **O(n²)**. Essas classificações descrevem crescimento aproximado, não segundos exatos.

```python
def contem_valor(valores, alvo):
    for valor in valores:
        if valor == alvo:
            return True
    return False
```

No pior caso, a função percorre todos os itens: seu trabalho cresce linearmente com a quantidade de valores.

## ⚠️ Erros comuns

Dizer que O(n) sempre é rápido ou que O(n²) sempre é inaceitável ignora o tamanho real da entrada, constantes, memória e requisitos. Complexidade é uma ferramenta de decisão, não um selo absoluto de qualidade.

## ✅ Boas práticas

Defina o que é `n`, indique se está analisando melhor, médio ou pior caso quando relevante e meça o programa quando performance for importante. Primeiro busque correção e clareza; otimize com evidência.

## 🧪 Exercícios e projetos

- [Maior de três números](../exercises/largest-of-three-numbers.md)
- [Contador de vogais](../exercises/vowel-counter.md)
- [Lista de tarefas](../projects/beginner/task-list.md)

## ➡️ Próximos passos

Aprofunde busca, ordenação e estruturas de dados quando a trilha de fundamentos for expandida.

[Voltar para fundamentos](./README.md) · [Voltar para a trilha](../docs/learning-paths/fundamentals.md)
