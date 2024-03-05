# Especificações do Projeto

Nesta seção do documento, serão abordadas as especificações detalhadas do projeto do aplicativo de Monitoramento de Índice de Massa Corporal (IMC). As especificações incluirão uma análise detalhada dos requisitos funcionais e não funcionais do aplicativo, juntamente com os recursos e funcionalidades planejados para atender às necessidades dos usuários. Para realizar essa tarefa, serão empregadas diversas técnicas e ferramentas, incluindo:

1- **Levantamento de Requisitos:** Utilização de entrevistas com potenciais usuários, profissionais de saúde e especialistas em design de experiência do usuário (UX) para identificar e compreender as necessidades, preferências e expectativas dos usuários em relação ao aplicativo.

2- **Análise Competitiva:** Avaliação de aplicativos similares disponíveis no mercado para identificar pontos fortes e fracos, bem como oportunidades de diferenciação e inovação para o aplicativo de Monitoramento de IMC.

3- **Prototipagem e Design Iterativo:** Utilização de ferramentas de prototipagem e design, como Adobe XD, Sketch ou Figma, para criar protótipos interativos do aplicativo e realizar testes de usabilidade com usuários para iterar e refinar o design.

4- **Modelagem de Dados:** Desenvolvimento de modelos de dados para representar as informações que serão armazenadas e manipuladas pelo aplicativo, utilizando ferramentas como diagramas de entidade-relacionamento (ER) ou diagramas de classe UML.

5- **Definição de Requisitos Funcionais e Não Funcionais:** Documentação dos requisitos funcionais, que descrevem as principais funcionalidades e comportamentos esperados do aplicativo, e dos requisitos não funcionais, que abordam aspectos como desempenho, segurança e usabilidade.

6- **Estimativa de Recursos e Cronograma:** Estimativa dos recursos necessários para o desenvolvimento do aplicativo, incluindo tempo, equipe e tecnologias, e criação de um cronograma detalhado para orientar o processo de desenvolvimento.

Essas técnicas e ferramentas serão empregadas de forma integrada para garantir que as especificações do projeto sejam abrangentes, precisas e alinhadas com as necessidades e expectativas dos usuários, resultando em um aplicativo eficaz e satisfatório para o público-alvo.


## Personas

1- Luciana Miler, Profissional de Saúde Ocupada:
Idade: 35 anos
Profissão: Médica
Descrição: Luciana é uma médica ocupada que trabalha longas horas no hospital. Ela quer um aplicativo de monitoramento de IMC que seja rápido e fácil de usar, permitindo-lhe acompanhar o IMC de seus pacientes em tempo real e fornecer conselhos de saúde quando necessário.

2- Pedro Henrique, Atleta Amador:
Idade: 28 anos
Profissão: Engenheiro
Descrição: Pedro é um entusiasta do fitness que pratica esportes regularmente. Ele deseja um aplicativo que não só rastreie seu IMC, mas também forneça insights sobre como melhorar sua composição corporal e desempenho atlético.

3- Ana Lucia, Estudante Universitária:
Idade: 20 anos
Profissão: Estudante de Medicina
Descrição: Ana está estudando medicina e está interessada em aprender mais sobre saúde e nutrição. Ela procura um aplicativo que não apenas monitore seu IMC, mas também forneça informações educativas sobre alimentação saudável e estilo de vida.

4- Márcio Oliveira, Pai de Família:
Idade: 42 anos
Profissão: Gerente de Vendas
Descrição: Márcio é um pai ocupado com responsabilidades familiares e profissionais. Ele deseja um aplicativo simples e intuitivo que o ajude a monitorar seu IMC e o de sua família, facilitando a manutenção de hábitos saudáveis para todos.

5- Sofia Santos, Aposentada Ativa:
Idade: 65 anos
Profissão: Aposentada
Descrição: Sofia é uma aposentada que gosta de manter um estilo de vida ativo. Ela busca um aplicativo que a ajude a monitorar seu IMC e a saúde geral à medida que envelhece, com dicas específicas para sua faixa etária.
Histórias de Usuário:

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Luciana Miler		|quero poder cadastrar rapidamente os IMCs dos meus pacientes durante consultas para acompanhar sua saúde ao longo do tempo.| garantindo uma melhor gestão do atendimento e fornecendo orientações de saúde mais precisas.| 
|Pedro Hentique 	|gostaria de poder sincronizar meu aplicativo com dispositivos de rastreamento de fitness para que meu IMC seja atualizado automaticamente com meus dados de atividade física.|facilitando meu acompanhamento de desempenho atlético e ajustes necessários em minha rotina de exercícios.|
|Ana Lucia 		|desejo ter acesso a artigos e dicas sobre nutrição saudável diretamente no aplicativo para me educar sobre hábitos alimentares adequados.|aumentando meu conhecimento em saúde e nutrição para aplicação profissional futura.|
|Márcio	Oliveira	|quero poder adicionar os perfis de cada membro da minha família no aplicativo para monitorar seus IMCs e garantir que todos estejam saudáveis.|promovendo hábitos saudáveis em casa e cuidando da saúde de toda a família.|
|Sofia Santos 		|gostaria de receber lembretes personalizados no aplicativo para fazer check-ups de saúde regulares e monitorar meu IMC à medida que envelheço.|promovendo uma abordagem proativa para minha saúde e bem-estar na terceira idade.|
|Luciana Miller 	|preciso de uma ferramenta de análise de dados no aplicativo que me permita identificar tendências de saúde em meus pacientes com base em seus IMCs ao longo do tempo.|facilitando a tomada de decisões clínicas e fornecendo um cuidado mais personalizado.|
|Pedro Henrique 	|quero poder definir metas de IMC no aplicativo e receber recomendações personalizadas para alcançar esses objetivos de forma saudável.|motivando-me a manter hábitos saudáveis e atingir metas de composição corporal.|
|Ana Lucia 		|gostaria de ter acesso a uma calculadora de calorias no aplicativo para ajudar a controlar minha ingestão diária de alimentos e manter um peso saudável.|facilitando o monitoramento da minha dieta e promovendo escolhas alimentares conscientes.|
|Márcio Oliveira	|desejo receber notificações automáticas no aplicativo quando o IMC de um membro da minha família estiver fora da faixa saudável, para que possamos agir rapidamente.|garantindo que todos na família mantenham um estilo de vida saudável e evitando problemas de saúde futuros.|
|Sofia Santos		|quero poder compartilhar meus dados de IMC com meu médico diretamente do aplicativo para que eles possam acompanhar minha saúde de perto e fornecer orientações específicas.|garantindo uma comunicação eficiente com meu profissional de saúde e uma abordagem colaborativa para cuidar da minha saúde.|

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
