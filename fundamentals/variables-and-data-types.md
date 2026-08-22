# Variáveis e tipos de dados

> Variáveis dão nomes a valores; tipos ajudam a definir que valores são esses e quais operações fazem sentido.

## 🎯 Objetivo

Entender como programas armazenam dados, diferenciar tipos básicos e escolher nomes que comuniquem intenção.

## 📋 Pré-requisitos

Leia [lógica de programação](./programming-logic.md).

## 🧠 Variáveis

Uma variável é um nome associado a um valor durante a execução. O nome reduz a necessidade de trabalhar apenas com valores soltos e torna o algoritmo mais legível.

```python
nome = "Ana"
idade = 28
```

Aqui, `nome` referencia texto e `idade` referencia um número inteiro. O significado não está apenas no valor; está também no nome escolhido.

## Tipos comuns

| Tipo conceitual | Exemplo | Uso comum |
| --- | --- | --- |
| Texto | `"Ana"` | Nomes, mensagens e identificadores |
| Inteiro | `28` | Contagens e valores sem parte decimal |
| Decimal | `7.5` | Medidas ou valores com fração, conforme o domínio |
| Booleano | `True` | Condições de sim/não |
| Coleção | `[1, 2, 3]` | Vários valores relacionados |

Os nomes e detalhes exatos variam entre linguagens. Não trate uma tabela conceitual como uma lista universal de tipos implementados.

## ⚠️ Erros comuns

Usar texto onde uma operação matemática espera número pode gerar erro ou resultado incorreto. Também é comum chamar tudo de `valor`, `x` ou `dado`, escondendo a intenção.

## ✅ Boas práticas

Escolha nomes descritivos, mantenha uma variável com significado estável e valide dados que chegam de fora. Separe representação de significado: `"10"` é texto que contém caracteres, enquanto `10` é um número em Python.

## 🧪 Exercícios

- [Média de três notas](../exercises/average-of-three-grades.md)
- [Classificador de idade](../exercises/age-classifier.md)

## ➡️ Próximos passos

Estude [operadores, entrada e saída](./operators-input-output.md) para transformar e comunicar valores.

[Voltar para fundamentos](./README.md) · [Voltar para a trilha](../docs/learning-paths/fundamentals.md)
