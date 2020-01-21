import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconIo from 'react-native-vector-icons/Ionicons';

import Background from '~/components/Background';
import CardProject from '~/components/CardProject';
import CardTask from '~/components/CardTask';

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
  MenuSelected,
  MenuDate,
  MenuItem,
  MenuBorder,
  TaskList,
} from './styles';

export default function Dashboard() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState({
    id: 1,
    label: 'Hoje',
    value: 'today',
  });
  const [date] = useState([
    { id: 1, label: 'Hoje', value: 'today' },
    { id: 2, label: 'Semana', value: 'week' },
    { id: 3, label: 'Mês', value: 'month' },
  ]);
  const [project, setProject] = useState(0);
  const [tasklist, setTaskList] = useState([]);

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

  useEffect(() => {
    async function loadTasks() {
      const response = await api.get(`/projects/${project}/tasks`);

      if (response.data.length !== 0) {
        setTaskList(response.data);
      }
    }
    loadTasks();
  }, [project]);

  function handleMenuSelected(item) {
    setSelected(item);
  }

  function handleProjectSelected(item) {
    setProject(item);
  }

  return (
    <Background>
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
          renderItem={({ item }) => (
            <CardProject
              data={item}
              onPress={() => handleProjectSelected(item.id)}
            />
          )}
        />
        <MenuDate>
          {date.map(item => (
            <MenuSelected
              key={item.value}
              onPress={() => handleMenuSelected(item)}
            >
              {item.label === selected.label ? (
                <>
                  <MenuItem>{item.label}</MenuItem>
                  <MenuBorder />
                </>
              ) : (
                <MenuItem color>{item.label}</MenuItem>
              )}
            </MenuSelected>
          ))}
        </MenuDate>
        <TaskList
          data={tasklist}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <CardTask data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={28} color={tintColor} />
  ),
};
