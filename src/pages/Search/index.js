import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Background from '~/components/Background';
import SearchCard from '~/components/SearchCard';

import api from '~/services/api';

import {
  Container,
  Header,
  Title,
  Filter,
  TextFilter,
  SearchBar,
  SearchInput,
  TaskList,
} from './styles';

export default function Search() {
  const [search, setSearch] = useState('');
  const [tasklist, setTasklist] = useState('');

  useEffect(() => {
    async function loadTasks() {
      const response = await api.get('/projects/0/tasks', {
        params: {
          search,
        },
      });

      setTasklist(response.data);
    }
    loadTasks();
  }, [search]);

  return (
    <Background>
      <Container>
        <Header>
          <Title>Tarefas</Title>
          <Filter>
            <TextFilter>Filtros</TextFilter>
            <Icon name="ios-funnel" size={18} color="#35b49f" />
          </Filter>
        </Header>
        <SearchBar>
          <Icon name="ios-search" size={24} color="#444" />
          <SearchInput
            value={search}
            onChangeText={setSearch}
            autoFocus
            autoCorrect={false}
            spellCheck={false}
            clearButtonMode="always"
            returnKeyType="done"
            placeholder="Procure por uma tarefa"
          />
        </SearchBar>
        <TaskList
          data={tasklist}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <SearchCard data={item} />}
        />
      </Container>
    </Background>
  );
}

Search.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{ marginLeft: 5 }}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="ios-arrow-back" size={26} color="#000" />
    </TouchableOpacity>
  ),
});
