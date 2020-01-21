import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Projects() {
  return <View />;
}

Projects.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="newspaper" size={28} color={tintColor} />
  ),
};
