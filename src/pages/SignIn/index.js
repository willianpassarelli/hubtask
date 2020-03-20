import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { useDispatch } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import {
  Background,
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

export default function SignIn({ navigation }) {
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  async function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Top>
          <Image source={logo} resizeMode="cover" />
        </Top>
        <Form>
          <FormInput
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Email"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Senha"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <ContainerButton>
            <TextButton>Entrar</TextButton>
            <CircleButton onPress={handleSubmit}>
              <Icon name="ios-arrow-round-forward" size={44} color="#FFF" />
            </CircleButton>
          </ContainerButton>
        </Form>
        <BottomItems>
          <BottomButton>
            <BottomText onPress={() => navigation.navigate('SignUp')}>
              Cadastre-se
            </BottomText>
          </BottomButton>
          <BottomButton>
            <BottomText>Esqueci minha senha</BottomText>
          </BottomButton>
        </BottomItems>
      </Container>
    </Background>
  );
}
