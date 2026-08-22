# Começando com Python

> Primeiro contato com Python 3: entender o ambiente e executar um programa mínimo.

## 🎯 Objetivo

Ao terminar, você deverá saber o que é o interpretador Python, executar um arquivo simples e localizar a documentação oficial.

## 📋 Pré-requisitos

Leia [o que é programação](../../../fundamentals/what-is-programming.md). Você também precisa de um computador no qual possa instalar ou acessar Python 3.

## 🧠 O que é Python?

Python é uma linguagem de propósito geral. Nesta trilha, usaremos a implementação Python 3 e evitaremos assumir detalhes de um sistema operacional específico. A forma de instalação varia; consulte a [página oficial de downloads](https://www.python.org/downloads/) e a documentação do seu sistema.

Verifique a instalação com:

```bash
python3 --version
```

Em alguns ambientes, o comando pode ser `python`. Não altere o sistema às cegas: confirme qual executável o seu ambiente disponibiliza.

## 💻 Primeiro programa

Crie um arquivo chamado `hello.py`:

```python
print("Olá, mundo!")
```

Execute-o a partir do diretório que contém o arquivo:

```bash
python3 hello.py
```

O programa chama `print`, que escreve uma mensagem na saída padrão. Ele não “aprende” o significado de `Olá`; apenas envia os caracteres definidos no código.

## ⚠️ Erros comuns

Executar o comando em outro diretório pode produzir um erro de arquivo não encontrado. Outro problema comum é ter várias instalações de Python e executar uma versão diferente daquela imaginada. Sempre confira `python3 --version` quando a versão importar.

## ✅ Boas práticas

Use arquivos pequenos no início, mantenha o código em um diretório de estudos e registre a versão usada. Não instale pacotes externos antes de entender o ambiente e os ambientes virtuais.

## ➡️ Próximos passos

Estude [sintaxe, variáveis e tipos](./syntax-variables-types.md) e revise [variáveis e tipos de dados](../../../fundamentals/variables-and-data-types.md).

## 📚 Referências

- [Python — Downloads](https://www.python.org/downloads/)
- [Python 3 Documentation](https://docs.python.org/3/)

[Voltar para Python](../README.md) · [Voltar para a trilha de fundamentos](../../../docs/learning-paths/fundamentals.md)
