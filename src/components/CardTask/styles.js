import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  margin-bottom: 10px;
`;

export const Card = styled.TouchableOpacity`
  height: 75px;
  background: #fff;
  padding: 15px;
  flex-direction: row;
  border-radius: 10px;
`;

export const Infos = styled.View`
  margin: 0 15px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Status = styled.Text`
  font-size: 14px;
  color: #ccc;
  margin-top: 5px;
`;
