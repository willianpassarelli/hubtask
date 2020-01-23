import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Card, Infos, Title, Status, ProjectTitle } from './styles';

export default function SearchCard({ data, onPress }) {
  return (
    <Container>
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
