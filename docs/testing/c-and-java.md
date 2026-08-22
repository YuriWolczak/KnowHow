# Testes unitários automatizados em C e Java

> Guia prático da estrutura adotada na Knowledge Base e do fluxo que roda localmente e no GitHub Actions.

## O que é um teste unitário?

Um teste unitário verifica uma unidade pequena de comportamento, normalmente uma função ou método, usando entradas controladas e comparando o resultado com uma expectativa. O teste deve ser rápido, repetível e isolado de rede, relógio, arquivos externos e interação manual sempre que possível.

A regra prática é manter a lógica em funções pequenas e testar seus contratos. Um teste que falha deve indicar qual comportamento deixou de ser verdadeiro, não apenas informar que o programa terminou com erro.

## Estrutura atual do repositório

| Linguagem | Código testado | Testes | Ferramenta |
| --- | --- | --- | --- |
| C | `tests/c/test_logic.c` | Funções `test_*` com `assert` | CMake + CTest |
| Java | `tests/java/src/main/java/Logic.java` | `LogicTest` com JUnit 5 | Maven + Surefire |
| Web | `examples/web/logic.js` e `controller.js` | `logic.test.js` e `controller.test.js` | Vitest + jsdom |

Os exemplos executáveis independentes continuam em [`examples/c/`](../../examples/c/) e [`examples/java/`](../../examples/java/). A pasta `tests/` contém a suíte de testes unitários. Essa separação impede que um exemplo didático e uma suíte de teste tenham responsabilidades ambíguas.

## Testes em C

O arquivo [`tests/c/CMakeLists.txt`](../../tests/c/CMakeLists.txt) habilita CTest, exige C17 e registra o executável `test_logic` como o teste `logic`. O código usa `assert` para manter a primeira versão pequena e sem dependências externas.

Execute localmente:

```bash
cmake -S tests/c -B build/tests-c
cmake --build build/tests-c --parallel
ctest --test-dir build/tests-c --output-on-failure
```

O CTest organiza a execução e retorna código de erro quando um teste falha. A opção `--output-on-failure` mostra a saída do caso problemático, o que facilita a investigação [2].

Quando a suíte crescer, extraia a lógica para módulos próprios e considere um framework de testes como Unity, Criterion ou CMocka. A escolha deve considerar dependências, suporte a mocks e integração com o sistema de build; não é necessário adicionar um framework para poucos casos simples.

## Testes em Java

A pasta [`tests/java/`](../../tests/java/) usa Maven. `Logic.java` contém funções pequenas e `LogicTest.java` usa JUnit 5 para verificar resultados, fronteiras e uma exceção esperada. O Surefire descobre e executa classes de teste durante `mvn test`.

Execute localmente:

```bash
mvn -B -f tests/java/pom.xml test
```

O `pom.xml` fixa a versão de JUnit, define `maven.compiler.release` como 21 e configura o plugin de execução de testes. Em um projeto maior, prefira pacotes explícitos, nomes de teste que descrevam comportamento e uma separação clara entre código de produção e código de teste.

## GitHub Actions

O workflow [`.github/workflows/test-all.yml`](../../.github/workflows/test-all.yml) executa testes em cada push para `main`, Pull Request e acionamento manual. Ele possui jobs independentes para C, Web e Java.

O job de C instala ou usa o ambiente `ubuntu-latest`, configura CMake, compila `tests/c` e executa `ctest --output-on-failure`. O job Web configura Node.js 22, instala o lockfile com `npm ci` e executa Vitest. O job de Java configura Temurin 21 com `actions/setup-java`, usa o cache de dependências do Maven e executa `mvn -B -f tests/java/pom.xml test`.

A ideia importante é que o CI rode os mesmos comandos que o script local. Assim, uma falha encontrada antes do push tende a ser a mesma falha observada no Pull Request, e a diferença entre ambientes fica menor [1].

## Script local antes do push

O script [`scripts/test_all.sh`](../../scripts/test_all.sh) é o ponto único de entrada. Ele valida links Markdown, exemplos Python, a sintaxe e os testes do exemplo Web, compila e executa exemplos C e Java, executa CTest e roda os testes Maven.

```bash
bash scripts/test_all.sh
```

O script termina com código diferente de zero na primeira falha. Isso permite usá-lo manualmente e também em um hook local ou em outro sistema de integração.

## Limites da estrutura atual

A suíte atual testa lógica pura e não depende de entrada interativa, rede ou banco de dados. Ela não substitui testes de integração, testes de interface Web, análise estática ou sanitizers. Quando essas necessidades surgirem, adicione uma etapa separada e declare as dependências.

Para C, uma evolução natural é usar CMake + CTest com bibliotecas próprias e, se necessário, sanitizers. Para Java, Maven já fornece um caminho para dependências, descoberta de testes e relatórios; a suíte pode evoluir para cobertura e testes de integração sem alterar o princípio de executar os mesmos comandos localmente e no CI.

## Referências

[1]: https://docs.github.com/en/actions/tutorials/build-and-test-code/java-with-maven "GitHub Docs — Building and testing Java with Maven"
[2]: https://cmake.org/cmake/help/latest/manual/ctest.1.html "CMake — ctest(1)"
[3]: https://junit.org/junit5/docs/current/user-guide/ "JUnit 5 User Guide"
[4]: https://maven.apache.org/surefire/maven-surefire-plugin/ "Apache Maven Surefire Plugin"
