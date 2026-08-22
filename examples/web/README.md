# Exemplo Web — Study Path

> Uma página estática de trilhas de estudo para demonstrar HTML, CSS e JavaScript trabalhando juntos.

Este exemplo é intencionalmente pequeno, mas representa um problema realista: uma pessoa quer filtrar assuntos por nível e marcar conteúdos como concluídos. O HTML estrutura o painel, o CSS organiza a apresentação e o JavaScript implementa interação local.

## Como executar

Abra [`index.html`](./index.html) em um navegador moderno. Não há dependências externas nem etapa de build.

## O que observar

| Tecnologia | O que aparece no exemplo |
| --- | --- |
| HTML | `header`, `main`, `section`, formulário de busca, rótulos e cartões semânticos |
| CSS | Grid, variáveis, estados de foco, contraste e media query |
| JavaScript | Filtro por texto e nível, atualização de contagem e estado concluído |

A lógica reutilizável está em [`logic.js`](./logic.js), a integração com o DOM em [`controller.js`](./controller.js) e o carregamento da página em [`script.js`](./script.js). Essa separação permite testar as regras com Vitest e a interação com `jsdom`.
O exemplo não envia dados para um servidor. O estado de conclusão existe apenas durante a abertura da página e é perdido quando ela é recarregada. Os testes ficam em [`tests/web/`](../../tests/web/) e podem ser executados com `npm --prefix tests/web test`.

[Voltar para exemplos](../README.md) · [Ver trilha Web](../../languages/web/README.md) · [Ver HTML](../../languages/web/html/README.md)
