# Funções em Python

> Como definir comportamentos reutilizáveis com parâmetros e valores de retorno.

## 🎯 Objetivo

Criar funções pequenas, chamar funções com argumentos e diferenciar cálculo de apresentação.

## 📋 Pré-requisitos

Leia [funções](../../../fundamentals/functions.md) e [controle de fluxo](./control-flow.md).

## Definição e retorno

```python
def calcular_media(notas):
    if not notas:
        raise ValueError("é necessário informar ao menos uma nota")
    return sum(notas) / len(notas)

media = calcular_media([8, 7, 9])
print(f"Média: {media:.1f}")
```

A lista é recebida como parâmetro, a função valida o caso vazio e retorna o cálculo. A formatação fica no ponto em que o resultado é apresentado.

## Parâmetros

Parâmetros podem ter valores padrão quando isso expressa uma regra segura:

```python
def saudar(nome, saudacao="Olá"):
    return f"{saudacao}, {nome}!"
```

Um valor padrão não deve esconder uma decisão importante. Se o programa precisa sempre receber um dado, torne-o obrigatório e valide-o.

## ⚠️ Erros comuns

Funções que alteram variáveis globais, imprimem e calculam ao mesmo tempo podem ser difíceis de testar. Também é comum aceitar uma lista vazia sem decidir qual comportamento faz sentido.

## ✅ Boas práticas

Mantenha funções pequenas, nomeie-as como ações, documente contratos relevantes e prefira retornar dados a imprimir dentro da função. Teste entradas normais, vazias e inválidas.

## 🧪 Exercícios e projetos

- [Média de três notas](../../../exercises/average-of-three-grades.md)
- [Lista de tarefas em Python](../../../exercises/python-todo-list.md)
- [Controle de despesas](../../../projects/beginner/expense-tracker.md)

## ➡️ Próximos passos

Estude [coleções em Python](./collections.md).

[Voltar para Python](../README.md) · [Voltar para fundamentos](../../../fundamentals/README.md)
