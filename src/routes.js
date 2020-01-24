import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/AntDesign';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Projects from './pages/Projects';
import New from './pages/New';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard: {
              screen: createStackNavigator(
                {
                  Dashboard,
                  Search,
                },
                {
                  defaultNavigationOptions: {
                    headerTitle: '',
                    headerTransparent: true,
                  },
                }
              ),
              navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="home" size={28} color={tintColor} />
                ),
              },
            },
            New,
            Projects,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              showLabel: false,
              keyboardHidesTabBar: true,
              activeTintColor: '#35B49F',
              inactiveTintColor: '#999',
              style: {
                borderTopColor: '#fff',
                borderTopWidth: 1,
                backgroundColor: '#FFF',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
