
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

**Ambiente de Trabalho:**

**Ambientes de Desenvolvimento:**
* Utilizaremos ambientes de desenvolvimento local para cada membro da equipe, configurados com as ferramentas necessárias para o desenvolvimento do projeto, incluindo IDEs, ferramentas de controle de versão e bancos de dados.
* Para a integração e testes de sistema, será disponibilizado um ambiente de homologação compartilhado.

**Gestão de Código Fonte:**
* Utilizaremos o Git como sistema de controle de versão para gerenciar o código fonte do projeto.
* O repositório Git será hospedado no GitHub, permitindo o versionamento do código, colaboração entre os membros da equipe e rastreabilidade das mudanças.

**Processo de Desenvolvimento:**

**Metodologia Ágil:**
* Adotaremos uma abordagem ágil para o desenvolvimento da Calculadora de IMC, utilizando o framework Scrum.
* As atividades serão organizadas em sprints de duas semanas, com reuniões diárias de acompanhamento do progresso e retrospectivas ao final de cada sprint.

**Ferramenta de Gestão de Projetos:**
* Utilizaremos a ferramenta Trello para gerenciar as atividades do projeto, organizar as histórias de usuário, definir o backlog do produto e acompanhar o progresso das tarefas.
* Cada tarefa será representada por um cartão no Trello, contendo informações sobre sua descrição, responsável, prazo e status.

**Gestão de Tempos:**
* Para o registro e acompanhamento das horas trabalhadas em cada tarefa, utilizaremos a ferramenta Clockify.
* Cada membro da equipe será responsável por registrar suas horas diariamente, associando-as às tarefas realizadas.

**Considerações Finais:**
* Esta metodologia proporciona um ambiente de trabalho estruturado e colaborativo para o desenvolvimento da Calculadora de IMC, permitindo uma gestão eficiente do código fonte, das atividades do projeto e do tempo dedicado a cada tarefa. O uso de práticas ágeis, aliado às ferramentas selecionadas, visa promover a transparência, a comunicação e a entrega contínua de valor ao cliente.

## Relação de Ambientes de Trabalho

### Ambientes de Trabalho

