# Plano de Testes de Software

Planos de teste de Software
1 – Teste de cadastro
Ao realizar o cadastro na página de cadastros com as seguintes informações requeridas: Usuário; E-mail e senha todos esses dados devem ser validados então deve ser criado no bando de dados um registro para esse usuário aonde cada coluna consiste em uma das informações preenchidas e esse usuário deve ter um Id único de identificação no banco de dados. A função de Criação de usuários seria a responsável por esse fluxo.

2 – Teste de Login
Ao utilizar seu e-mail e senha para realizar o login deverá ser feita a validação através dos dados e a partir daqui haverá um método login que busca na lista de usuários cadastrados para verificar se o e-mail e senha correspondem a algum usuário existente.

3 – Teste de edição de perfil
Na página de edição de perfil primeiramente o usuário deverá poder editar seu perfil, essa página contém informações importante sobre as medidas do usuário que serão utilizadas para seu cálculo de IMC. Nessa página também estarão disponíveis o histórico de IMC’s relacionados àquele perfil que foram calculados previamente e no banco relacionados ao perfil específico.

4- Teste da página de calculadora
O usuário nessa página deverá ser capaz de observar todos as suas informações relacionadas a pesos e medidas (recuperados por um método que acessam as informações do usuário), assim como o seu IMC final baseado nesses dados recuperados (será calculado através da função de calculadora disponível no app) e sua qualificação, baseada na comparação do valor do IMC com os valores tabelados.
