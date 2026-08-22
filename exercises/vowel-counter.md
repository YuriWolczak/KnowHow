# Contador de vogais

> 🟢 Básico — conte quantas vogais aparecem em um texto.

## 🎯 Objetivo

Praticar strings, loops, normalização de texto e contagem.

## 📚 Conceitos praticados

- iteração sobre texto;
- comparação;
- conjuntos;
- contadores.

## 📝 Problema

Receba uma frase e conte as vogais `a`, `e`, `i`, `o` e `u`, ignorando diferenças entre maiúsculas e minúsculas. Nesta primeira versão, trate apenas essas cinco vogais sem acento.

## 📋 Requisitos

1. Aceitar espaços e pontuação.
2. Não contar consoantes ou números.
3. Ser indiferente a maiúsculas e minúsculas.

## 💡 Exemplos

```text
Entrada: "Python é legal"
Saída: 4
```

A contagem do exemplo considera apenas `o`, `e`, `e`, `a`; caracteres acentuados ficam fora do escopo inicial.

## ⚠️ Restrições

Não remova caracteres sem explicar a consequência. Se quiser contar `á`, `é` e outras vogais acentuadas, trate isso como extensão.

## 🧠 Dicas

1. Normalize a frase com `.lower()`.
2. Use um conjunto com as vogais válidas.
3. Percorra cada caractere e incremente o contador quando ele estiver no conjunto.

## ✅ Solução em Python

```python
def contar_vogais(texto):
    vogais = set("aeiou")
    return sum(1 for caractere in texto.lower() if caractere in vogais)

print(contar_vogais("Python e legal"))
```

A expressão percorre o texto, gera 1 apenas para caracteres que pertencem ao conjunto e soma os resultados. O exemplo de chamada usa texto sem acento para permanecer dentro do escopo declarado.

## ➡️ Próximos passos

Crie uma versão que conte cada vogal separadamente e outra que trate vogais acentuadas conscientemente.

[Voltar para exercícios](./README.md) · [Ver loops](../fundamentals/loops.md) · [Ver coleções em Python](../languages/python/basic/collections.md)
