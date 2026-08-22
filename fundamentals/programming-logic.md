# Lógica de programação

> Lógica de programação é a organização de regras e passos para que uma solução produza o resultado esperado.

## 🎯 Objetivo

Aprender a decompor problemas em decisões, sequências e repetições que possam ser implementadas e testadas.

## 📋 Pré-requisitos

Leia [algoritmos](./algorithms.md).

## 🧠 Como pensar sobre um problema

Uma solução costuma combinar três estruturas:

- **sequência**: passos executados em ordem;
- **decisão**: um caminho escolhido conforme uma condição;
- **repetição**: um conjunto de passos executado enquanto uma regra for válida.

Antes de escolher a sintaxe, pergunte: quais dados entram, quais regras precisam ser aplicadas, qual resultado deve sair e o que acontece nos casos de limite?

## 💻 Exemplo: aprovação

```text
ler nota
se nota < 0 ou nota > 10:
    informar entrada inválida
senão se nota >= 7:
    informar aprovado
senão:
    informar recuperação ou reprovação conforme a regra definida
```

A regra precisa ser completada pelo contexto. Não invente o significado de “recuperação”: registre-o como requisito antes de escrever código.

## 🔎 Tabelas de decisão

Quando há várias condições, uma tabela pode revelar lacunas:

| Nota | Resultado |
| ---: | --- |
| Menor que 0 ou maior que 10 | Entrada inválida |
| De 7 a 10 | Aprovado |
| De 0 a 6,99 | Regra adicional necessária |

O último caso mostra que uma especificação incompleta não deve ser escondida dentro de um `else`.

## ⚠️ Erros comuns

Misturar regras diferentes na mesma expressão torna a leitura difícil. Também é perigoso assumir que toda entrada será válida. Validação não é um detalhe visual: ela faz parte do comportamento do programa.

## ✅ Boas práticas

Nomeie regras, use exemplos, trate casos de fronteira e divida problemas grandes em partes pequenas. Teste pelo menos um exemplo de cada caminho possível.

## 🧪 Exercícios

- [Classificador de idade](../exercises/age-classifier.md)
- [Maior de três números](../exercises/largest-of-three-numbers.md)

## ➡️ Próximos passos

Estude [variáveis e tipos de dados](./variables-and-data-types.md) para representar os dados que participam das regras.

[Voltar para fundamentos](./README.md) · [Voltar para a trilha](../docs/learning-paths/fundamentals.md)
