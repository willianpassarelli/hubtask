import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/Background';

import { createRequest } from '~/store/modules/project/actions';

import {
  Container,
  Header,
  TextHeader,
  Title,
  FormInput,
  Description,
  SubmitButton,
  TextButton,
} from './styles';

export default function New() {
  const descriptionRef = useRef();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(createRequest(title, description));
  }

  return (
    <Background>
      <Container>
        <Header>
          <TextHeader>Crie um novo projeto</TextHeader>
        </Header>
        <Title>Nome do projeto</Title>
        <FormInput
          icon="content-paste"
          autoCorrect={false}
          placeholder="Título do seu projeto"
          returnKeyType="next"
          onSubmitEditing={() => descriptionRef.current.focus()}
          value={title}
          onChangeText={setTitle}
        />
        <Description>Descrição do projeto</Description>
        <FormInput
          icon="description"
          placeholder="Descrição para seu projeto"
          ref={descriptionRef}
          returnKeyType="next"
          value={description}
          onChangeText={setDescription}
        />
        <SubmitButton onPress={handleSubmit}>
          <TextButton>CRIAR PROJETO</TextButton>
        </SubmitButton>
      </Container>
    </Background>
  );
}

New.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="plus-circle" size={42} color={tintColor} />
  ),
};
