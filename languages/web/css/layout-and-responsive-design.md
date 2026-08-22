# Layout e responsividade em CSS

> Como distribuir elementos e adaptar uma interface a diferentes larguras de tela.

## 🎯 Objetivo

Conhecer Flexbox, Grid e media queries como ferramentas para organizar layout sem prender a interface a um único tamanho.

## 📋 Pré-requisitos

Leia [seletores, cascata e box model](./selectors-cascade-box-model.md) e [estrutura HTML](../html/structure-and-semantics.md).

## Flexbox e Grid

Flexbox é útil para distribuir elementos em uma dimensão; Grid é útil para organizar linhas e colunas em duas dimensões. A escolha deve seguir o problema, não uma preferência absoluta.

```css
.page {
  display: grid;
  grid-template-columns: 16rem 1fr;
  gap: 2rem;
}

@media (max-width: 48rem) {
  .page {
    grid-template-columns: 1fr;
  }
}
```

Em telas menores, a coluna lateral passa a ocupar uma linha. A unidade `rem` relaciona o tamanho à fonte raiz, mas o resultado visual também depende das configurações do navegador e do restante do CSS.

## ⚠️ Erros comuns

Criar layouts com posições absolutas para tudo, depender de um único breakpoint ou esconder conteúdo em telas pequenas pode tornar a interface frágil e inacessível.

## ✅ Boas práticas

Comece pelo conteúdo, use layout fluido, teste larguras intermediárias e preserve leitura, foco e ordem de navegação. Responsividade inclui comportamento e acessibilidade, não apenas reduzir dimensões.

## ➡️ Próximos passos

Estude [JavaScript](../javascript/README.md) quando a página precisar reagir a ações do usuário.

## 📚 Referências

- [MDN — CSS layout](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout)
- [MDN — Responsive web design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)

[Voltar para CSS](./README.md) · [Voltar para Web](../README.md)
