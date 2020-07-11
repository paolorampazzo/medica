import React from 'react';

// import { Container } from './styles';
import SignIn from './pages/SignIn';

import GlobalStyle from './styles/global';

import AppProvider from './context';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
