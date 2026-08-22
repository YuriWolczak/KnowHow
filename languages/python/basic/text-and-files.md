# Texto e arquivos em Python

> Strings representam texto; arquivos permitem persistir dados fora da memória do programa.

## 🎯 Objetivo

Manipular texto, ler e gravar um arquivo simples e reconhecer erros de caminho e codificação.

## 📋 Pré-requisitos

Leia [coleções em Python](./collections.md) e [operadores, entrada e saída](../../../fundamentals/operators-input-output.md).

## Strings

Strings são sequências de caracteres e podem ser percorridas ou transformadas:

```python
mensagem = "Python"
print(mensagem.lower())
print(len(mensagem))
```

Operações como `lower` criam um novo texto; elas não alteram a string original, porque strings são imutáveis em Python.

## Arquivos

Use um gerenciador de contexto para garantir que o arquivo seja fechado:

```python
from pathlib import Path

caminho = Path("anotacoes.txt")
caminho.write_text("Estudar funções\n", encoding="utf-8")
conteudo = caminho.read_text(encoding="utf-8")
print(conteudo)
```

O exemplo grava no diretório de trabalho atual. Em um programa real, valide caminhos e não sobrescreva arquivos importantes sem uma decisão explícita.

## ⚠️ Erros comuns

Assumir que o arquivo existe, usar o diretório errado, ignorar a codificação e sobrescrever dados acidentalmente são problemas frequentes. Entrada de arquivo é uma fronteira: trate falhas de permissão e ausência.

## ✅ Boas práticas

Use `pathlib`, declare `encoding="utf-8"` quando o formato exigir, documente o diretório esperado e prefira operações atômicas ou backups quando os dados forem importantes.

## 🧪 Exercícios e projetos

- [Lista de tarefas em Python](../../../exercises/python-todo-list.md)
- [Controle de despesas pessoais](../../../projects/beginner/expense-tracker.md)

## ➡️ Próximos passos

Estude [tratamento de erros](./error-handling.md).

## 📚 Referências

- [Python — pathlib](https://docs.python.org/3/library/pathlib.html)
- [Python — Text I/O](https://docs.python.org/3/library/io.html)

[Voltar para Python](../README.md) · [Voltar para fundamentos](../../../fundamentals/README.md)
