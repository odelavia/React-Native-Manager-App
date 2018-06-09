import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Please Login" initial={true} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;