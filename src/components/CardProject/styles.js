import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Card = styled.TouchableOpacity`
  flex-direction: column;
  width: 135px;
  height: 175px;
  margin: 30px 0;
  border-radius: 10px;
  background: #35b49f;
  padding: 10px;
  margin-right: 10px;
  box-shadow: 0px 10px 5px #ddd;
  elevation: 1;
`;

export const IconTask = styled.View`
  width: 40px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 5px;
  opacity: 1;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  color: #fff;
  margin: 5px 0;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const CardBottom = styled.View`
  justify-content: flex-end;
  margin-top: 25px;
`;

export const Circle = styled.View`
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  border-radius: 50px;
  background: #fff;
`;

export const Symbol = styled.Text`
  color: #35b49f;
  font-size: 12px;
  font-weight: bold;
`;
