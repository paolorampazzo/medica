import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Admin from '../pages/Admin';
import Common from '../pages/Common';

const roles = ['admin', 'normal'];

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signin" exact component={SignIn} />
    <Route
      path="/dashboard"
      exact
      component={Dashboard}
      isPrivate
      roleRequired={roles[1]}
    />
    <Route
      path="/admin"
      exact
      component={Admin}
      isPrivate
      roleRequired={roles[1]}
    />
    <Route component={Common} />
  </Switch>
);

export default Routes;
