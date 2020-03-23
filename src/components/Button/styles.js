import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  margin: 20px 0;
  padding: 15px 10px;
  background: #35b49f;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;
