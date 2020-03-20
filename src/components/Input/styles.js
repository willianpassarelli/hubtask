import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: #eee;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#666',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
`;
