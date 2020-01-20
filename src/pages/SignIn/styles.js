import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  background: #35b49f;
  align-items: center;
`;

export const Top = styled.View`
  margin: 80px 0;
`;

export const Form = styled.View`
  flex: 1;
  align-self: stretch;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background: #fff;
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
  flex: 2;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
`;

export const BottomText = styled.Text`
  font-size: 16px;
`;

export const BottomButton = styled.TouchableOpacity`
  padding: 20px 0;
`;
