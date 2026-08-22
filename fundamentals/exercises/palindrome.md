# Palíndromo

> 🟢 Básico — descubra se um texto ou número pode ser lido da mesma forma nos dois sentidos.

## 🎯 Objetivo

Praticar strings, comparação, normalização e decomposição de um problema em etapas.

## 📋 Pré-requisitos

Estude [estruturas de dados](../data-structures.md), [condicionais](../conditionals.md) e [funções](../functions.md).

## 📝 Problema

Receba uma palavra e informe se ela é um palíndromo. Na primeira versão, ignore diferenças entre maiúsculas e minúsculas, mas não remova espaços ou pontuação automaticamente.

```text
Entrada: Arara
Saída: sim

Entrada: computador
Saída: não
```

## ⚠️ Restrições

Defina o comportamento para texto vazio. Uma extensão pode tratar frases ignorando espaços e pontuação, mas essa decisão precisa ser documentada e testada.

## 🧠 Dicas

1. Normalize apenas o que o enunciado permite.
2. Compare o primeiro caractere com o último, depois o segundo com o penúltimo.
3. Você só precisa verificar até o meio do texto.

## ✅ Pseudocódigo de referência

```text
ler texto
texto ← converter para minúsculas
é_palíndromo ← verdadeiro
para índice de 0 até metade do tamanho de texto:
    se texto[índice] ≠ texto[tamanho - 1 - índice]:
        é_palíndromo ← falso
        parar repetição
exibir é_palíndromo
```

## ➡️ Extensões

Implemente uma versão que normalize frases, compare a solução com uma que cria o texto invertido e discuta o custo de tempo e memória de cada abordagem.

[Voltar para exercícios de fundamentos](./README.md) · [Ver estruturas de dados](../data-structures.md)
