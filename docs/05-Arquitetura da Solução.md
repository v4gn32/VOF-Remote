# Arquitetura da Solução

## Diagrama de Classes
![Diagrama de Classes](/assets/Diagrama%20de%20classes.png)

## Modelo ER
![Modelo ER](link_para_modelo_er)
Pesquisar e fazer o modelo

## Esquema Relacional

### Tabelas:
- **Usuários**
  - `id` (PK)
  - `nome`
  - `email`
  - `senha`
  - `data_criacao`
- **Dispositivos**
  - `id` (PK)
  - `usuario_id` (FK)
  - `nome`
  - `identificador_remoto`
  - `data_adicionado`
- **Sessões**
  - `id` (PK)
  - `usuario_id` (FK)
  - `dispositivo_id` (FK)
  - `data_inicio`
  - `data_fim`
  - `notas`
- **Favoritos**
  - `id` (PK)
  - `usuario_id` (FK)
  - `dispositivo_id` (FK)
- **Novidades**
  - `id` (PK)
  - `titulo`
  - `conteudo`
  - `data_publicacao`

### Relacionamentos:
- **Usuários - Dispositivos**
  - Um usuário pode ter vários dispositivos.
- **Usuários - Sessões**
  - Um usuário pode ter várias sessões.
- **Dispositivos - Sessões**
  - Um dispositivo pode ser acessado em várias sessões.
- **Usuários - Favoritos**
  - Um usuário pode ter vários dispositivos favoritos.
- **Dispositivos - Favoritos**
  - Um dispositivo pode ser favorito de vários usuários.

### Restrições de Integridade:
- **Chave Primária (PK)**
  - `id` em cada tabela.
- **Chave Estrangeira (FK)**
  - `usuario_id` em `Dispositivos`, `Sessões`, e `Favoritos` referenciam `id` em `Usuários`.
  - `dispositivo_id` em `Sessões` e `Favoritos` referenciam `id` em `Dispositivos`.
- **Único**
  - `email` em `Usuários`.
  - `identificador_remoto` em `Dispositivos`.
- **Não Nulo**
  - Todos os campos obrigatórios como `nome`, `email`, `senha` em `Usuários`.

## Modelo Físico
O modelo físico detalha a implementação do esquema relacional no banco de dados escolhido, incluindo tipos de dados específicos, índices, e outros detalhes de implementação.

## Tecnologias Utilizadas
- **Frontend**: React Native, HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Banco de Dados**: PostgreSQL
- **Controle de Versão**: Git, GitHub
- **Autenticação**: OAuth, JWT

## Hospedagem
- **Servidor**: AWS (Amazon Web Services)
- **Banco de Dados**: Amazon RDS
- **Armazenamento de Arquivos**: Amazon S3

## Qualidade de Software
- **Testes Unitários**: Jest
- **Testes de Integração**: Cypress
- **Análise de Código**: ESLint, Prettier
- **Integração Contínua/Entrega Contínua (CI/CD)**: GitHub Actions
- **Monitoramento e Logs**: New Relic, Loggly
- **Documentação**: Swagger, Markdown
