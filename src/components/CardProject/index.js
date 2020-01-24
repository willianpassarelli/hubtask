import React, { useMemo, useEffect, useState } from 'react';
import { Animated } from 'react-native';
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
  const [offset] = useState(new Animated.ValueXY({ x: 100, y: 0 }));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.x, {
        toValue: 0,
        speed: 5,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
      }),
    ]).start();
  }, [offset.x, opacity]);

  const nameSymbol = useMemo(() => {
    const str = data.user.username;
    return str.substring(0, 1).toUpperCase();
  }, [data.user.username]);

  return (
    <Container
      style={[{ transform: [...offset.getTranslateTransform()] }, { opacity }]}
    >
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
