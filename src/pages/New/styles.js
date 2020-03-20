import styled from 'styled-components/native';
import Input from '~/components/Input';

export const Container = styled.SafeAreaView`
  margin: 0 20px;
`;

export const Header = styled.View`
  margin: 20px 0;
`;

export const TextHeader = styled.Text`
  font-size: 24px;
  font-weight: 700;
`;

export const Title = styled.Text`
  font-size: 16px;
  margin: 10px 0;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-size: 16px;
  margin: 10px 0;
`;

export const SubmitButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  padding: 15px 10px;
  background: #35b49f;
  border-radius: 50px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;
