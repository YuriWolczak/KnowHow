# PROJECT_HANDOFF.md

## Auditoria técnica do estado real do repositório

**Data da auditoria:** 22 de agosto de 2026  
**Repositório:** [YuriWolczak/KnowHow](https://github.com/YuriWolczak/KnowHow)  
**Branch auditado:** `main`  
**Commit auditado:** `7989d7e` — `test: add Vitest coverage for web example`  
**Estado antes desta auditoria:** `main` estava sincronizado com `origin/main` e sem alterações pendentes. Este arquivo é o único artefato criado nesta tarefa; nenhuma funcionalidade existente foi implementada, corrigida ou alterada.

> **Conclusão executiva:** o briefing recebido descreve um sistema de gerenciamento de locações e moradias compartilhadas, mas o repositório real é uma biblioteca educacional de programação chamada **Knowledge Base**. Não há backend, frontend de produto, API, banco de dados, autenticação, multi-tenancy, migrations, deploy de aplicação ou regras de negócio imobiliárias implementados neste repositório.

## 1. Convenções de status

Esta auditoria usa as distinções solicitadas no briefing para não transformar documentação em evidência de implementação.

| Status | Significado nesta auditoria |
| --- | --- |
| **IMPLEMENTADO** | Existe arquivo ou código no repositório que realiza a função descrita. |
| **IMPLEMENTADO PARCIALMENTE** | Existe código relacionado, mas o comportamento é limitado ou não cobre o produto completo. |
| **DOCUMENTADO** | Existe planejamento, índice ou orientação, sem implementação equivalente. |
| **TESTADO MANUALMENTE** | Um comando ou fluxo foi executado diretamente durante a auditoria e houve evidência de resultado. |
| **TESTADO E FALHOU** | Um comando ou workflow foi executado e falhou; a causa é registrada. |
| **PROBLEMA CONHECIDO** | Há uma limitação, aviso ou inconsistência ainda presente. |
| **NÃO IMPLEMENTADO** | Não existe código ou configuração correspondente. |
| **NÃO FOI POSSÍVEL VERIFICAR** | O repositório não contém evidência suficiente para concluir. |

## 2. Escopo e incompatibilidade do briefing

O [README principal](./README.md) define o projeto como uma biblioteca técnica progressiva para aprender programação. A organização real é feita por `fundamentals/`, `languages/`, `technologies/`, `databases/`, `exercises/`, `challenges/`, `projects/`, `resources/`, `templates/`, `examples/`, `tests/` e `scripts/`.

O briefing recebido, por outro lado, pede a auditoria de um produto com usuários, organizações, unidades, quartos, vagas, moradores, contratos, pagamentos, despesas, manutenção, comunicação e dashboard. Nenhuma dessas entidades aparece como modelo de aplicação, rota, migration ou serviço neste repositório.

Essa incompatibilidade é o principal bloqueador do handoff. Não é tecnicamente seguro inventar stack, tabelas, endpoints ou estados de autenticação que não existem. Se o sistema imobiliário estiver em outro repositório, a auditoria precisa ser executada sobre esse repositório. Se o objetivo for criar esse sistema dentro de `KnowHow`, isso deve ser uma nova decisão de produto, não uma continuação do código atual.

## 3. Mapa completo do repositório

A árvore abaixo exclui apenas `.git/`, `node_modules/`, `build/` e `target/`, que são artefatos locais ou metadados. Os arquivos exibidos são os caminhos versionados ou os diretórios de trabalho relevantes.

```text
.
├── .github/
│   └── workflows/
│       ├── compile-examples.yml
│       └── test-all.yml
├── .githooks/
│   └── pre-push
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── challenges/
│   ├── README.md
│   └── expense-organizer.md
├── databases/
│   └── README.md
├── docs/
│   ├── extending-the-project.md
│   ├── learning-paths/
│   │   └── fundamentals.md
│   └── testing/
│       ├── c-and-java.md
│       └── javascript.md
├── examples/
│   ├── README.md
│   ├── c/
│   │   ├── fizzbuzz.c
│   │   ├── is_prime.c
│   │   └── sum_of_digits.c
│   ├── java/
│   │   ├── FizzBuzz.java
│   │   ├── IsPrime.java
│   │   └── SumOfDigits.java
│   └── web/
│       ├── README.md
│       ├── controller.js
│       ├── index.html
│       ├── logic.js
│       ├── script.js
│       └── styles.css
├── exercises/
│   ├── README.md
│   ├── age-classifier.md
│   ├── average-of-three-grades.md
│   ├── largest-of-three-numbers.md
│   ├── python-todo-list.md
│   └── vowel-counter.md
├── fundamentals/
│   ├── README.md
│   ├── algorithms-and-complexity.md
│   ├── algorithms.md
│   ├── conditionals.md
│   ├── data-structures.md
│   ├── functions.md
│   ├── how-computers-execute-instructions.md
│   ├── loops.md
│   ├── object-oriented-programming.md
│   ├── operators-input-output.md
│   ├── programming-logic.md
│   ├── variables-and-data-types.md
│   ├── what-is-programming.md
│   └── exercises/
│       ├── README.md
│       ├── fibonacci.md
│       ├── fizzbuzz.md
│       ├── frequency-counter.md
│       ├── palindrome.md
│       ├── prime-number.md
│       └── sum-of-digits.md
├── languages/
│   ├── README.md
│   ├── c/
│   │   ├── README.md
│   │   └── basic/
│   │       ├── README.md
│   │       ├── control-flow-and-functions.md
│   │       ├── getting-started.md
│   │       └── syntax-types-variables.md
│   ├── java/
│   │   ├── README.md
│   │   └── basic/
│   │       ├── README.md
│   │       ├── control-flow-methods-classes.md
│   │       ├── getting-started.md
│   │       └── syntax-types-variables.md
│   ├── python/
│   │   ├── README.md
│   │   ├── advanced/README.md
│   │   ├── basic/
│   │   │   ├── README.md
│   │   │   ├── collections.md
│   │   │   ├── control-flow.md
│   │   │   ├── error-handling.md
│   │   │   ├── functions.md
│   │   │   ├── getting-started.md
│   │   │   ├── syntax-variables-types.md
│   │   │   └── text-and-files.md
│   │   └── intermediate/README.md
│   └── web/
│       ├── README.md
│       ├── css/
│       │   ├── README.md
│       │   ├── layout-and-responsive-design.md
│       │   └── selectors-cascade-box-model.md
│       ├── html/
│       │   ├── README.md
│       │   ├── links-images-forms.md
│       │   └── structure-and-semantics.md
│       └── javascript/
│           ├── README.md
│           └── syntax-and-interaction.md
├── projects/
│   ├── README.md
│   ├── advanced/README.md
│   ├── beginner/
│   │   ├── README.md
│   │   ├── expense-tracker.md
│   │   └── task-list.md
│   └── intermediate/README.md
├── resources/
│   ├── README.md
│   ├── cheatsheets/README.md
│   ├── glossary/README.md
│   ├── references/README.md
│   └── tools/README.md
├── scripts/
│   ├── check_links.py
│   ├── install-hooks.sh
│   ├── test_all.sh
│   └── test_examples.py
├── technologies/
│   ├── README.md
│   └── git/README.md
├── templates/
│   ├── README.md
│   ├── challenge.md
│   ├── exercise.md
│   ├── language.md
│   ├── project.md
│   ├── technology.md
│   └── tutorial.md
└── tests/
    ├── README.md
    ├── c/
    │   ├── CMakeLists.txt
    │   └── test_logic.c
    ├── java/
    │   ├── pom.xml
    │   └── src/
    │       ├── main/java/Logic.java
    │       └── test/java/LogicTest.java
    └── web/
        ├── controller.test.js
        ├── logic.test.js
        ├── package-lock.json
        ├── package.json
        └── vitest.config.js
```

### Finalidade e estado das pastas importantes

| Pasta | Finalidade real | Estado observado |
| --- | --- | --- |
| `fundamentals/` | Conceitos de lógica e programação independentes de linguagem | **IMPLEMENTADO PARCIALMENTE**: há uma trilha inicial com exercícios, mas não é um currículo completo. |
| `languages/` | Trilhas específicas de C, Java, Python e Web | **IMPLEMENTADO PARCIALMENTE**: C, Java, Python básico e Web possuem conteúdo inicial; níveis superiores estão documentados como em desenvolvimento. |
| `examples/` | Exemplos executáveis pequenos | **IMPLEMENTADO** para C, Java e Web conforme os arquivos presentes. |
| `tests/` | Testes automatizados de C, Java e Web | **IMPLEMENTADO** em nível inicial. |
| `scripts/` | Auditoria de links, testes locais, exemplos Python e instalação de hooks | **IMPLEMENTADO**. |
| `.github/workflows/` | CI para exemplos e testes unitários | **IMPLEMENTADO**: dois workflows ativos no repositório. |
| `docs/` | Trilhas de aprendizagem, testes e manutenção | **DOCUMENTADO**; não é código de produto. |
| `databases/` | Índice educacional de fundamentos e tecnologias de banco | **DOCUMENTADO**, sem banco real. |
| `technologies/` | Índice de ferramentas e frameworks | Git está iniciado; FastAPI, Django, Node.js, React, Docker e outras tecnologias estão apenas planejadas. |
| `projects/` | Propostas educacionais de projetos | **DOCUMENTADO** e parcialmente preenchido com propostas, sem aplicação executável correspondente. |
| `resources/` | Glossário, referências, ferramentas e cheatsheets | Estrutura documental inicial; não é um serviço de consulta implementado. |
| `templates/` | Modelos para contribuições | **IMPLEMENTADO** como documentação editorial. |

Não há arquivo claramente fora do lugar para o escopo de Knowledge Base. Para o escopo de aplicação imobiliária, todo o código de produto está ausente, portanto não é possível classificar arquivos desse produto como “fora do lugar”.

## 4. Stack tecnológica real

A tabela abaixo registra apenas tecnologias evidenciadas no código, nos manifests ou nos workflows. “Versão não fixada” significa que o repositório não declara uma versão, mesmo que a máquina usada na auditoria tenha uma versão instalada.

| Área | Tecnologia | Versão evidenciada | Status | Observação |
| --- | --- | --- | --- | --- |
| Conteúdo | Markdown | Não aplicável | **IMPLEMENTADO** | 89 arquivos Markdown versionados, em português brasileiro. |
| Linguagem de exemplos | C | Padrão C17 | **IMPLEMENTADO** | Compilado com `-Wall -Wextra -Wpedantic`; versão do GCC não é fixada no repositório. |
| Build C | CMake | Mínimo `3.20` no `CMakeLists.txt` | **IMPLEMENTADO** | Usado para configurar e construir `tests/c`. |
| Testes C | CTest | Fornecido pelo CMake | **IMPLEMENTADO** | Um teste registrado como `logic`. |
| Linguagem de exemplos | Java | JDK 21 no CI e `release 21` no Maven | **IMPLEMENTADO** | Os exemplos usam `javac`/`java`; não há framework de aplicação. |
| Build Java | Maven | Não fixado; `3.8.7` observado localmente | **IMPLEMENTADO** | O `pom.xml` está em `tests/java/`. |
| Testes Java | JUnit Jupiter | `5.11.4` | **IMPLEMENTADO** | Executado pelo Surefire. |
| Plugin de testes Java | Maven Surefire | `3.5.2` | **IMPLEMENTADO** | Descobre e executa `LogicTest`. |
| Web | HTML, CSS, JavaScript ES modules | Não aplicável | **IMPLEMENTADO PARCIALMENTE** | Há um exemplo estático educacional, não um frontend de produto. |
| Runtime Web/CI | Node.js | `22` no workflow | **IMPLEMENTADO** | O runtime local não é fixado em arquivo de versão. |
| Testes Web | Vitest | Dependência `^3.2.4`; `3.2.7` resolvido no teste | **IMPLEMENTADO** | Testes unitários e de controlador. |
| Ambiente Web | jsdom | Dependência `^26.1.0` | **IMPLEMENTADO** | Simula DOM para os testes do controlador. |
| Cobertura Web | `@vitest/coverage-v8` | Dependência `^3.2.4` | **IMPLEMENTADO PARCIALMENTE** | O script existe, mas a cobertura não foi executada nesta auditoria e não há threshold. |
| Python | Python 3 | Não fixado no repositório | **IMPLEMENTADO PARCIALMENTE** | Usado apenas pelos validadores `scripts/`. |
| CI | GitHub Actions | Actions específicas nos YAMLs | **IMPLEMENTADO** | Workflows rodam em `ubuntu-latest`. |
| CI Java | `actions/setup-java` | `v5`, Temurin 21 | **IMPLEMENTADO** | Cache Maven no workflow unitário. |
| CI Web | `actions/setup-node` | `v4`, Node 22 | **IMPLEMENTADO** | Cache npm por `tests/web/package-lock.json`. |
| CI checkout | `actions/checkout` | `v4` | **IMPLEMENTADO COM AVISO** | O GitHub registrou aviso de depreciação do runtime Node 20 da action. |
| Backend | FastAPI, Django ou outro | **Não foi possível determinar** | **NÃO IMPLEMENTADO** | A presença de uma tecnologia na lista de planejamento não é evidência de uso. |
| Frontend de produto | React, TypeScript, Tailwind ou outro | **Não foi possível determinar** | **NÃO IMPLEMENTADO** | Existe apenas um exemplo HTML/CSS/JS. |
| Banco | PostgreSQL, MySQL, MongoDB, Redis | **Não foi possível determinar** | **NÃO IMPLEMENTADO** | Há somente índices educacionais. |
| Deploy | Render, Docker ou provedor | **Não foi possível determinar** | **NÃO IMPLEMENTADO** | Não há configuração de deploy. |

## 5. Arquitetura atual

A arquitetura real não é a arquitetura `Frontend → API → Services → ORM → PostgreSQL` do briefing. O fluxo real é documental e educacional:

```text
Leitor / GitHub
      ↓
Arquivos Markdown e exemplos executáveis
      ↓
Scripts locais de validação
      ├── links Markdown
      ├── exemplos Python
      ├── Vitest + jsdom
      ├── GCC / C17
      ├── CMake / CTest
      ├── javac / java
      └── Maven / JUnit
      ↓
GitHub Actions
      ├── compile-examples.yml
      └── test-all.yml
```

Não existem rotas, schemas de API, services, repositories, models ORM, dependências de aplicação, autenticação, migrations ou acesso a banco. O único “controlador” encontrado é `examples/web/controller.js`, um módulo didático que manipula o DOM de uma página estática; ele não é um controller HTTP.

Os arquivos de configuração reais são `.gitignore`, `tests/java/pom.xml`, `tests/web/package.json`, `tests/web/vitest.config.js`, `tests/c/CMakeLists.txt` e os dois YAMLs de GitHub Actions. O tratamento de erros é o comportamento de falha dos comandos (`set -e`/códigos de saída), `assert` em C, `AssertionError`/JUnit em Java e as expectativas do Vitest.

## 6. Banco de dados real

**Não existe banco de dados neste repositório.** Não foram encontrados arquivos `.sql`, `.db`, `.sqlite`, migrations, schemas, modelos ORM, URL de conexão ou configuração de PostgreSQL. Não existe evidência de tabelas reais.

| Tabela solicitada no briefing | Existe? | Evidência | Status |
| --- | --- | --- | --- |
| `users` | Não | Nenhum schema ou modelo | **NÃO IMPLEMENTADO** |
| `organizations` | Não | Nenhum schema ou modelo | **NÃO IMPLEMENTADO** |
| `organization_users` | Não | Nenhum schema ou modelo | **NÃO IMPLEMENTADO** |
| `units` | Não | Nenhum schema ou modelo | **NÃO IMPLEMENTADO** |
| `rooms` | Não | Nenhum schema ou modelo | **NÃO IMPLEMENTADO** |
| `beds` | Não | Nenhum schema ou modelo | **NÃO IMPLEMENTADO** |
| `residents` | Não | Nenhum schema ou modelo | **NÃO IMPLEMENTADO** |
| `occupancies` | Não | Nenhum schema ou modelo | **NÃO IMPLEMENTADO** |
| `activity_logs` | Não | Nenhum schema ou modelo | **NÃO IMPLEMENTADO** |

Não existem outras tabelas além das listadas acima, porque não existe qualquer tabela no repositório. Portanto, os campos `organization_id`, `created_at`, `updated_at`, soft delete, foreign keys, índices, constraints e relacionamentos são **NÃO IMPLEMENTADOS** e **NÃO FOI POSSÍVEL VERIFICAR** em banco externo.

## 7. Migrations

Não há diretórios `migrations/`, `alembic/`, `db/migrate/`, scripts SQL versionados ou configuração de ferramenta de migration. Não há migration criada, executada, aplicada, pendente ou inconsistente. Consequentemente, não há migration existente que deva ser editada ou substituída.

Se o sistema imobiliário existir em outro projeto, as migrations devem ser auditadas lá. Não se deve criar uma migration imobiliária neste repositório apenas para satisfazer o briefing, pois isso misturaria uma aplicação de negócio com uma biblioteca educacional.

## 8. Autenticação e segurança de identidade

Não existem endpoints de cadastro, login, refresh token, logout, recuperação de senha ou reset. Não há algoritmo de hash de senha, JWT, `SECRET_KEY`, claims, armazenamento de tokens, rate limiting de autenticação ou fluxo de e-mail.

| Item | Estado real |
| --- | --- |
| Cadastro | **NÃO IMPLEMENTADO** |
| Login | **NÃO IMPLEMENTADO** |
| Expiração de token | **NÃO IMPLEMENTADO** |
| Refresh token e rotação | **NÃO IMPLEMENTADO** |
| Logout | **NÃO IMPLEMENTADO** |
| Forgot/reset password | **NÃO IMPLEMENTADO** |
| Hash de senha | **NÃO IMPLEMENTADO** |
| Proteção contra brute force | **NÃO IMPLEMENTADO** |
| Prevenção de enumeração de usuários | **NÃO IMPLEMENTADO** |
| XSS/CSRF em produto | **NÃO FOI POSSÍVEL VERIFICAR** |

O exemplo Web usa `textContent` no controlador em vez de inserir HTML arbitrário, o que é uma boa decisão local para o exemplo, mas não constitui uma auditoria de segurança de aplicação. Não há dados pessoais, financeiros ou credenciais de usuários versionados identificados no escopo auditado. O `.gitignore` exclui `.env` e `.env.*`, mas isso não prova que nenhum segredo tenha existido fora do histórico.

## 9. Multi-tenancy e organizações

Multi-tenancy não existe no código atual. Não há usuário, organização, membership, `organization_id`, contexto de organização, filtro obrigatório por tenant, autorização por membership ou teste de isolamento.

| Pergunta | Resposta factual |
| --- | --- |
| Um usuário pertence a várias organizações? | **NÃO FOI POSSÍVEL VERIFICAR**; não há usuários nem organizações. |
| Como isso é representado no banco? | **NÃO IMPLEMENTADO**; não há banco. |
| O backend sabe qual organização está sendo acessada? | **NÃO IMPLEMENTADO**; não há backend. |
| JWT possui `org_id` ou `role`? | **NÃO IMPLEMENTADO**. |
| Membership é validada? | **NÃO IMPLEMENTADO**. |
| Existe risco de IDOR/BOLA demonstrável? | Não há endpoint para explorar; uma auditoria de aplicação é **NÃO FOI POSSÍVEL VERIFICAR**. |
| Existem testes multi-tenant? | **NÃO IMPLEMENTADO**. |

Não é correto marcar “risco de segurança” de IDOR em uma rota inexistente. O risco arquitetural real é outro: o produto descrito pelo briefing não está presente no repositório auditado.

## 10. Organizações, roles, OWNER e FOUNDER

Os papéis `FOUNDER`, `OWNER`, `ADMIN` e `VIEWER` não aparecem como enum, modelo, regra executável, policy ou teste do sistema. A regra “exatamente um OWNER por organização” também não existe no banco ou no código.

| Regra ou papel | Estado real |
| --- | --- |
| Criação automática de OWNER | **NÃO IMPLEMENTADO** |
| Impedir dois OWNERs no banco | **NÃO IMPLEMENTADO** |
| Remoção ou rebaixamento de OWNER | **NÃO IMPLEMENTADO** |
| Transferência transacional de ownership | **NÃO IMPLEMENTADO** |
| `SELECT FOR UPDATE` | **NÃO IMPLEMENTADO** |
| Auditoria de ownership | **NÃO IMPLEMENTADO** |
| FOUNDER como autoridade global | **DOCUMENTADO NO BRIEFING, NÃO IMPLEMENTADO** |
| ADMIN e VIEWER | **DOCUMENTADO NO BRIEFING, NÃO IMPLEMENTADO** |

## 11. Endpoints existentes

Não há aplicação HTTP e não há rotas. A auditoria de código não encontrou decorators de framework, `FastAPI`, `@router`, controllers HTTP ou caminhos `/api/`.

| Método | Endpoint | Autenticação | Role | Implementado | Testado |
| --- | --- | --- | --- | --- | --- |
| — | Nenhum | — | — | **NÃO IMPLEMENTADO** | **NÃO FOI POSSÍVEL VERIFICAR** |

Não existem payloads, respostas, validações de API, autorização, tratamento de erros HTTP ou isolamento multi-tenant para documentar.

## 12. Funcionalidades do produto imobiliário

A tabela abaixo diferencia o que foi pedido no briefing do que existe no repositório real. A coluna “Planejada” significa apenas que apareceu no briefing recebido; não significa que o produto atual a tenha planejado internamente.

| Funcionalidade | Planejada pelo briefing | Implementada no repositório | Parcial | Testada | Observação |
| --- | ---: | ---: | ---: | ---: | --- |
| Cadastro | Sim | Não | Não | Não | Não há API ou modelo de usuário. |
| Login | Sim | Não | Não | Não | Não há autenticação. |
| Organizações | Sim | Não | Não | Não | Não há tenant. |
| Unidades | Sim | Não | Não | Não | Não há imóvel ou unidade. |
| Quartos | Sim | Não | Não | Não | Não há modelo imobiliário. |
| Vagas | Sim | Não | Não | Não | Não há ocupação. |
| Moradores | Sim | Não | Não | Não | Não há residentes. |
| Contratos | Sim | Não | Não | Não | Não há domínio financeiro/jurídico. |
| Pagamentos | Sim | Não | Não | Não | Não há transações. |
| Inadimplência | Sim | Não | Não | Não | Não há cobrança. |
| Caução | Sim | Não | Não | Não | Não há dados financeiros. |
| Despesas | Sim | Não | Não | Não | Não há lançamentos. |
| Consumo | Sim | Não | Não | Não | Não há medição. |
| Manutenção | Sim | Não | Não | Não | Não há chamados. |
| Comunicação | Sim | Não | Não | Não | Não há mensagens. |
| WhatsApp | Sim | Não | Não | Não | Não há integração externa. |
| Dashboard | Sim | Não | Não | Não | O `Study Path` é um exemplo estático, não dashboard de produto. |
| Relatórios | Sim | Não | Não | Não | Não há consultas ou exportação. |
| Recibos | Sim | Não | Não | Não | Não há pagamentos. |
| Contratos automáticos | Sim | Não | Não | Não | Não há motor de contratos. |

## 13. Regras de negócio reais

As regras efetivamente definidas no repositório são editoriais e educacionais. O conteúdo deve ser em português brasileiro; nomes de arquivos e diretórios são mantidos em inglês; fundamentos independentes de linguagem ficam em `fundamentals/`; trilhas específicas ficam em `languages/`; exemplos executáveis ficam separados de testes; e novos conteúdos devem usar templates e referências oficiais.

A documentação também define que exemplos C e Java devem ser compiláveis e executáveis sem interação manual, que os testes locais devem ser reproduzíveis no CI e que o workflow possui permissões de conteúdo somente leitura. Essas regras são de manutenção do repositório, não de um SaaS imobiliário.

As regras de imóveis, unidades, quartos, vagas, capacidade, reservas, moradores, contratos, frequência de pagamento, multas, juros, caução, despesas, comprovantes, aprovação, inadimplência, WhatsApp, manutenção e arquivamento são **NÃO IMPLEMENTADAS** e não estão definidas no código atual.

A regra de não apagar dados importantes definitivamente não possui implementação neste repositório. Não há dados de negócio para arquivar ou apagar.

## 14. Auditoria de segurança

O escopo atual é um repositório educacional com exemplos locais. Não é uma aplicação exposta que processe usuários ou pagamentos. Por isso, várias categorias da auditoria do briefing são “não aplicáveis ao código existente”, e não “seguras por implementação”.

| Área | Classificação | Evidência e risco |
| --- | --- | --- |
| Segredos no código versionado | **Baixo / evidência limitada** | Não foram encontrados valores de credenciais no escopo auditado; `.gitignore` exclui `.env`, mas isso não audita histórico externo. |
| Permissões do CI | **Baixo** | Workflows declararam `contents: read`. |
| Dependências Web | **Médio — manutenção** | `npm ci` informou zero vulnerabilidades no momento da auditoria, mas também exibiu avisos de pacotes transitivos depreciados (`whatwg-encoding` e `glob`). |
| `actions/checkout@v4` | **Médio — manutenção** | Execuções remotas registraram aviso de depreciação do runtime Node 20 da action; o job passou, mas a action deve ser revisada em futuro ciclo. |
| Autenticação | **Não aplicável / não implementada** | Não há usuários nem sessão. |
| Autorização/RBAC | **Não aplicável / não implementada** | Não há endpoints ou roles. |
| Multi-tenancy | **Não aplicável / não implementada** | Não há dados ou organizações. |
| SQL injection | **Não aplicável ao código atual** | Não há SQL ou banco. |
| XSS | **Não foi possível verificar como produto** | O exemplo Web usa `textContent`, mas não há aplicação completa nem teste de navegador real. |
| CSRF, CORS, headers e payloads | **NÃO IMPLEMENTADO** | Não há servidor HTTP. |
| Uploads e documentos sensíveis | **NÃO IMPLEMENTADO** | Não há funcionalidade. |

Não há base para afirmar conformidade de segurança de um produto de locações. Se esse produto estiver em outro repositório, a análise acima não substitui a auditoria dele.

## 15. Estabilidade e confiabilidade

A confiabilidade existente é a de uma coleção de exemplos e validadores, não a de um sistema distribuído. Os scripts usam falha rápida e códigos de saída; os testes C, Java e Web são determinísticos e não dependem de rede durante a execução dos casos. A instalação de dependências Web e Maven depende de registries externos antes dos testes.

Não existem transações de banco, rollback de negócio, concorrência de usuários, integridade referencial, health check, observabilidade de serviço, recuperação de falhas, timeout de API, retry, idempotência ou fila. Todos esses itens são **NÃO IMPLEMENTADOS** para o produto imobiliário.

## 16. Frontend e UI/UX

Existe apenas o exemplo estático `examples/web/`, chamado **Study Path**. Ele contém HTML semântico, formulário de busca, filtro por nível, cartões de conteúdo, estado vazio, CSS com Grid e media queries e JavaScript modular para filtros e progresso. O estado é mantido em memória e é perdido ao recarregar a página.

| Item de frontend do briefing | Estado real |
| --- | --- |
| Framework React | **NÃO IMPLEMENTADO** |
| TypeScript | **NÃO IMPLEMENTADO** |
| Rotas de produto | **NÃO IMPLEMENTADO** |
| Estado global de aplicação | **NÃO IMPLEMENTADO** |
| Chamadas API | **NÃO IMPLEMENTADO** |
| Login no frontend | **NÃO IMPLEMENTADO** |
| Dashboard imobiliário | **NÃO IMPLEMENTADO** |
| Responsividade do exemplo educacional | **IMPLEMENTADO PARCIALMENTE** no CSS; não há teste visual automatizado. |
| Acessibilidade do exemplo | Há labels, `aria-live`, foco visível e HTML semântico; auditoria completa **NÃO FOI POSSÍVEL VERIFICAR**. |
| Teste E2E em navegador real | **NÃO IMPLEMENTADO** |

Não foi feito julgamento visual manual em navegador durante esta auditoria. O Vitest com `jsdom` valida DOM e eventos, mas não substitui renderização, teclado real, leitor de tela ou teste E2E.

## 17. Testes existentes

| Teste | Onde está | O que testa | Resultado observado |
| --- | --- | --- | --- |
| Validação de links Markdown | `scripts/check_links.py` | Links relativos existentes e dentro do repositório; ignora artefatos gerados | **PASSOU** |
| Exemplos Python | `scripts/test_examples.py` | Média, maior valor, classificação de idade e vogais | **PASSOU** |
| Exemplos C | `examples/c/*.c` | Compilação e execução de soma, primo e FizzBuzz | **PASSOU: 3/3** |
| Teste unitário C | `tests/c/test_logic.c` via CTest | Funções de soma, primo e FizzBuzz, incluindo fronteiras | **PASSOU: 1 teste CTest** |
| Exemplos Java | `examples/java/*.java` | Compilação e execução de soma, primo e FizzBuzz | **PASSOU: 3/3** |
| Testes unitários Java | `tests/java/src/test/java/LogicTest.java` | Quatro grupos JUnit, inclusive exceção esperada | **PASSOU: 4 testes** |
| Sintaxe Web | `node --check examples/web/script.js` | Sintaxe do entrypoint JavaScript | **PASSOU** |
| Testes Web | `tests/web/logic.test.js` e `controller.test.js` | Filtros, formatação, DOM, eventos e progresso | **PASSOU: 2 arquivos, 8 testes** |
| Fluxo completo local | `bash scripts/test_all.sh` | Todas as categorias acima em sequência | **PASSOU**, exit code `0` |
| CI de exemplos | `.github/workflows/compile-examples.yml` | C e Java no GitHub Actions | **PASSOU** no commit `7989d7e` |
| CI unitário | `.github/workflows/test-all.yml` | CTest, Vitest/jsdom e Maven/JUnit | **PASSOU** no commit `7989d7e` |

A execução local foi feita em 22 de agosto de 2026. O ambiente precisou ter GCC, CMake, JDK 21, Maven e Node/npm disponíveis; depois da instalação das ferramentas ausentes, o script passou integralmente. Essa instalação é uma pré-condição de ambiente, não uma etapa automatizada por um container do projeto.

### Histórico de falhas observadas

Houve uma falha histórica do workflow de exemplos no run `32590052866`, associada ao commit `32a0469`, porque `actions/setup-java@v4` recebeu `cache: none` e retornou `unknown package manager specified: none`. A configuração foi corrigida no commit `1ce9df4`, removendo a opção inválida e atualizando `setup-java`; os runs seguintes passaram. O workflow unitário do mesmo ciclo passou.

Também houve uma falha local inicial quando o ambiente não tinha `cmake`. Depois da instalação de CMake e Maven, o fluxo passou. Essa falha não indica defeito do código, mas demonstra que o projeto não fornece devcontainer ou mecanismo de instalação local das ferramentas.

### Cobertura de testes ausente

Não há testes de API, integração de banco, segurança, multi-tenant, autenticação, frontend em navegador real, E2E, performance, carga ou deploy. O script `test:coverage` do Vitest existe, mas a cobertura não foi executada durante esta auditoria, não há relatório versionado e não há limiar configurado.

## 18. Deploy e CI/CD

Não há backend ou frontend de produto para hospedar. O único recurso remoto ativo é o repositório GitHub e seus workflows de CI.

| Componente | Estado real |
| --- | --- |
| Backend hospedado | **NÃO IMPLEMENTADO** |
| Frontend hospedado | **NÃO IMPLEMENTADO**; o exemplo pode ser aberto como arquivo estático, mas não há deploy configurado. |
| Banco hospedado | **NÃO IMPLEMENTADO** |
| Render/Vercel/Netlify/Docker | **NÃO FOI POSSÍVEL VERIFICAR** como configuração de produto; nenhum arquivo de deploy existe. |
| Build C/Java/Web no CI | **IMPLEMENTADO** |
| Deploy automático | **NÃO IMPLEMENTADO** |
| Migrations no CI | **NÃO IMPLEMENTADO** |
| Lint de aplicação | **NÃO IMPLEMENTADO**; há verificações de links, sintaxe JS e flags de compilador. |
| Variáveis sensíveis | Não há valores a documentar; se uma aplicação futura usar `SECRET_KEY` ou `DATABASE_URL`, devem ser tratadas como configuradas em segredo, nunca escritas no handoff. |

## 19. Serviços externos

Não há integrações de produto com Resend, WhatsApp, gateways de pagamento, armazenamento, autenticação externa ou APIs de negócio.

| Serviço | Finalidade real | Implementado | Configurado | Testado | Pendência |
| --- | --- | --- | --- | --- | --- |
| GitHub | Repositório e execução de Actions | Sim | Sim | Sim | Revisar versões das actions. |
| npm registry | Instalar Vitest/jsdom no CI e localmente | Indireto | Via `package-lock.json` | Sim | Monitorar avisos de dependências transitivas. |
| Maven Central | Resolver JUnit/Maven no CI e localmente | Indireto | Via `pom.xml` | Sim | Cache existe no CI unitário. |
| Resend | E-mail do produto imobiliário | Não | Não | Não | **NÃO IMPLEMENTADO** |
| WhatsApp | Comunicação de moradores | Não | Não | Não | **NÃO IMPLEMENTADO** |
| Gateway de pagamento | Cobranças | Não | Não | Não | **NÃO IMPLEMENTADO** |
| Storage de documentos | Contratos/comprovantes | Não | Não | Não | **NÃO IMPLEMENTADO** |

## 20. Inventário da documentação

O estado auditado contém **119 arquivos versionados**, dos quais **89 são Markdown**. A distribuição documental por área é:

| Área | Arquivos Markdown | Estado |
| --- | ---: | --- |
| Raiz e contribuição | 2 | README e CONTRIBUTING existentes. |
| `fundamentals/` | 20 | Trilha conceitual e exercícios independentes. |
| `languages/` | 31 | C, Java, Python e Web iniciados. |
| `exercises/` | 6 | Exercícios gerais iniciais. |
| `challenges/` | 2 | Um desafio integrador. |
| `projects/` | 6 | Propostas por nível. |
| `resources/` | 5 | Índices de consulta. |
| `technologies/` | 2 | Git iniciado e demais tecnologias planejadas. |
| `templates/` | 7 | Modelos editoriais. |
| `databases/` | 1 | Índice educacional, sem banco. |
| `docs/` | 4 | Trilha, extensibilidade e testes. |
| `tests/` | 1 | Inventário das suítes. |

Os documentos mais importantes estão coerentes com o código atual: [README](./README.md), [CONTRIBUTING](./CONTRIBUTING.md), [guia de extensibilidade](./docs/extending-the-project.md), [testes C/Java](./docs/testing/c-and-java.md), [testes Web](./docs/testing/javascript.md), [testes](./tests/README.md) e [exemplos](./examples/README.md).

Há duas pequenas observações documentais. Primeiro, `docs/testing/c-and-java.md` agora também descreve Web, embora o nome do arquivo não reflita todo o conteúdo. Segundo, o README de testes originalmente enfatizava C e Java, mas já inclui a linha Web. Essas observações são dívida editorial baixa, não contradições com uma arquitetura de aplicação.

Não existe `CHANGELOG.md`, `AGENTS.md`, especificação de API, ADR formal, documentação de deploy, runbook operacional ou documentação de domínio imobiliário.

## 21. Decisões arquiteturais reais

| Decisão | Motivo | Status |
| --- | --- | --- |
| O projeto é uma Knowledge Base, não um SaaS imobiliário | Manter o escopo educacional indicado no README e nos diretórios | **IMPLEMENTADO** |
| Fundamentos independentes ficam separados das linguagens | Evitar duplicar lógica entre C, Java, Python e Web | **IMPLEMENTADO** |
| C, Java, Python e Web possuem trilhas próprias | Permitir sintaxe e ecossistema específicos após os fundamentos | **IMPLEMENTADO PARCIALMENTE** |
| Exemplos executáveis ficam em `examples/` | Separar código didático de snippets em Markdown | **IMPLEMENTADO** |
| Testes ficam em `tests/` | Separar verificação automatizada de exemplos | **IMPLEMENTADO** |
| C usa CMake/CTest | Ter configuração mínima de build e descoberta de testes | **IMPLEMENTADO** |
| Java usa Maven/JUnit/Surefire | Ter dependências e descoberta de testes reproduzíveis | **IMPLEMENTADO** |
| Web usa Vitest/jsdom | Testar lógica e DOM sem exigir navegador real para cada caso | **IMPLEMENTADO** |
| Script local é a porta de entrada | Reproduzir localmente as validações importantes do CI | **IMPLEMENTADO** |
| Hook `pre-push` é opcional | Permitir bloquear push sem obrigar a alteração global do Git | **IMPLEMENTADO** |
| Documentação própria usa CC BY-SA e código próprio usa MIT | Diferenciar reutilização de texto educacional e código | **IMPLEMENTADO/DOCUMENTADO** |
| JWT, roles, OWNER, FOUNDER e multi-tenancy | Não há decisão real registrada para a Knowledge Base | **NÃO IMPLEMENTADO** |
| PostgreSQL, ORM e migrations | Não há aplicação ou banco neste repositório | **NÃO IMPLEMENTADO** |

## 22. Decisões erradas ou que precisam ser revisadas

### Problema crítico — escopo incompatível

**O que foi feito:** o briefing recebido solicita um handoff de um sistema imobiliário, enquanto o repositório auditado é uma biblioteca educacional.

**Por que está errado continuar assumindo o briefing:** documentação de um sistema ausente produziria endpoints, tabelas, roles e riscos fictícios. Isso violaria a regra de auditar o estado real.

**Risco:** outro desenvolvedor pode iniciar implementação no repositório errado ou considerar funcionalidades inexistentes como entregues.

**Como deveria ser:** confirmar se `YuriWolczak/KnowHow` é realmente o projeto a auditar. Se o produto imobiliário estiver em outro repositório, fornecer esse repositório. Se a intenção for criar o produto dentro de `KnowHow`, abrir uma decisão de escopo e uma nova arquitetura, sem reescrever a auditoria como se já existisse.

### Problema médio — toolchains não fixadas

O CI fixa JDK 21 e Node 22, mas CMake, GCC, Maven e parte do ambiente Python não são fixados por container, lock de sistema ou arquivo de versão. A execução local depende de ferramentas instaladas na máquina.

### Problema médio — aviso de action depreciada

`actions/checkout@v4` passou no CI, mas os logs remotos registraram que a action aponta para Node 20, que está sendo depreciado no ambiente dos runners. A action deve ser revisada em um ciclo futuro.

### Problema baixo — lógica duplicada nos testes

As funções dos exemplos C e Java são repetidas nos executáveis de exemplo e nas suítes unitárias. Para uma amostra didática pequena isso é compreensível, mas permite que o exemplo e o teste validem implementações diferentes. Quando o conteúdo crescer, a lógica deve ser extraída para módulos compartilhados.

### Problema baixo — cobertura e navegador real

Existe comando de cobertura do Vitest, mas não há threshold nem artefato. O exemplo Web tem testes jsdom, mas não há teste em navegador real, acessibilidade automatizada ou E2E.

## 23. Dívida técnica

| Prioridade | Item | Impacto |
| --- | --- | --- |
| **Alta** | Resolver a incompatibilidade entre o briefing imobiliário e o repositório Knowledge Base | Impede qualquer desenvolvimento seguro do produto solicitado. |
| **Alta** | Se o produto imobiliário for confirmado, localizar ou criar o repositório correto antes de implementar | Evita contaminar a biblioteca educacional com uma aplicação de negócio. |
| **Média** | Fixar toolchains C/CMake/Maven/Python ou fornecer devcontainer | Melhora reprodutibilidade local. |
| **Média** | Revisar `actions/checkout@v4` e dependências transitivas depreciadas | Reduz dívida de manutenção do CI. |
| **Média** | Extrair lógica compartilhada dos exemplos para bibliotecas testadas | Evita divergência entre exemplo e teste. |
| **Média** | Executar cobertura Vitest e definir threshold | Mede regressões na suíte Web. |
| **Média** | Adicionar lint Markdown/YAML e validação HTML/CSS | Aumenta a qualidade editorial e estrutural. |
| **Baixa** | Renomear `docs/testing/c-and-java.md` ou separar o conteúdo Web | Melhora precisão da navegação documental. |
| **Baixa** | Adicionar E2E e acessibilidade do exemplo Web | Só é necessário se o exemplo evoluir para uma aplicação mais completa. |
| **Baixa** | Criar changelog e ADRs formais | Útil quando o projeto tiver mais decisões e colaboradores. |

## 24. Bugs conhecidos

Não há bug reproduzível nos testes atuais. Os exemplos, CTest, Maven/JUnit, Vitest, links e script local passaram na execução da auditoria.

| Item histórico | Como reproduzir | Impacto | Causa | Status |
| --- | --- | --- | --- | --- |
| Workflow de exemplos com `cache: none` em `setup-java@v4` | Executar o workflow antigo do commit `32a0469` | Falha no job Java | Entrada de cache inválida para a action | **RESOLVIDO** no commit `1ce9df4` |
| CMake ausente no ambiente local | Executar `scripts/test_all.sh` em máquina sem CMake | Script termina antes dos testes | Dependência de ambiente ausente | **CONHECIDO; pré-requisito documentável**, não defeito do código |
| Avisos de pacotes npm depreciados | Executar `npm ci --prefix tests/web` | Não impediu testes; manutenção futura | Dependências transitivas | **PROBLEMA CONHECIDO**, sem vulnerabilidades reportadas no momento |

## 25. O que foi testado manualmente

A evidência manual disponível é a execução direta do comando `bash scripts/test_all.sh` no checkout auditado, com exit code `0`. Essa execução percorreu links, Python, Web, C, CTest, Java e Maven/JUnit. Também foi consultado o estado Git, que estava `main...origin/main` sem alterações pendentes antes da criação deste handoff.

No GitHub, os workflows do commit `7989d7e` foram acompanhados e terminaram com sucesso:

| Workflow | Run | Resultado |
| --- | ---: | --- |
| Compile and test examples | [32591510989](https://github.com/YuriWolczak/KnowHow/actions/runs/32591510989) | **Sucesso** |
| Run unit tests | [32591510987](https://github.com/YuriWolczak/KnowHow/actions/runs/32591510987) | **Sucesso** |

Não foi testado manualmente o produto imobiliário porque ele não existe no checkout. Não foi feita publicação de aplicação, migração ou operação em ambiente de produção.

## 26. Implementado, mas não testado

Os seguintes itens existem, mas não possuem evidência do tipo de teste que seria necessária para um produto completo:

| Item | O que existe | O que não foi testado |
| --- | --- | --- |
| Exemplo HTML/CSS/JS | Arquivos estáticos e interação DOM | Renderização visual real, teclado, leitor de tela e navegadores múltiplos |
| `test:coverage` Web | Script configurado | Execução de cobertura e threshold |
| Hooks Git | `.githooks/pre-push` e instalador | Instalação em outra máquina e compatibilidade com todos os shells |
| CI | Workflows funcionando no GitHub | Deploy, secrets, ambientes protegidos e branches além de `main` |
| Trilhas educacionais | Markdown e links | Revisão pedagógica completa por especialista |

## 27. O que falta implementar

### Bloqueadores

O primeiro bloqueador é identificar o repositório real do sistema de locações/moradias compartilhadas. Sem isso, não existe base factual para implementar ou auditar backend, frontend, banco, autenticação ou regras de negócio.

### MVP do produto imobiliário

Se o briefing for confirmado como um novo produto, ainda faltariam, no mínimo, domínio de usuários e organizações, autenticação, RBAC, isolamento multi-tenant, imóveis, unidades, quartos, vagas, moradores, contratos, pagamentos, despesas, manutenção, comunicação, dashboard, API, frontend, migrations, testes de segurança e deploy. Nenhum desses itens deve ser tratado como parcialmente existente em `KnowHow`.

### Pós-MVP

Integrações com WhatsApp, e-mail, gateways de pagamento, relatórios, recibos, contratos automáticos, auditoria avançada, notificações e recuperação operacional só devem ser planejadas após a fundação do produto real.

### Longo prazo

Escalabilidade, observabilidade, filas, conciliação financeira, permissões avançadas, trilhas de auditoria e automação documental dependem de uma arquitetura de aplicação ainda inexistente.

## 28. Roadmap recomendado a partir do estado real

### Fase 0 — Reconciliação de escopo

**Status:** bloqueada.  
**Objetivo:** confirmar se o repositório correto é `KnowHow` ou localizar o projeto imobiliário real.  
**Existe:** documentação do briefing e uma Knowledge Base funcional como repositório.  
**Falta:** identificação inequívoca do código de produto.  
**Dependência:** resposta do proprietário do projeto ou URL correta.  
**Risco:** implementar no projeto errado.

### Fase 1 — Auditoria do repositório correto

**Status:** pendente.  
**Objetivo:** repetir o inventário de stack, arquitetura, banco, migrations, autenticação, endpoints e deploy sobre o código do produto.  
**Existe:** este handoff serve como modelo de distinção entre evidência e planejamento.  
**Falta:** checkout do produto imobiliário.  
**Dependência:** conclusão da Fase 0.

### Fase 2 — Fundação do produto

**Status:** não iniciada no repositório auditado.  
**Objetivo:** definir stack, monorepo ou repositórios, ambiente, configuração, logging, banco, migrations e convenções.  
**Falta:** tudo para o produto imobiliário.  
**Riscos:** escolher autenticação e tenancy sem regras explícitas.

### Fase 3 — Identidade e multi-tenancy

**Status:** não iniciada.  
**Objetivo:** cadastro, login, recuperação, organizações, memberships, roles, OWNER único, FOUNDER e testes IDOR/BOLA.  
**Falta:** implementação e testes de autorização transacional.

### Fase 4 — Domínio imobiliário

**Status:** não iniciada.  
**Objetivo:** unidades, quartos, vagas, moradores, ocupações, contratos e histórico.  
**Falta:** modelo de domínio, constraints e fluxos de negócio.

### Fase 5 — Financeiro e operação

**Status:** não iniciada.  
**Objetivo:** pagamentos, multas, juros, caução, despesas, inadimplência, comprovantes e manutenção.  
**Falta:** regras financeiras, idempotência, auditoria e integração externa.

### Fase 6 — Frontend, comunicação e relatórios

**Status:** não iniciada.  
**Objetivo:** dashboard, UX responsiva, notificações, WhatsApp, relatórios e recibos.  
**Falta:** aplicação frontend, API e testes E2E.

### Fase 7 — Deploy e operação

**Status:** não iniciada.  
**Objetivo:** CI/CD, deploy, migrations seguras, backups, observabilidade, health checks e recuperação.  
**Falta:** ambiente de produção e runbook.

## 29. Próximo passo exato

> **Se outro desenvolvedor assumir o projeto agora, qual é exatamente a próxima coisa que ele deve fazer?**

**PRÓXIMO PASSO:** não implementar o sistema imobiliário em `YuriWolczak/KnowHow`. Primeiro, confirmar com o proprietário qual é o repositório real do produto de gerenciamento de locações/moradias compartilhadas ou fornecer esse código para auditoria.

**Arquivos a consultar nesta decisão:**

- `README.md` do repositório atual, que identifica a Knowledge Base;
- `docs/extending-the-project.md`, que descreve a finalidade da base;
- este `PROJECT_HANDOFF.md`, que registra a incompatibilidade;
- URL ou checkout do projeto imobiliário, se existir.

**Motivo:** o repositório atual não possui qualquer camada de aplicação, banco ou domínio imobiliário. Criar esses componentes agora transformaria uma auditoria factual em uma implementação não solicitada pelo briefing e impediria comparar o estado real.

**Pré-requisitos:** identificação do repositório correto, definição de stack desejada apenas depois da auditoria e autorização explícita para implementar, caso esse seja o próximo objetivo.

**Testes necessários depois de localizar o projeto:** repetir inventário de rotas, tabelas, migrations, autenticação, multi-tenancy e testes; depois executar a suíte existente sem assumir que os resultados de `KnowHow` se aplicam ao produto.

## 30. Checklist final

| Item | Estado |
| --- | --- |
| Arquitetura documentada | **Sim, para o repositório real Knowledge Base** |
| Banco documentado | **Sim: ausência de banco registrada** |
| API documentada | **Sim: ausência de endpoints registrada** |
| Autenticação documentada | **Sim: ausência de autenticação registrada** |
| Multi-tenancy documentado | **Sim: ausência e não implementação registradas** |
| Segurança auditada | **Parcial: escopo de conteúdo/CI; produto imobiliário não existe** |
| Frontend auditado | **Parcial: apenas exemplo Web estático** |
| Testes auditados | **Sim: local e workflows remotos registrados** |
| Deploy documentado | **Sim: ausência de deploy registrada** |
| Bugs documentados | **Sim: falhas históricas e avisos registrados** |
| Dívida técnica documentada | **Sim** |
| Roadmap atualizado | **Sim, condicionado à reconciliação de escopo** |
| Arquivo solicitado criado | **Sim: `PROJECT_HANDOFF.md`** |

## Referências

[1]: https://github.com/YuriWolczak/KnowHow "Repositório GitHub auditado"
[2]: https://docs.github.com/en/actions "GitHub Actions Documentation"
[3]: https://cmake.org/cmake/help/latest/manual/ctest.1.html "CMake — ctest(1)"
[4]: https://junit.org/junit5/docs/current/user-guide/ "JUnit 5 User Guide"
[5]: https://vitest.dev/guide/ "Vitest — Getting Started"
[6]: https://vitest.dev/guide/environment "Vitest — Test Environment"
