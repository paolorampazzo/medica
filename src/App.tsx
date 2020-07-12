import React from 'react';

// import { Container } from './styles';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvider from './context';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>
);

export default App;
