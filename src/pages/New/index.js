import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/Background';
import Button from '~/components/Button';
import Modal from '~/components/Modal';

import { createRequest } from '~/store/modules/project/actions';
import { actionModal } from '~/store/modules/modal/actions';

import {
  Container,
  Header,
  TextHeader,
  Title,
  FormInput,
  Description,
} from './styles';

export default function New() {
  const descriptionRef = useRef();

  const { loading, error, titleModal, descriptionModal } = useSelector(
    state => state.project
  );

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(createRequest(title, description));
  }

  function handleModal() {
    dispatch(actionModal());
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
        <Button onPress={handleSubmit} loading={loading}>
          CRIAR PROJETO
        </Button>
      </Container>
      <Modal
        isVisible={error}
        title={titleModal}
        description={descriptionModal}
        textButton="OK"
        onPressButton={handleModal}
      />
    </Background>
  );
}

New.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="plus-circle" size={42} color={tintColor} />
  ),
};
