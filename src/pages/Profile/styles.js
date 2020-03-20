import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin: 8px 20px;
`;

export const Account = styled.View`
  padding: 30px 0;
  margin: 0 20px;
  align-items: center;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const User = styled.View`
  padding: 0 15px;
`;

export const Avatar = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 100px;
`;

export const Edit = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-width: 1px;
  border-radius: 100px;
  border-color: #ddd;
  position: absolute;
  bottom: 25px;
  left: 50px;
`;

export const Username = styled.Text`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Email = styled.Text`
  color: #666;
`;

export const Menu = styled.TouchableOpacity`
  margin: 0 20px;
  padding: 20px 0;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const Item = styled.Text`
  font-size: 16px;
`;
