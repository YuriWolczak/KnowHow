# Organizador de despesas

> 🟡 Intermediário — transforme registros simples em um resumo confiável de despesas.

## 🎯 Objetivo

Construir autonomia combinando estruturas de dados, funções, validação, persistência e histórico de mudanças.

## 🌍 Contexto

Uma pessoa quer registrar despesas pessoais sem depender de uma planilha para cada consulta. Ela precisa cadastrar lançamentos e descobrir quanto gastou por categoria em um período.

## 📝 Problema

Crie um programa de linha de comando que permita registrar, listar e resumir despesas. Cada lançamento deve possuir descrição, valor, categoria e data.

## ✅ Requisitos funcionais

1. Adicionar uma despesa com descrição, valor positivo, categoria e data.
2. Listar despesas cadastradas.
3. Filtrar ou resumir despesas por categoria.
4. Calcular o total geral.
5. Salvar e carregar os dados de um arquivo local.
6. Informar erros de entrada sem apagar dados válidos.

## 🧱 Requisitos técnicos

- Organize regras em funções pequenas.
- Separe leitura de entrada, domínio e persistência quando possível.
- Use um formato de arquivo documentado, como JSON ou CSV.
- Registre o desenvolvimento em commits lógicos.
- Inclua testes para cálculo, validação e arquivo inválido quando souber trabalhar com testes.

## ⚠️ Restrições

A primeira versão não precisa de banco de dados, autenticação, sincronização ou interface gráfica. Não trate valores monetários como texto durante o cálculo; defina uma estratégia de precisão e documente-a.

## 📏 Critérios de conclusão

- [ ] Uma despesa válida pode ser registrada.
- [ ] Valores zero ou negativos são rejeitados.
- [ ] A listagem é reproduzível e compreensível.
- [ ] O total por categoria confere com exemplos manuais.
- [ ] O programa sobrevive a arquivo ausente ou inválido com uma mensagem útil.
- [ ] A execução está documentada em um README do projeto.

## 💡 Sugestões

Comece com uma lista em memória e valide as regras antes de criar o arquivo. Defina uma representação única para uma despesa. Só depois implemente persistência e relatórios.

## ➕ Extensões opcionais

- filtrar por intervalo de datas;
- editar ou remover lançamentos;
- exportar um resumo;
- adicionar testes automatizados;
- trocar arquivo por banco de dados;
- criar uma API.

## 📚 Conhecimentos relacionados

- [Estruturas de dados](../fundamentals/data-structures.md)
- [Funções](../fundamentals/functions.md)
- [Tratamento de erros em Python](../languages/python/basic/error-handling.md)
- [Controle de despesas pessoais](../projects/beginner/expense-tracker.md)
- [Git](../technologies/git/README.md)

[Voltar para desafios](./README.md) · [Voltar para a Knowledge Base](../README.md)
