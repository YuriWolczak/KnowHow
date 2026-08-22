# Estrutura básica e semântica em HTML

> Como estruturar uma página e escolher elementos que comuniquem o significado do conteúdo.

## 🎯 Objetivo

Criar um documento HTML mínimo, diferenciar estrutura de apresentação e usar elementos semânticos básicos.

## 📋 Pré-requisitos

Conheça arquivos e diretórios e leia a [trilha Web](../README.md).

## 🧠 Estrutura de um documento

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Minha primeira página</title>
  </head>
  <body>
    <header>
      <h1>Knowledge Base</h1>
    </header>
    <main>
      <p>Aprender programação exige prática e explicações claras.</p>
    </main>
  </body>
</html>
```

`<!doctype html>` informa o tipo de documento ao navegador. `html` envolve o documento, `head` reúne metadados e `body` contém o conteúdo apresentado. `header`, `main` e `h1` carregam significado além de aparência.

## ❓ Por que semântica importa?

Elementos semânticos ajudam navegadores, tecnologias assistivas, mecanismos de busca e pessoas a entenderem a estrutura. Escolher um elemento por sua aparência, como usar uma sequência de `div` para tudo, pode esconder a intenção do documento.

## ⚠️ Erros comuns

Usar vários `<h1>` sem uma estrutura coerente, colocar conteúdo visível no `<head>` ou usar HTML para definir cores e espaçamentos mistura responsabilidades. Estilos pertencem ao CSS.

## ✅ Boas práticas

Mantenha um idioma declarado, use títulos em ordem lógica, associe conteúdo ao elemento que melhor descreve seu significado e escreva texto alternativo para imagens informativas.

## ➡️ Próximos passos

Estude [links, imagens e formulários](./links-images-forms.md) e depois a trilha de [CSS](../css/README.md).

## 📚 Referências

- [MDN — Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)
- [WHATWG — HTML Living Standard](https://html.spec.whatwg.org/)

[Voltar para HTML](./README.md) · [Voltar para Web](../README.md)
