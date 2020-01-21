import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Card, Infos, Title, Status } from './styles';

export default function CardTask({ data, onPress }) {
  return (
    <Container>
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
