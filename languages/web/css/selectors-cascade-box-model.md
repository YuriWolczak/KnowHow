# Seletores, cascata e box model em CSS

> Como selecionar elementos HTML e entender as regras que definem aparência e espaço ocupado.

## 🎯 Objetivo

Escrever regras CSS simples, entender a cascata e reconhecer conteúdo, padding, borda e margem no box model.

## 📋 Pré-requisitos

Leia [estrutura básica e semântica em HTML](../html/structure-and-semantics.md).

## Seletores e regras

```html
<p class="note">Leia o conceito antes de praticar.</p>
```

```css
.note {
  padding: 1rem;
  border: 1px solid #888;
  color: #222;
}
```

`.note` seleciona elementos que possuem a classe `note`. A regra contém propriedades e valores. O HTML continua responsável por dizer que o conteúdo é um parágrafo.

## Cascata

Quando mais de uma regra se aplica, o navegador resolve conflitos usando origem, importância, especificidade e ordem, conforme as regras da linguagem. A solução não deve ser empilhar `!important` sem entender o conflito.

## Box model

O espaço de um elemento pode ser pensado como conteúdo, `padding`, borda e `margin`. A aparência final depende também do contexto de layout e do tamanho disponível; não reduza o modelo a uma fórmula isolada sem considerar `box-sizing` e o fluxo do documento.

```css
* {
  box-sizing: border-box;
}
```

Essa escolha faz a largura e a altura declaradas incluírem padding e borda, o que torna muitos cálculos mais previsíveis.

## ⚠️ Erros comuns

Usar seletores excessivamente específicos, corrigir todos os conflitos com `!important` e definir dimensões rígidas para todo elemento dificultam manutenção e responsividade.

## ✅ Boas práticas

Prefira classes reutilizáveis, mantenha a especificidade baixa, escolha unidades adequadas ao contexto e teste em mais de um tamanho de tela.

## ➡️ Próximos passos

Estude [layout e responsividade](./layout-and-responsive-design.md).

## 📚 Referências

- [MDN — CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)
- [MDN — Introduction to the CSS box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

[Voltar para CSS](./README.md) · [Voltar para Web](../README.md)
