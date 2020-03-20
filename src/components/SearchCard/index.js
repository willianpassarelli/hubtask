import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Card, Infos, Title, Status, ProjectTitle } from './styles';

export default function SearchCard({ data, onPress }) {
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
      <Card onPress={onPress} color={data.status.color}>
        <Icon name={data.status.icon} color={data.status.color} size={32} />
        <Infos>
          <ProjectTitle>{data.project.title}</ProjectTitle>
          <Title numberOfLines={1}>{data.title}</Title>
          <Status>{data.status.name}</Status>
        </Infos>
      </Card>
    </Container>
  );
}
