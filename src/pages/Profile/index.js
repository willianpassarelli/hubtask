import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Icon from 'react-native-vector-icons/Ionicons';

import Background from '~/components/Background';

import { signOut } from '~/store/modules/auth/actions';

import api from '~/services/api';

import {
  Container,
  Title,
  Account,
  User,
  Avatar,
  Edit,
  Username,
  Email,
  Menu,
  Item,
} from './styles';

export default function Profile() {
  const [profile] = useSelector(state => state.user.profile);

  const [image, setImage] = useState({
    url: 'https://api.adorable.io/avatars/120/abott@adorable.png',
  });

  const dispatch = useDispatch();

  async function getPermissionAsync() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        Alert.alert(
          'Camera',
          'Sorry, we need camera roll permissions to make this work!'
        );
      }
    }
  }

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const imageData = new FormData();

      imageData.append('file', {
        uri: result.uri,
        type: result.type,
        name: `${Date.now()}`,
      });

      const response = await api.post('files', imageData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { id, url } = response.data;

      await api.put(`users/${profile.id}`, {
        file_id: id,
      });

      setImage(url);
    }
  }

  useEffect(() => {
    getPermissionAsync();
  }, []);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Title>Meu perfil</Title>
        <Account>
          <Avatar
            source={{
              uri: profile.file ? profile.file.url : image.url,
            }}
          />
          <Edit onPress={pickImage}>
            <Icon name="md-create" size={14} color="#666" />
          </Edit>
          <User>
            <Username>{profile.username}</Username>
            <Email>{profile.email}</Email>
          </User>
        </Account>
        <Menu onPress={handleSignOut}>
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
