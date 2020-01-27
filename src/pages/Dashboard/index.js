import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';

import Background from '~/components/Background';
import CardProject from '~/components/CardProject';
import CardTask from '~/components/CardTask';

import api from '~/services/api';

import {
  Container,
  Header,
  Circle,
  Avatar,
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
  Left,
} from './styles';

export default function Dashboard({ navigation }) {
  const [profile] = useSelector(state => state.user.profile);

  const [date] = useState([
    { id: 1, label: 'Hoje', value: 'today' },
    { id: 2, label: 'Semana', value: 'week' },
    { id: 3, label: 'Mês', value: 'month' },
  ]);
  const [selected, setSelected] = useState(date[0]);
  const [list, setList] = useState([]);
  const [project, setProject] = useState(0);
  const [tasklist, setTasklist] = useState([]);

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
      const response = await api.get(`/projects/${project}/tasks`, {
        params: {
          date: selected.value,
        },
      });

      setTasklist(response.data);
    }
    loadTasks();
  }, [project, selected]);

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
          <Left>
            <Name>Olá {profile.username},</Name>
            <Subtitle>Sua lista de tarefas de hoje</Subtitle>
          </Left>
          <Circle onPress={() => navigation.navigate('Profile')}>
            <Avatar
              source={{
                uri: profile.file
                  ? profile.file.url
                  : 'https://api.adorable.io/avatars/120/abott@adorable.png',
              }}
            />
          </Circle>
        </Header>
        <SearchBar onPress={() => navigation.navigate('Search')}>
          <Icon name="ios-search" size={24} color="#444" />
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
