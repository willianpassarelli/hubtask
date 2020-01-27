import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  flex: 1;
`;

export const Card = styled.TouchableOpacity`
  margin-bottom: 10px;
  height: 100px;
  background: #fff;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  border-left-color: ${props => (props.color ? props.color : '#FFF')};
  border-left-width: 2px;
`;

export const Infos = styled.View`
  flex: 1;
  margin-left: 15px;
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

export const ProjectTitle = styled.Text`
  text-align: right;
  font-size: 14px;
  font-weight: bold;
`;
