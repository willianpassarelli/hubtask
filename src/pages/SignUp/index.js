import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { useDispatch } from 'react-redux';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import {
  Container,
  Top,
  Form,
  FormInput,
  ContainerButton,
  TextButton,
  CircleButton,
  BottomButton,
  BottomItems,
  BottomText,
} from './styles';

export default function SignUp({ navigation }) {
  const passwordRef = useRef();
  const confirmpassRef = useRef();
  const emailRef = useRef();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');

  const dispatch = useDispatch();

  async function handleSubmit() {
    const data = { username, email, password, password_confirmation };
    dispatch(signUpRequest(data));
  }

  return (
    <Container>
      <Top>
        <Image source={logo} resizeMode="cover" />
      </Top>
      <Form>
        <FormInput
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome de usuário"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <FormInput
          ref={emailRef}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="E-mail"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <FormInput
          ref={passwordRef}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Senha"
          returnKeyType="next"
          onSubmitEditing={() => confirmpassRef.current.focus()}
        />
        <FormInput
          ref={confirmpassRef}
          value={password_confirmation}
          onChangeText={setPassword_confirmation}
          secureTextEntry
          placeholder="Confirmar senha"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />

        <ContainerButton>
          <TextButton>Cadastrar</TextButton>
          <CircleButton onPress={handleSubmit}>
            <Icon name="ios-arrow-round-forward" size={44} color="#FFF" />
          </CircleButton>
        </ContainerButton>
        <BottomItems>
          <BottomButton>
            <BottomText onPress={() => navigation.navigate('SignIn')}>
              Já possuo uma conta
            </BottomText>
          </BottomButton>
        </BottomItems>
      </Form>
    </Container>
  );
}
