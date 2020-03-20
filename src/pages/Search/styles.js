import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  padding: 8px 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Filter = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  border-color: #35b49f;
  border-radius: 50px;
  border-width: 1px;
`;

export const TextFilter = styled.Text`
  color: #35b49f;
`;

export const SearchBar = styled.View`
  flex-direction: row;
  align-items: center;
  height: 43px;
  margin: 0 20px;
  padding: 10px 20px;
  background: #eee;
  border-radius: 10px;
  margin-bottom: 25px;
`;

export const SearchInput = styled.TextInput`
  padding: 0px 10px;
  width: 100%;
`;

export const TaskList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  margin: 0 20px;
`;
