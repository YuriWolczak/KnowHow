# Como expandir a Knowledge Base

> Guia para adicionar novas linguagens, exemplos executáveis e suítes de teste sem quebrar a organização do projeto.

## Princípio geral

A Knowledge Base separa conceitos que valem para várias linguagens em [`fundamentals/`](../fundamentals/README.md) das particularidades de C, Java, Python e Web em [`languages/`](../languages/README.md). Uma nova linguagem deve entrar como uma trilha própria, com escopo claro, e não como uma coleção de arquivos soltos.

Antes de criar uma pasta, responda qual problema educacional a linguagem atende, quais fundamentos o leitor precisa dominar e qual será a primeira sequência que ele conseguirá concluir. É melhor marcar a trilha como “Planejada” do que publicar conteúdo superficial.

## Adicionando uma nova linguagem

Use nomes em inglês, lowercase e kebab-case. Uma estrutura inicial recomendada é:

```text
languages/
└── ruby/
    ├── README.md
    ├── basic/
    │   ├── README.md
    │   └── getting-started.md
    ├── intermediate/
    │   └── README.md
    └── advanced/
        └── README.md
```

O README da linguagem deve explicar o que ela é, casos de uso, instalação, versão ou contexto, sequência básica, prática relacionada, referências oficiais e o que ainda está em desenvolvimento. Cada nível precisa ter um README antes de receber conteúdo.

Não copie o tutorial de variáveis, loops ou funções de `fundamentals/`. Explique a sintaxe e os comportamentos específicos da nova linguagem e faça links para os conceitos gerais. Se a linguagem tiver um modelo diferente, descreva a diferença com um exemplo pequeno.

Depois de criar a trilha, atualize [languages/README.md](../languages/README.md), [README.md](../README.md) e a [trilha de fundamentos](./learning-paths/fundamentals.md). Adicione exercícios e projetos somente quando houver uma relação real com os conceitos ensinados.

## Adicionando exemplos executáveis

Mantenha exemplos executáveis separados da documentação. A convenção atual usa `examples/<linguagem>/` e exige que cada arquivo possa ser compilado e executado sem entrada manual. Registre a convenção em `examples/README.md` e conecte o diretório à trilha da linguagem.

Exemplos de uma nova linguagem devem ser pequenos, determinísticos e livres de rede. Se um exemplo exigir banco de dados, sistema operacional específico ou uma credencial, ele pertence a uma suíte de integração separada, com dependências e limpeza documentadas.

## Adicionando uma suíte de testes

Uma suíte nova deve ter quatro partes: código testável, casos unitários, comando local e etapa de CI. A organização pode seguir o padrão abaixo:

```text
tests/
└── ruby/
    ├── Gemfile
    ├── lib/
    └── test/
```

O teste deve cobrir comportamento observável, casos normais, limites e erros esperados. Evite testes que dependam de horário, rede, ordem acidental ou arquivos gerados fora da pasta de build.

| Pergunta | Decisão esperada |
| --- | --- |
| Existe um sistema de build oficial ou comum? | Use-o quando reduzir configuração e tornar o comando reproduzível. |
| O teste precisa de APIs do navegador? | Use um ambiente de navegador simulado ou um teste de navegador separado. |
| O teste é unitário ou de integração? | Separe jobs e nomes para que uma falha tenha significado claro. |
| O comando pode rodar sem interação? | Se não puder, crie uma fixture ou adapte o escopo antes de incluí-lo no CI. |

C usa CMake + CTest em `tests/c/`; Java usa Maven + JUnit em `tests/java/`; Web usa Vitest + jsdom em `tests/web/`. CTest executa testes registrados pelo CMake e retorna falha quando um caso não passa [1]. Vitest permite escolher ambientes como Node e jsdom para testar lógica e APIs de navegador [2].

## Registrando no script local

O ponto de entrada é [`scripts/test_all.sh`](../scripts/test_all.sh). Ao adicionar uma linguagem, inclua uma seção explícita que:

1. verifica as ferramentas necessárias;
2. instala dependências de maneira reprodutível, se necessário;
3. compila ou prepara o código em uma pasta ignorada;
4. executa todos os testes sem interação;
5. encerra com código diferente de zero na primeira falha;
6. remove artefatos temporários ao terminar.

O CI deve usar exatamente os mesmos comandos principais do script local. Essa paridade torna possível reproduzir uma falha do Pull Request na máquina de desenvolvimento [3].

## Registrando no GitHub Actions

Crie um job separado em `.github/workflows/test-all.yml` quando a linguagem tiver runtime, dependências ou forma de build própria. Um job independente melhora a leitura do resultado e permite configurar a versão da ferramenta sem afetar as demais linguagens.

Exemplo genérico:

```yaml
new-language-unit:
  name: New language unit tests
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - name: Set up runtime
      uses: vendor/setup-runtime@v1
      with:
        version: 'x.y'
    - name: Install dependencies
      run: <reproducible-install-command>
    - name: Run tests
      run: <same-command-used-locally>
```

Substitua o placeholder por uma action e comandos reais, verificando a documentação do runtime. Fixe versões quando a diferença puder alterar o resultado. Use permissões mínimas e nunca coloque tokens ou segredos em exemplos.

## Checklist de Pull Request

| Verificação | Concluída quando |
| --- | --- |
| Estrutura | A nova linguagem possui índice e níveis com finalidade documentada. |
| Navegação | Os READMEs principais apontam para a trilha nova e não existem links quebrados. |
| Conteúdo | A primeira sequência tem pré-requisitos, exemplos, exercícios e referências oficiais. |
| Código | Os exemplos compilam, executam sem interação e não dependem de dados externos. |
| Testes | Há casos normais, fronteiras e erros esperados. |
| Automação | `scripts/test_all.sh` e o job do GitHub Actions executam comandos equivalentes. |
| Manutenção | Dependências, versões, limitações e próximos passos estão documentados. |

Execute antes do push:

```bash
bash scripts/test_all.sh
git diff --check
```

Se o hook estiver ativado, o `pre-push` chamará o script automaticamente. Ainda assim, leia o resultado: automação impede regressões conhecidas, mas não substitui revisão de conteúdo, clareza pedagógica ou análise de escopo.

## Referências

[1]: https://cmake.org/cmake/help/latest/manual/ctest.1.html "CMake — ctest(1)"
[2]: https://vitest.dev/guide/environment "Vitest — Test Environment"
[3]: https://docs.github.com/en/actions/tutorials/build-and-test-code "GitHub Docs — Building and testing code"
