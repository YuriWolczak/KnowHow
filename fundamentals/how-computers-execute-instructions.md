# Como computadores executam instruções

> Um programa é código armazenado; sua execução é o processo de transformar instruções em efeitos observáveis.

## 🎯 Objetivo

Entender, em nível introdutório, a diferença entre código-fonte, programa em execução, memória, processador e entrada/saída.

## 📋 Pré-requisitos

Leia [o que é programação](./what-is-programming.md).

## 🧠 O que acontece?

O código-fonte é um texto escrito por pessoas. Dependendo da linguagem, um compilador transforma esse texto em outra forma antes da execução, ou um interpretador lê e executa as instruções durante o funcionamento. Na prática, os detalhes variam, mas o programa precisa ser convertido em operações que o ambiente consiga realizar.

Durante a execução, o computador mantém dados temporários na memória e usa o processador para realizar operações. Arquivos, teclado, rede e tela são formas de entrada ou saída que conectam o programa ao mundo externo.

Uma analogia útil é uma cozinha: o código é a receita, o processador realiza os passos, a memória mantém ingredientes e resultados temporários, e a entrada/saída conecta a cozinha ao pedido e ao prato servido. A analogia não substitui os detalhes técnicos, mas ajuda a separar papéis.

## 🔎 Estado e instruções

Um programa pode ser entendido como instruções mais estado. Se o estado muda, a mesma instrução pode produzir outra saída. Por isso, depurar um programa significa muitas vezes descobrir qual valor existia em determinado ponto.

```python
contador = 0
contador = contador + 1
print(contador)
```

O valor de `contador` começa em `0`, é atualizado e depois enviado para a saída. O processador executa operações, mas a linguagem define como representar nomes e valores para que o programa seja compreensível.

## ⚠️ Erros comuns

Dizer que “o computador entende Python diretamente” simplifica demais. Python possui uma implementação que executa o código seguindo regras da linguagem. Diferentes implementações e versões podem ter detalhes distintos, por isso instruções dependentes de ambiente devem declarar seu contexto.

## ✅ Boas práticas

Ao investigar um programa, observe entradas, estado intermediário e saída. Não altere várias partes ao mesmo tempo: uma mudança pequena ajuda a identificar qual instrução causou o efeito.

## 🧪 Exercícios

- [Contador de vogais](../exercises/vowel-counter.md)
- [Média de três notas](../exercises/average-of-three-grades.md)

## ➡️ Próximos passos

Estude [algoritmos](./algorithms.md) para aprender a descrever uma solução antes de implementá-la.

## 📚 Referências

- [Python glossary — Python documentation](https://docs.python.org/3/glossary.html)

[Voltar para fundamentos](./README.md) · [Voltar para a trilha](../docs/learning-paths/fundamentals.md)