| Ambiente           | Plataforma               | Link de Acesso                                           |
|--------------------|--------------------------|----------------------------------------------------------|
| Desenvolvimento    | IDE (Integrated Development Environment) | [Visual Studio Code](https://code.visualstudio.com/)        |
| Controle de Versão | Git                      | [GitHub](https://github.com/)                             |
| Hospedagem Web     | Servidor Web (Apache, Nginx) | [Heroku](https://www.heroku.com/)                         |
| Banco de Dados     | PostgreSQL               | [ElephantSQL](https://www.elephantsql.com/)               |
| Testes de Integração | Cypress                | [Cypress Dashboard](https://dashboard.cypress.io/)        |
| Testes de Unidade  | Jest                     | [Jest](https://jestjs.io/)                                |
| Documentação       | Markdown                 | [GitHub Markdown Guide](https://guides.github.com/features/mastering-markdown/) |
| Colaboração        | Comunicação Instantânea (Slack) | [Slack](https://slack.com/)                               |
| Gestão de Projetos | Trello                   | [Trello](https://trello.com/)                             |

### Ambientes e Frameworks para Desenvolvimento de Aplicações Móveis:

| Ambiente           | Plataforma          | Link de Acesso                                    |
|--------------------|---------------------|---------------------------------------------------|
| Desenvolvimento    | IDE (Integrated Development Environment) | [Android Studio](https://developer.android.com/studio) |
| Controle de Versão | Git                 | [GitHub](https://github.com/)                      |
| Hospedagem Web     | Firebase Hosting    | [Firebase Console](https://console.firebase.google.com/) |
| Banco de Dados     | Firebase Realtime Database | [Firebase Console](https://console.firebase.google.com/) |
| Testes Automatizados | Espresso           | [Espresso Testing](https://developer.android.com/training/testing/espresso) |
| Colaboração        | Comunicação Instantânea (Slack) | [Slack](https://slack.com/)                        |
| Gestão de Projetos | Trello              | [Trello](https://trello.com/)                      |


## Controle de Versão

# Controle de Versão para o projeto Calculadora de IMC

Neste projeto, utilizamos o Git como ferramenta de controle de versão, com o GitHub sendo utilizado para hospedagem do repositório.

## Convenções de Nomenclatura para Branches:

- **main:** Versão estável já testada do software.
- **unstable:** Versão testada, mas ainda passível de problemas.
- **testing:** Versão em testes antes de ser movida para a branch unstable.
- **dev:** Branch de desenvolvimento ativa.

## Convenções de Nomenclatura para Tags:

- As tags são nomeadas de acordo com a versão estável do software.

## Convenções de Commits:

- Commits devem ser descritivos e resolver um problema específico ou implementar uma funcionalidade.

## Processo de Merges:

- Os merges são realizados para incorporar as alterações de uma branch em outra, como quando uma funcionalidade é testada com sucesso e mesclada na branch unstable.

## Gestão de Questões:

- As questões são gerenciadas através de etiquetas como "bug", "enhancement" e "feature" para categorizar os problemas reportados.
- A etiqueta "documentation" é utilizada para identificar melhorias ou adições à documentação do projeto.

Para mais informações sobre boas práticas de Git e GitHub, consulte os links úteis disponíveis.


## Gerenciamento de Projeto

### Metodologia Ágil:

O projeto utiliza metodologias ágeis para o desenvolvimento, com o Scrum como base para a definição do processo de trabalho.

#### Papéis:

- **Scrum Master:** Evandro 
- **Product Owner:** Pedro
  - **Equipe de Desenvolvimento:**
  - Vagner 
  - Bruno
  - Lucas 
- **Equipe de Design:**
  - Pedro 
  - Lucas


### Processo

Claro, aqui está a descrição do processo de implementação do Scrum e o uso do recurso de gerenciamento de projeto oferecido pelo GitHub em formato Markdown:

### Implementação do Scrum:

O grupo optou por utilizar o framework Scrum para gerenciar o desenvolvimento do projeto. O Scrum é uma metodologia ágil que enfatiza a colaboração, a adaptabilidade e a entrega contínua de valor ao cliente. Ele divide o trabalho em ciclos iterativos chamados de Sprints, que geralmente têm duração de 2 a 4 semanas.

Durante o início do projeto, foram realizadas reuniões de planejamento para definir o Product Backlog, uma lista de todas as funcionalidades desejadas para o produto. Essas funcionalidades foram priorizadas pelo Product Owner, responsável por representar os interesses dos stakeholders e definir o que é mais importante para o sucesso do projeto.

Com base no Product Backlog, foram realizadas reuniões de Sprint Planning no início de cada Sprint para selecionar as funcionalidades a serem desenvolvidas durante aquele período. A equipe de desenvolvimento, composta por membros multidisciplinares, estimou o esforço necessário para implementar cada funcionalidade e se comprometeu a entregá-las até o final da Sprint.

Durante a Sprint, a equipe realizou reuniões diárias de acompanhamento, conhecidas como Daily Standups, para compartilhar o progresso, identificar impedimentos e ajustar o plano conforme necessário. Ao final de cada Sprint, foi realizada uma revisão para demonstrar as funcionalidades concluídas aos stakeholders e uma retrospectiva para identificar pontos fortes e oportunidades de melhoria para as próximas Sprints.

### Gerenciamento de Projeto no GitHub:

Para acompanhar o andamento do projeto e o status das tarefas, o grupo utilizou o recurso de gerenciamento de projetos oferecido pelo GitHub. Isso permitiu que eles criassem e gerenciassem um quadro Kanban, onde as tarefas foram organizadas em colunas representando o fluxo de trabalho, como "To Do", "In Progress" e "Done".

Cada funcionalidade do Product Backlog foi representada como uma "Issue" no GitHub, contendo uma descrição detalhada da tarefa, sua prioridade, estimativa de esforço e quaisquer dependências. As tarefas foram atribuídas aos membros da equipe, que as moviam pelo quadro Kanban conforme eram trabalhadas.

Além disso, o GitHub também foi utilizado para controle de versão do código-fonte, facilitando a colaboração entre os membros da equipe e garantindo que todas as alterações fossem registradas e documentadas adequadamente.

Essa abordagem permitiu que o grupo mantivesse um registro claro do progresso do projeto, identificasse facilmente quais tarefas estavam em andamento e quais haviam sido concluídas, e colaborasse de forma eficaz para alcançar os objetivos do sprint e do projeto como um todo.

### Ferramentas

### Ferramentas Empregadas:

1. **Editor de Código (VS Code):**
   - O Visual Studio Code foi escolhido como o editor de código principal devido à sua ampla gama de recursos, integração com sistemas de controle de versão como o Git e sua extensibilidade através de plugins. Ele oferece uma experiência de desenvolvimento rica e eficiente para os membros da equipe.

2. **Ferramentas de Comunicação (Slack):**
   - O Slack foi escolhido como a ferramenta principal de comunicação devido à sua facilidade de uso, capacidade de organizar conversas por canais e integração com outras ferramentas, como o GitHub. Ele permite uma comunicação eficaz entre os membros da equipe, facilitando a colaboração e a troca de informações.

3. **Ferramentas de Desenho de Tela (Figma):**
   - O Figma foi escolhido como a ferramenta principal para o desenho de telas devido à sua facilidade de uso, capacidade de colaboração em tempo real e ampla gama de recursos de design. Ele permite que os membros da equipe criem wireframes e protótipos de forma rápida e eficiente, ajudando a visualizar e comunicar as necessidades de design da solução.

### Ferramentas de Gerenciamento:

1. **Folga:**
   - O Folga foi escolhido como uma ferramenta adicional de comunicação e colaboração, oferecendo recursos como chat em grupo, chamadas de vídeo e compartilhamento de arquivos. Ele complementa o Slack, fornecendo uma plataforma adicional para comunicação e colaboração entre os membros da equipe.

2. **GitHub:**
   - O GitHub foi escolhido como a plataforma principal para o gerenciamento de código-fonte, controle de versão e colaboração no desenvolvimento do projeto. Ele oferece recursos robustos para gerenciamento de problemas, controle de versão Git e integração com outras ferramentas, como o Slack, permitindo uma colaboração eficaz entre os membros da equipe no desenvolvimento do projeto.
