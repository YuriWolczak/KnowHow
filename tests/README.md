# Testes

> Suítes automatizadas para verificar a lógica C e Java do repositório.

A pasta `tests/` contém testes unitários que rodam sem entrada manual, rede ou banco de dados. Os exemplos didáticos continuam em [`examples/`](../examples/); os testes verificam os comportamentos que precisam permanecer corretos.

| Linguagem | Estrutura | Comando |
| --- | --- | --- |
| C | `tests/c/CMakeLists.txt`, `test_logic.c` e CTest | `ctest --test-dir build/tests-c --output-on-failure` |
| Java | `tests/java/pom.xml`, código em `src/main` e testes em `src/test` | `mvn --batch-mode --file tests/java/pom.xml test` |

O script [`scripts/test_all.sh`](../scripts/test_all.sh) executa toda a validação local. Os workflows [`compile-examples.yml`](../.github/workflows/compile-examples.yml) e [`test-all.yml`](../.github/workflows/test-all.yml) executam os exemplos e as suítes unitárias no GitHub Actions.

Para entender a arquitetura completa, leia o [guia de testes C e Java](../docs/testing/c-and-java.md).

[Voltar para a Knowledge Base](../README.md)
