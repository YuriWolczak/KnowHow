# Knowledge Base

> Uma biblioteca técnica, progressiva e navegável para aprender programação, desenvolvimento de software e tecnologia.

A **Knowledge Base** foi criada para conectar fundamentos, linguagens, tecnologias, prática e projetos em uma experiência de aprendizado contínua. O objetivo não é reunir páginas aleatórias, mas construir uma referência que ajude o leitor a **aprender, entender, praticar, resolver problemas, construir projetos e consultar novamente**.

O conteúdo inicial está em **português brasileiro**. Nomes de arquivos e diretórios permanecem em inglês para facilitar a manutenção, a colaboração e a integração com ferramentas.

## Por onde começar?

Se você nunca programou, siga a [trilha de fundamentos](./docs/learning-paths/fundamentals.md). Ela começa explicando o que é programação e avança até uma introdução a Git.

Se você já conhece o básico, use o [mapa de áreas](#áreas-disponíveis) para navegar diretamente. Cada conteúdo deve informar pré-requisitos, explicar o porquê das decisões e apontar para prática e próximos passos.

## O que este projeto resolve?

Materiais de programação frequentemente ficam espalhados entre tutoriais, documentação, exercícios e projetos sem uma sequência clara. Esta base organiza esses elementos em uma rede de conhecimento com níveis explícitos, links relativos, padrões de conteúdo e trilhas progressivas.

| Objetivo | Como a base ajuda |
| --- | --- |
| Aprender do zero | Linguagem clara, conceitos fundamentais e uma trilha guiada |
| Consolidar conhecimento | Exemplos progressivos, exercícios e desafios relacionados |
| Construir autonomia | Problemas com requisitos, restrições e critérios de conclusão |
| Consultar rapidamente | Glossário, cheatsheets, referências e navegação consistente |
| Colaborar | Padrões documentados em [CONTRIBUTING.md](./CONTRIBUTING.md) e templates reutilizáveis |

## Áreas disponíveis

| Área | Finalidade | Estado |
| --- | --- | --- |
| [Fundamentals](./fundamentals/README.md) | Conceitos independentes de uma linguagem | Em desenvolvimento |
| [Languages](./languages/README.md) | Trilhas organizadas por linguagem e ecossistema | C, Java, Python e Web iniciados |
| [Technologies](./technologies/README.md) | Ferramentas, frameworks e ecossistemas | Git iniciado |
| [Databases](./databases/README.md) | Fundamentos de dados e tecnologias de banco | Em desenvolvimento |
| [Exercises](./exercises/README.md) | Prática progressiva e relacionada aos conteúdos | Primeiros exercícios disponíveis |
| [Challenges](./challenges/README.md) | Problemas mais completos e integradores | Primeiro desafio disponível |
| [Projects](./projects/README.md) | Projetos realistas por nível | Primeiros projetos disponíveis |
| [Resources](./resources/README.md) | Consulta rápida, glossário e referências | Estrutura inicial disponível |
| [Templates](./templates/) | Modelos para criar conteúdos consistentes | Disponível |

## Níveis de conhecimento

| Nível | Símbolo | Expectativa |
| --- | --- | --- |
| Básico | 🟢 | O leitor aprende os fundamentos necessários para começar. |
| Intermediário | 🟡 | O leitor resolve problemas com autonomia e constrói aplicações. |
| Avançado | 🔴 | O leitor estuda arquitetura, otimização, concorrência, performance ou internals. |

O nível representa o conhecimento prévio necessário, não apenas a dificuldade subjetiva do assunto. Um conteúdo avançado deve explicar seus pré-requisitos e não pressupor que “mais difícil” significa “melhor”.

## Método de aprendizado

A estrutura preferencial da base é:

```text
CONCEITO → EXPLICAÇÃO → EXEMPLO → EXERCÍCIO → DESAFIO → PROJETO
```

O [padrão de tutorial](./templates/tutorial.md) orienta a explicar objetivo, pré-requisitos, funcionamento, exemplos, erros comuns, boas práticas, exercícios, projetos e referências. Nem todo assunto precisa de todas as seções, mas nenhum conteúdo deve esconder pré-requisitos ou apresentar código sem contexto.

## Trilhas

A primeira trilha foi desenhada para quem parte do absoluto zero:

1. [O que é programação?](./fundamentals/what-is-programming.md)
2. [Como computadores executam instruções](./fundamentals/how-computers-execute-instructions.md)
3. [Algoritmos](./fundamentals/algorithms.md)
4. [Lógica de programação](./fundamentals/programming-logic.md)
5. [Variáveis e tipos de dados](./fundamentals/variables-and-data-types.md)
6. [Operadores, entrada e saída](./fundamentals/operators-input-output.md)
7. [Condicionais](./fundamentals/conditionals.md)
8. [Loops](./fundamentals/loops.md)
9. [Funções](./fundamentals/functions.md)
10. [Estruturas de dados](./fundamentals/data-structures.md)
11. [Introdução à orientação a objetos](./fundamentals/object-oriented-programming.md)
12. [Introdução a algoritmos e complexidade](./fundamentals/algorithms-and-complexity.md)
13. [Introdução a Git](./technologies/git/README.md)

Depois dos fundamentos iniciais, escolha uma trilha específica: [C](./languages/c/README.md), [Java](./languages/java/README.md), [Python](./languages/python/README.md) ou [Web](./languages/web/README.md). A trilha Web reúne HTML, CSS e JavaScript porque, no desenvolvimento de interfaces, essas tecnologias trabalham em conjunto.

## Exercícios, desafios e projetos

Os [exercícios](./exercises/README.md) trabalham um conceito por vez e têm dicas progressivas. Os [desafios](./challenges/README.md) combinam conhecimentos e exigem mais decisões. Os [projetos](./projects/README.md) simulam problemas realistas e são organizados por nível.

A solução de um exercício, quando existir, aparece depois do enunciado e das dicas. Tente resolver antes de consultar a resposta.

## Como usar o repositório

Você pode navegar pelo GitHub, clonar o repositório para estudar localmente ou abrir diretamente qualquer página ligada por um caminho relativo. Para estudar de forma progressiva, comece pela trilha de fundamentos; para consultar, use o glossário, os cheatsheets e as referências.

```bash
git clone https://github.com/YuriWolczak/KnowHow.git
cd KnowHow
```

O projeto não exige uma ferramenta de publicação específica: os arquivos Markdown devem continuar legíveis no GitHub e em editores comuns.

## Como contribuir

Antes de criar um conteúdo, leia o [guia de contribuição](./CONTRIBUTING.md) e escolha o [template correspondente](./templates/). Uma contribuição pode corrigir uma explicação, melhorar um exemplo, adicionar um exercício, propor uma referência ou registrar uma lacuna.

A regra central é **clareza antes de quantidade**. Se uma seção ainda não possui conteúdo suficiente, ela deve dizer honestamente “Em desenvolvimento” em vez de receber texto genérico.

## Status do projeto

A V1 estabelece a arquitetura, os padrões editoriais, a navegação e uma primeira amostra de conteúdo. O projeto ainda está em desenvolvimento e não pretende ser uma enciclopédia completa.

## Roadmap

- [x] Criar a estrutura principal e os READMEs de navegação.
- [x] Definir padrões de tutoriais, exercícios, desafios, projetos, linguagens e tecnologias.
- [x] Criar a trilha inicial de fundamentos.
- [x] Iniciar as trilhas de Python, C, Java e Web.
- [x] Adicionar exercícios, desafio e projetos iniciais.
- [ ] Expandir fundamentos com redes, sistemas operacionais, segurança e arquitetura.
- [ ] Completar uma trilha de Python intermediário com testes, typing, ambientes e pacotes.
- [ ] Desenvolver Git/GitHub, SQL e APIs como trilhas próprias.
- [ ] Expandir a trilha Web com DOM, eventos, módulos e TypeScript.
- [ ] Adicionar Linux, Docker e outras tecnologias após validar os padrões.
- [ ] Criar automações de validação de Markdown e links para o fluxo de contribuição.

## Licenciamento

A documentação educacional própria deste repositório é licenciada sob **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)**. Exemplos de código próprios são licenciados sob a **MIT License**, salvo indicação diferente no arquivo correspondente.

Essa separação existe porque texto educacional e código têm necessidades de reutilização diferentes. Ao adicionar material de terceiros, preserve a atribuição, a licença original e a compatibilidade com o conteúdo incorporado. Consulte o arquivo [LICENSE](./LICENSE) antes de reutilizar material externo.

## Referências relevantes

As referências abaixo são pontos de partida oficiais e não substituem a leitura da documentação específica de cada tecnologia:

1. [Creative Commons — CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
2. [Open Source Initiative — MIT License](https://opensource.org/license/mit/)
3. [Documentação oficial do Python](https://docs.python.org/3/)
4. [Documentação oficial do Git](https://git-scm.com/doc)
5. [GNU C Reference Manual](https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html)
6. [Java SE Documentation](https://docs.oracle.com/en/java/javase/25/)
7. [MDN — Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development)

## Decisões de organização

A raiz do repositório selecionado para esta implementação é `YuriWolczak/KnowHow`. O nome editorial da biblioteca permanece **Knowledge Base**, conforme o briefing. Diretórios e arquivos novos usam nomes em inglês, lowercase e kebab-case; o conteúdo é escrito em português brasileiro.
