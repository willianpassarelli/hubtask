import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Header = styled.View`
  padding: 50px 0;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  color: #ccc;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  flex-grow: 0;
`;

export const SearchBar = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 43px;
  padding: 10px 15px;
  background: #eee;
  border-radius: 10px;
  margin-bottom: 25px;
`;

export const SearchInput = styled.Text`
  margin-left: 15px;
  font-size: 14px;
  color: #ccc;
`;

export const MenuDate = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MenuItem = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-right: 50px;
  color: ${props => (props.color ? '#ddd' : '#000')};
`;

export const MenuBorder = styled.View`
  width: 30px;
  border-radius: 5px;
  border-bottom-color: #35b49f;
  border-bottom-width: 4px;
  margin-bottom: 10px;
`;

export const MenuSelected = styled.TouchableOpacity``;

export const TaskList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;
