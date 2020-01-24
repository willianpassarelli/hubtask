import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Card, Infos, Title, Status } from './styles';

export default function CardTask({ data, onPress }) {
  const [offset] = useState(new Animated.ValueXY({ x: 100, y: 0 }));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.x, {
        toValue: 0,
        speed: 5,
        bounciness: 10,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
      }),
    ]).start();
  }, [offset.x, opacity]);

  return (
    <Container
      style={[{ transform: [...offset.getTranslateTransform()] }, { opacity }]}
    >
      <Card onPress={onPress}>
        <Icon name={data.status.icon} color={data.status.color} size={32} />
        <Infos>
          <Title numberOfLines={1}>{data.title}</Title>
          <Status>{data.status.name}</Status>
        </Infos>
      </Card>
    </Container>
  );
}
