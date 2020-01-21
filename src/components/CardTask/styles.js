import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Card = styled.TouchableOpacity`
  margin-bottom: 10px;
  height: 75px;
  background: #fff;
  padding: 15px;
  flex-direction: row;
  border-radius: 10px;
`;

export const Infos = styled.View`
  padding: 0 15px;
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
