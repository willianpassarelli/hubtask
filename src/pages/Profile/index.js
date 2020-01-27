import React from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Background from '~/components/Background';

import {
  Container,
  Title,
  Account,
  User,
  Avatar,
  Username,
  Email,
  Menu,
  Item,
} from './styles';

export default function Profile() {
  const [profile] = useSelector(state => state.user.profile);

  return (
    <Background>
      <Container>
        <Title>Meu perfil</Title>
        <Account>
          <Avatar
            source={{
              uri: profile.file
                ? profile.file.url
                : 'https://api.adorable.io/avatars/120/abott@adorable.png',
            }}
          />
          <User>
            <Username>Willianpassarelli</Username>
            <Email>willian@hotmail.com</Email>
          </User>
        </Account>
        <Menu>
          <Item>Sair</Item>
        </Menu>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{ marginLeft: 5 }}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="ios-arrow-back" size={26} color="#000" />
    </TouchableOpacity>
  ),
});
