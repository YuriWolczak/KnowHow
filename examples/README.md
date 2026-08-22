# Exemplos executáveis

> Código-fonte pequeno usado para demonstrar e validar exercícios das trilhas de C e Java.

Os arquivos desta área são deliberadamente independentes dos trechos de código em Markdown. Cada arquivo C deve possuir uma função `main` e compilar sem interação; cada arquivo Java deve possuir uma classe pública com o mesmo nome do arquivo e uma função `main` sem interação.

O [workflow de verificação](../.github/workflows/compile-examples.yml) compila e executa todos os arquivos encontrados em `examples/c/` e `examples/java/`. Assim, adicionar um novo exemplo a uma dessas pastas também o inclui automaticamente na validação contínua.

## Conteúdos atuais

| Linguagem | Exemplos |
| --- | --- |
| C | Soma dos algarismos, número primo e FizzBuzz |
| Java | Soma dos algarismos, número primo e FizzBuzz |
| Web | Study Path com HTML semântico, CSS responsivo e JavaScript modular |

Os exemplos são complementares aos exercícios de lógica em [fundamentals/exercises](../fundamentals/exercises/README.md). A implementação em uma linguagem concreta deve preservar o algoritmo, mas pode explorar as características próprias da linguagem. Os testes automatizados ficam em [tests/](../tests/).

[Voltar para a Knowledge Base](../README.md) · [Ver trilha de C](../languages/c/README.md) · [Ver trilha de Java](../languages/java/README.md)
