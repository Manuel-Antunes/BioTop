import React from 'react';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';

import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <Dashboard />
      <GlobalStyle />
      <ToastContainer style={{ fontSize: '3rem' }} />
    </>
  );
}

export default App;
