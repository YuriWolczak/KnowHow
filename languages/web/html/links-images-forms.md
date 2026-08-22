# Links, imagens e formulários em HTML

> Como criar navegação, incluir imagens e representar entrada de dados com elementos apropriados.

## 🎯 Objetivo

Usar links descritivos, imagens com texto alternativo e campos de formulário associados a rótulos.

## 📋 Pré-requisitos

Leia [estrutura básica e semântica](./structure-and-semantics.md).

## Links

```html
<a href="/fundamentals/README.md">Estudar fundamentos</a>
```

O texto do link deve explicar o destino. Evite “clique aqui” quando for possível nomear o recurso. Em um site publicado, o caminho final deve respeitar a estrutura e a política de navegação do site.

## Imagens

```html
<figure>
  <img src="diagram.png" alt="Fluxo que conecta conceito, exemplo, exercício e projeto">
  <figcaption>Uma trilha transforma teoria em prática.</figcaption>
</figure>
```

O atributo `alt` descreve a informação relevante para quem não vê a imagem. Imagens meramente decorativas podem ter texto alternativo vazio, desde que isso seja uma decisão de acessibilidade consciente.

## Formulários

```html
<form>
  <label for="email">E-mail</label>
  <input id="email" name="email" type="email" autocomplete="email" required>
  <button type="submit">Enviar</button>
</form>
```

O `label` associa o texto ao campo. O tipo, o nome e a obrigatoriedade ajudam o navegador e tecnologias assistivas, mas não substituem validação no servidor quando dados forem enviados a um sistema.

## ⚠️ Erros comuns

Usar uma imagem sem `alt`, um link cujo texto não explica o destino ou um campo sem `label` dificulta a navegação. Também não use atributos de validação do navegador como único mecanismo de segurança.

## ✅ Boas práticas

Escreva links descritivos, mantenha a ordem de foco lógica, associe rótulos a campos e teste o documento com teclado e ferramentas de acessibilidade.

## ➡️ Próximos passos

Estude [CSS](../css/README.md) para apresentação e [JavaScript](../javascript/README.md) para comportamento.

## 📚 Referências

- [MDN — HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [MDN — Forms and buttons in HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms)

[Voltar para HTML](./README.md) · [Voltar para Web](../README.md)
