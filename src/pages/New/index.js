import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import { Container } from './styles';

export default function New() {
  return <View />;
}

New.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="plus-circle" size={42} color={tintColor} />
  ),
};
