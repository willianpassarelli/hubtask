import styled from 'styled-components/native';
import { Platform } from 'react-native';

import bg from '~/assets/bg.png';

export const Background = styled.ImageBackground.attrs({
  source: bg,
})`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
`;

export const Top = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const Form = styled.View`
  align-self: stretch;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin: 20px 0;
  padding: 30px;
`;

export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  color: #444;
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
  height: 45px;
  font-size: 16px;
  margin: 10px 0;
`;

export const ContainerButton = styled.View`
  margin: 40px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextButton = styled.Text`
  font-size: 24px;
  font-weight: 500;
`;

export const CircleButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: #35b49f;
  border-radius: 100px;
  height: 44px;
  width: 44px;
`;

export const BottomItems = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
`;

export const BottomButton = styled.TouchableOpacity``;

export const BottomText = styled.Text`
  font-size: 16px;
`;
