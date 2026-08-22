# Testes JavaScript/Web com Vitest

> Estrutura moderna para testar lógica, interação com DOM e evolução futura do exemplo Web.

## Por que Vitest?

O Vitest é um test runner moderno para projetos JavaScript e TypeScript, com uma API compatível com o estilo de testes usado por ferramentas populares. Ele executa a suíte com `vitest run`, o que é adequado para automação porque o processo termina indicando sucesso ou falha.

Nesta base, Vitest foi escolhido porque o exemplo Web usa módulos ES, não precisa de um bundler para ser aberto diretamente e deve ter um comando local simples.

## Estrutura adotada

| Arquivo | Responsabilidade |
| --- | --- |
| `examples/web/logic.js` | Funções puras de filtro e formatação |
| `examples/web/controller.js` | Manipulação do DOM e registro de eventos |
| `examples/web/script.js` | Entry point carregado pelo navegador |
| `tests/web/logic.test.js` | Testes rápidos sem depender de elementos reais |
| `tests/web/controller.test.js` | Testes de interação com DOM usando jsdom |
| `tests/web/vitest.config.js` | Configuração do ambiente jsdom |
| `tests/web/package.json` | Scripts e dependências de desenvolvimento |

A separação entre `logic.js` e `controller.js` é importante. Funções puras são mais rápidas e fáceis de testar. O controlador recebe um documento, encontra elementos e conecta eventos; por isso, seus testes precisam de um ambiente que simule APIs do navegador.

## Comandos locais

Instale as versões fixadas no lockfile e execute os testes:

```bash
npm ci --prefix tests/web --ignore-scripts
npm --prefix tests/web test
```

Durante o desenvolvimento, use o modo de observação:

```bash
npm --prefix tests/web run test:watch
```

Para medir cobertura quando a suíte crescer:

```bash
npm --prefix tests/web run test:coverage
```

## Ambiente Node e jsdom

O ambiente padrão do Vitest é Node. Ele é suficiente para testar `filterTopics`, `formatResultsCount` e outras funções que recebem dados e devolvem resultados. O ambiente `jsdom` simula APIs do navegador e é apropriado para testar elementos, eventos e `document` [1] [2].

No projeto atual, `vitest.config.js` define `environment: "jsdom"` para a suíte. Isso permite que `controller.test.js` crie uma fixture HTML, inicialize o controlador, altere o campo de busca e simule um clique.

Quando uma parte da aplicação depender de um navegador real, como layout, APIs de renderização ou compatibilidade de interação, Vitest com jsdom deixa de ser suficiente. Nesse momento, adicione testes de navegador ou uma ferramenta de ponta a ponta em uma etapa separada; não transforme todo teste unitário em teste de navegador.

## O que cada teste verifica

`logic.test.js` verifica filtros por texto e nível, combinação de filtros e pluralização das mensagens. `controller.test.js` verifica a contagem inicial, o filtro disparado por evento e a mudança de estado ao clicar em “Marcar como concluído”. Os testes não dependem de rede, relógio ou armazenamento persistente.

Um teste novo deve preferir observar comportamento público. Evite testar detalhes internos como a ordem exata de chamadas privadas se o usuário não perceber essa diferença.

## GitHub Actions

O job `web-unit` em [`.github/workflows/test-all.yml`](../../.github/workflows/test-all.yml) configura Node.js 22, usa o cache baseado em `tests/web/package-lock.json`, instala dependências com `npm ci` e executa `npm --prefix tests/web test`.

O mesmo comando é chamado pelo [script local](../../scripts/test_all.sh), junto com os validadores Markdown, exemplos C e Java, CTest e Maven. Essa paridade reduz a chance de o CI executar algo que não pode ser reproduzido antes do push [3].

## Como adicionar um novo teste

Comece identificando um comportamento observável e um caso de fronteira. Coloque regras sem DOM em `logic.test.js`; coloque comportamento de elementos e eventos em `controller.test.js` ou em um arquivo de teste específico. Use nomes que expliquem a expectativa e mantenha a fixture mínima.

Se uma nova dependência for necessária, atualize `package.json` e gere o lockfile com `npm install --package-lock-only`. Depois execute `bash scripts/test_all.sh` e confirme que o workflow usa o mesmo comando de teste.

## Referências

[1]: https://vitest.dev/guide/ "Vitest — Getting Started"
[2]: https://vitest.dev/guide/environment "Vitest — Test Environment"
[3]: https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs "GitHub Docs — Building and testing Node.js"
