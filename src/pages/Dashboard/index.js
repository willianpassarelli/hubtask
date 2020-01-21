import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconIo from 'react-native-vector-icons/Ionicons';

import CardProject from '~/components/CardProject';

import api from '~/services/api';

import {
  Container,
  Header,
  Name,
  Subtitle,
  Title,
  List,
  SearchBar,
  SearchInput,
  MenuDate,
  MenuItem,
} from './styles';

export default function Dashboard() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await api.get('/projects');

        const { data } = response.data;

        setList(data);
      } catch (err) {
        Alert.alert('Erro ao carregar', 'Não foi possivel listar os projetos');
      }
    }
    loadProjects();
  }, []);

  return (
    <Container>
      <Header>
        <Name>Olá willianpassarelli</Name>
        <Subtitle>Sua lista de tarefas de hoje</Subtitle>
      </Header>
      <SearchBar>
        <IconIo name="ios-search" size={24} color="#444" />
        <SearchInput>Procure por uma tarefa</SearchInput>
      </SearchBar>
      <Title>Projetos</Title>
      <List
        horizontal
        data={list}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <CardProject data={item} />}
      />
      <MenuDate>
        <MenuItem>Hoje</MenuItem>
        <MenuItem>Semana</MenuItem>
        <MenuItem>Mês</MenuItem>
      </MenuDate>
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={28} color={tintColor} />
  ),
};
