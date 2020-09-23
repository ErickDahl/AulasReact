import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './Styles/global';
import Routes from './Routes';
import AppProvider from './hooks';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
