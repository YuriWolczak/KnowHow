# Contribuindo com a Knowledge Base

Contribuir significa ajudar a tornar a base mais clara, correta, útil e navegável. Você não precisa ser especialista nem escrever um tutorial inteiro: corrigir um link, melhorar uma definição, apontar uma fonte oficial ou relatar uma dúvida também é uma contribuição válida.

## Antes de começar

Leia o [README principal](./README.md), escolha a área adequada e veja se o assunto já existe. Evite duplicar explicações. Quando um conceito for geral, prefira referenciar a página de fundamentos e explicar apenas o comportamento específico da linguagem ou tecnologia.

Para conteúdos novos, copie o [template correspondente](./templates/) e substitua os comentários. Escreva em português brasileiro; mantenha nomes de arquivos em inglês, lowercase e kebab-case.

## Encontrando algo para melhorar

Você pode procurar por links quebrados, exemplos difíceis de entender, pré-requisitos ausentes, erros de digitação, referências desatualizadas e assuntos marcados como “Em desenvolvimento”. Antes de alterar algo técnico, confirme a informação na documentação oficial ou em uma fonte reconhecida.

## Fluxo básico de contribuição

Uma **branch** é uma linha de trabalho separada. Ela permite preparar uma mudança sem misturar o trabalho incompleto com a linha principal do projeto. Um **commit** é um registro pequeno e compreensível de uma mudança. Um **Pull Request** é uma proposta para revisar e incorporar commits ao projeto.

### 1. Crie uma branch

Atualize sua cópia local e crie uma branch com um nome descritivo:

```bash
git switch main
git pull origin main
git switch -c docs/improve-functions-tutorial
```

Use prefixos como `docs/`, `fix/`, `exercise/`, `challenge/` ou `project/`, seguidos de uma descrição curta.

### 2. Faça uma mudança focada

Altere apenas o que pertence à proposta. Preserve a estrutura existente, use links relativos e mantenha os títulos em ordem hierárquica. Se adicionar código, explique entrada, processamento, saída e limites; quando possível, execute o exemplo.

### 3. Revise antes do commit

Confira se os links internos existem, se o Markdown renderiza corretamente, se os exemplos são coerentes e se o conteúdo não repete outra página sem necessidade. Use a auditoria local:

```bash
python3 scripts/check_links.py
```

### 4. Crie um commit claro

Um commit deve responder “o que mudou?” sem exigir a leitura de todos os arquivos:

```bash
git add .
git commit -m "docs: improve functions tutorial"
```

Prefira commits lógicos e pequenos. Não misture uma correção de ortografia com a criação de uma trilha inteira.

### 5. Envie a branch

```bash
git push -u origin docs/improve-functions-tutorial
```

### 6. Abra um Pull Request

No Pull Request, descreva:

- o problema que motivou a mudança;
- o que foi alterado;
- quais arquivos foram incluídos;
- como a mudança foi revisada ou testada;
- quais limitações ou pendências permanecem.

Uma boa descrição permite que outra pessoa entenda a proposta sem adivinhar sua intenção. Se a mudança corrigir uma issue, faça a referência correspondente.

## Padrões de conteúdo

Explique conceitos para iniciantes sem infantilizar. Defina termos técnicos quando aparecerem pela primeira vez, explique o porquê e diferencie regra geral de detalhe específico de uma ferramenta. Evite inventar comandos, APIs, referências ou exemplos apenas para preencher espaço.

Exercícios devem permitir tentativa antes da solução. Desafios precisam informar critérios de conclusão. Projetos devem descrever um problema minimamente realista e conhecimentos necessários. Consulte os templates em [templates/](./templates/).

## Sugerindo conteúdos

Para sugerir um tutorial, exercício, desafio ou projeto, descreva o público, o objetivo de aprendizagem, os pré-requisitos e a relação com conteúdos existentes. Se a sugestão for uma nova linguagem ou tecnologia, explique qual problema ela ajuda a estudar e por que ainda não é atendido pelas trilhas atuais.

## Reportando erros

Ao relatar um erro, informe a página, o trecho problemático, o comportamento esperado, o comportamento encontrado e, se aplicável, a versão da ferramenta ou do sistema operacional. Para links quebrados, inclua o destino que deixou de funcionar.

## Critérios de revisão

Uma contribuição pode ser incorporada quando estiver tecnicamente correta, clara para o público indicado, conectada à navegação existente, sem duplicação desnecessária e com referências adequadas. A revisão pode pedir alterações; isso faz parte de manter uma biblioteca confiável.

[Voltar para a Knowledge Base](./README.md)
