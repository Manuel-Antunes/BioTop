import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Route from './Route';
import Dashboard from '../pages/Dashboard';
import Game from '../pages/Game';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Dashboard} isPrivate />
      <Route path="/game" component={Game} isPrivate />
    </Switch>
  );
};

export default Routes;
