import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

// Componente para o conteúdo à esquerda do título
const DefaultLeftContent = props => <Avatar.Icon {...props} icon="scale" />;

const MyCard = ({
  title = "Título padrão",
  subtitle = "Subtítulo padrão",
  leftContent = DefaultLeftContent,
  children,
  actions
}) => (
  <Card>
    <Card.Title title={title} subtitle={subtitle} left={leftContent} />
    <Card.Content>
      {children}
    </Card.Content>
    <Card.Actions>
      {actions ? actions : <Text variant="bodyMedium">Texto de ação padrão</Text>}
    </Card.Actions>
  </Card>
);

export default MyCard;