import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/Background';

import { Container } from './styles';

export default function Projects() {
  return (
    <Background>
      <Container />
    </Background>
  );
}

Projects.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="newspaper" size={28} color={tintColor} />
  ),
};
