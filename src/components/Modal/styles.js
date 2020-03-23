import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Box = styled(Animated.View)`
  padding: 15px;
  border-radius: 10px;
  background: #fff;
  margin: 0 50px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const HeaderModal = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleModal = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const BodyModal = styled.View`
  margin: 20px 0;
`;

export const Description = styled.Text``;

export const ButtonsModal = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  background-color: #35b49f;
  padding: 10px;
  border-radius: 4px;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: 600;
`;

export const CloseModal = styled.TouchableOpacity``;
