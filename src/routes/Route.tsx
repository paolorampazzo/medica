import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  roleRequired?: string;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  roleRequired,
  path,
  ...rest
}) => {
  const { user }: any = useAuth();

  const mainPages = [
    {
      role: 'admin',
      mainPage: '/admin',
      redirectPage: '/common',
    },
    {
      role: 'normal',
      mainPage: '/dashboard',
      redirectPage: '/common',
    },
  ];

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        const role = user ? user.role : null;

        const mainPage = user
          ? mainPages.filter((item) => item.role === user.role)[0].mainPage
          : '/signin';

        // const redirectPage = user
        //   ? mainPages.filter((item) => item.role === user.role)[0].redirectPage
        //   : '/common';

        const checkRole =
          (roleRequired && role === roleRequired) || !roleRequired;

        const check = (checkRole && isPrivate && !!user) || !isPrivate;

        const Goto: React.FC = () =>
          path === '/' ? (
            <Redirect
              to={{
                pathname: mainPage,
                state: { from: location },
              }}
            />
          ) : (
            <Component />
          );

        return check ? (
          <Goto />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
