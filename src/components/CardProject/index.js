import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  IconTask,
  Card,
  Title,
  Subtitle,
  CardBottom,
  Circle,
  Symbol,
} from './styles';

export default function CardProject({ data }) {
  const nameSymbol = useMemo(() => {
    const str = data.user.username;
    return str.substring(0, 1).toUpperCase();
  }, [data.user.username]);

  return (
    <Container>
      <Card>
        <IconTask>
          <Icon name="tasks" size={28} color="#FFF" />
        </IconTask>

        <Title>#{data.__meta__.tasks_count} Tarefas</Title>
        <Subtitle>{data.title}</Subtitle>
        <CardBottom>
          <Circle>
            <Symbol>{nameSymbol}</Symbol>
          </Circle>
        </CardBottom>
      </Card>
    </Container>
  );
}
