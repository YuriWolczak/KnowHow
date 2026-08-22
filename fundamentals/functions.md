# Funções

> Uma função reúne um comportamento nomeado para que ele possa ser compreendido, testado e reutilizado.

## 🎯 Objetivo

Aprender a dividir uma solução em partes, definir entradas e retornos e escolher responsabilidades claras.

## 📋 Pré-requisitos

Leia [loops](./loops.md) e [variáveis e tipos de dados](./variables-and-data-types.md).

## 🧠 O que uma função oferece?

Uma função pode receber parâmetros, executar passos e devolver um resultado. Ela funciona como um contrato: quem chama fornece entradas no formato esperado e recebe uma saída definida.

```python
def calcular_media(notas):
    return sum(notas) / len(notas)

resultado = calcular_media([8, 7, 9])
print(resultado)
```

A função tem uma responsabilidade específica. Ela calcula, mas não decide como o resultado será exibido.

## 🔎 Parâmetros e retorno

Parâmetros são nomes usados dentro da função para representar entradas. `return` encerra a execução daquela chamada e devolve um valor. Uma função pode não retornar um valor útil, mas isso deve ser uma decisão clara.

## ⚠️ Erros comuns

Funções que fazem muitas coisas ficam difíceis de testar. Também é comum depender de variáveis globais sem necessidade ou esquecer de tratar uma entrada vazia, como `notas = []` no exemplo.

## ✅ Boas práticas

Nomeie funções com verbos ou ações, mantenha uma responsabilidade principal, valide entradas quando a função for uma fronteira importante e documente pré-condições. Prefira dados explícitos a efeitos escondidos.

## 🧪 Exercícios e projetos

- [Média de três notas](../exercises/average-of-three-grades.md)
- [Lista de tarefas em Python](../exercises/python-todo-list.md)
- [Controle de despesas pessoais](../projects/beginner/expense-tracker.md)

## ➡️ Próximos passos

Estude [estruturas de dados](./data-structures.md) para escolher como agrupar valores e passá-los entre funções.

[Voltar para fundamentos](./README.md) · [Voltar para a trilha](../docs/learning-paths/fundamentals.md)
