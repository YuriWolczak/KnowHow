# Sintaxe e interação básica em JavaScript

> Como declarar um comportamento simples e reagir a uma ação do usuário em uma página.

## 🎯 Objetivo

Reconhecer variáveis, funções e eventos em JavaScript no navegador.

## 📋 Pré-requisitos

Leia [estrutura HTML](../html/structure-and-semantics.md) e [seletores e box model](../css/selectors-cascade-box-model.md). A lógica geral de funções e condicionais está em [Fundamentals](../../../fundamentals/functions.md).

## Código básico

```html
<button id="greet-button" type="button">Saudar</button>
<p id="message" aria-live="polite"></p>
<script>
  const button = document.querySelector("#greet-button");
  const message = document.querySelector("#message");

  button.addEventListener("click", () => {
    message.textContent = "Olá!";
  });
</script>
```

`querySelector` encontra elementos no documento. `addEventListener` registra uma função para ser chamada quando o evento `click` acontecer. `textContent` altera o texto, sem interpretar a string como HTML.

## 🔎 Estado e comportamento

O estado inicial é um parágrafo vazio. O clique dispara uma transição para o estado em que a mensagem está preenchida. Essa forma de pensar conecta a interação Web aos fundamentos de entrada, processamento e saída.

## ⚠️ Erros comuns

Executar o script antes de os elementos existirem, usar `innerHTML` sem necessidade e ignorar teclado ou foco pode gerar comportamento incorreto ou problemas de segurança e acessibilidade.

## ✅ Boas práticas

Use elementos HTML apropriados, declare `type="button"` quando o botão não envia um formulário, preserve foco e escreva apenas o texto necessário com `textContent`.

## ➡️ Próximos passos

Estude DOM, eventos de formulário, módulos e requisições HTTP. Depois, compare JavaScript no navegador com JavaScript em outros ambientes.

## 📚 Referências

- [MDN — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [MDN — EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [ECMAScript Language Specification](https://tc39.es/ecma262/)

[Voltar para JavaScript](./README.md) · [Voltar para Web](../README.md)
