import React from 'react';
import { useSelector } from 'react-redux';
import NavigationService from './services/navigation';

import createRouter from './routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);

  return (
    <Routes
      ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
    />
  );
}
