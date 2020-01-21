import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  IconTask,
  Card,
  Body,
  Title,
  Subtitle,
  CardBottom,
  Circle,
  Symbol,
} from './styles';

export default function CardProject({ data, onPress }) {
  const nameSymbol = useMemo(() => {
    const str = data.user.username;
    return str.substring(0, 1).toUpperCase();
  }, [data.user.username]);

  return (
    <Container>
      <Card onPress={onPress}>
        <IconTask>
          <Icon name="tasks" size={28} color="#FFF" />
        </IconTask>
        <Body>
          <Title>{data.__meta__.tasks_count} Tarefas</Title>
          <Subtitle>{data.title}</Subtitle>
        </Body>
        <CardBottom>
          <Circle>
            <Symbol>{nameSymbol}</Symbol>
          </Circle>
        </CardBottom>
      </Card>
    </Container>
  );
}
