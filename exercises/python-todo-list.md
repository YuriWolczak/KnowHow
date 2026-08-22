# Lista de tarefas em Python

> 🟡 Intermediário — gerencie tarefas em memória com operações bem separadas.

## 🎯 Objetivo

Praticar listas, dicionários, funções, busca e validação em um problema com mais de uma operação.

## 📚 Conceitos praticados

- listas e dicionários;
- funções;
- busca por identificador;
- validação de entrada;
- separação de responsabilidades.

## 📝 Problema

Crie um módulo que permita adicionar tarefas, listar tarefas, concluir uma tarefa e remover uma tarefa. Cada tarefa deve ter um identificador inteiro, uma descrição não vazia e o estado `concluida`.

## 📋 Requisitos

1. Adicionar uma tarefa com identificador único.
2. Listar tarefas na ordem em que foram adicionadas.
3. Marcar uma tarefa existente como concluída.
4. Remover uma tarefa existente.
5. Informar claramente quando o identificador não existe.

## 💡 Exemplos

```text
Adicionar: "Estudar funções"
Listar: [1] Estudar funções — pendente
Concluir: 1
Listar: [1] Estudar funções — concluída
```

## ⚠️ Restrições

A primeira versão não precisa de banco de dados ou interface gráfica. Os dados podem existir apenas durante a execução. Não aceite descrição vazia.

## 🧠 Dicas

1. Escolha uma representação para a tarefa.
2. Centralize a busca por identificador em uma função.
3. Faça cada operação devolver um resultado claro ou lançar um erro específico.
4. Teste lista vazia e identificador inexistente.

## ✅ Solução de referência em Python

```python

def adicionar_tarefa(tarefas, proximo_id, descricao):
    descricao = descricao.strip()
    if not descricao:
        raise ValueError("a descrição não pode ser vazia")

    tarefa = {"id": proximo_id, "descricao": descricao, "concluida": False}
    tarefas.append(tarefa)
    return proximo_id + 1


def encontrar_tarefa(tarefas, tarefa_id):
    for tarefa in tarefas:
        if tarefa["id"] == tarefa_id:
            return tarefa
    raise LookupError("tarefa não encontrada")


def concluir_tarefa(tarefas, tarefa_id):
    tarefa = encontrar_tarefa(tarefas, tarefa_id)
    tarefa["concluida"] = True


tarefas = []
proximo_id = 1
proximo_id = adicionar_tarefa(tarefas, proximo_id, "Estudar funções")
concluir_tarefa(tarefas, 1)
print(tarefas)
```

A solução mantém a lista como armazenamento temporário e separa adicionar, buscar e concluir. A próxima evolução pode persistir os dados, mas isso só deve ser feito depois de validar o comportamento em memória.

## ➡️ Próximos passos

Transforme a solução em um programa interativo e depois compare a persistência em arquivo com um banco de dados.

[Voltar para exercícios](./README.md) · [Ver funções](../fundamentals/functions.md) · [Ver projeto de lista de tarefas](../projects/beginner/task-list.md)
