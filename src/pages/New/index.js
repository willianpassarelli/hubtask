import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/Background';

import { Container } from './styles';

export default function New() {
  return (
    <Background>
      <Container />
    </Background>
  );
}

New.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="plus-circle" size={42} color={tintColor} />
  ),
};
