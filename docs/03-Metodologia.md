# Metodologia

# Controle de Versão para o Projeto

## Convenções de Nomenclatura para Branches
- **main**: Branch principal, contendo as versões estáveis do projeto.
- **develop**: Branch de desenvolvimento, onde novas funcionalidades são integradas.
- **feature/descrição**: Branches para desenvolvimento de novas funcionalidades (ex: `feature/login`).
- **bugfix/descrição**: Branches para correção de bugs (ex: `bugfix/correção-login`).
- **hotfix/descrição**: Branches para correções urgentes em produção (ex: `hotfix/correção-crítica`).

## Convenções de Nomenclatura para Tags
- **vX.Y.Z**: Versões estáveis do projeto (ex: `v1.0.0`, `v1.1.0`, `v1.1.1`).

## Convenções de Commits
- **feat**: Adição de nova funcionalidade (ex: `feat: adicionar autenticação de dois fatores`).
- **fix**: Correção de bug (ex: `fix: corrigir erro na tela de login`).
- **docs**: Alterações na documentação (ex: `docs: atualizar README`).
- **style**: Alterações de formatação, sem impacto no código (ex: `style: corrigir indentação`).
- **refactor**: Refatoração de código (ex: `refactor: melhorar performance da função de busca`).
- **test**: Adição ou modificação de testes (ex: `test: adicionar testes para a função de login`).
- **chore**: Outras mudanças que não modificam código fonte ou testes (ex: `chore: atualizar dependências`).

## Processo de Merges
1. **Branches de Funcionalidade**: Merges de `feature/descrição` para `develop` via Pull Request (PR).
2. **Branches de Correção de Bug**: Merges de `bugfix/descrição` para `develop` via Pull Request (PR).
3. **Branches de Correção Urgente**: Merges de `hotfix/descrição` para `main` e `develop` via Pull Request (PR).
4. **Branch de Desenvolvimento**: Merge de `develop` para `main` via Pull Request (PR), após testes e revisões.

## Gestão de Questões
- Utilização de issues no GitHub para registrar e acompanhar bugs, novas funcionalidades e melhorias.
- Issues categorizadas com labels (ex: `bug`, `feature`, `enhancement`, `question`).

## Gerenciamento de Projeto

### Metodologia Ágil
Adotaremos a metodologia ágil para garantir flexibilidade e adaptação às mudanças durante o desenvolvimento do projeto.

### Processo
- **Sprints**: Ciclos de desenvolvimento de 2 semanas.
- **Daily Stand-ups**: Reuniões diárias de 15 minutos para alinhamento da equipe.
- **Sprint Planning**: Planejamento das tarefas a serem executadas durante a sprint.
- **Sprint Review**: Revisão do que foi concluído na sprint.
- **Sprint Retrospective**: Reflexão sobre o que funcionou bem e o que pode ser melhorado.

### Implementação do Scrum
- **Product Owner**: Responsável por definir e priorizar o backlog do produto.
- **Scrum Master**: Responsável por facilitar o processo Scrum e remover impedimentos.
- **Development Team**: Equipe responsável pela implementação das funcionalidades e correções.

### Gerenciamento de Projeto no GitHub
- Utilização do GitHub Projects para gerenciamento de tarefas e acompanhamento do progresso.
- Quadros Kanban para visualização do fluxo de trabalho.

### Ferramentas

#### Ferramentas Empregadas
- **Git**: Controle de versão distribuído.
- **GitHub**: Plataforma para hospedagem de código e gerenciamento de projetos.

#### Ferramentas de Gerenciamento
- **GitHub Projects**: Para gestão de tarefas e planejamento de sprints.
- **Slack/Teams**: Comunicação interna da equipe.
- **Jira/Trello**: Alternativas para gerenciamento de tarefas e sprints.
