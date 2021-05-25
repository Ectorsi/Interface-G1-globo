// eslint-disable-next-line no-use-before-define
import React from 'react';
// eslint-disable-next-line no-use-before-define
import { CssBaseline } from '@material-ui/core';
import Header from './Molecules/Header/Index';
import Subject from './Molecules/Subject/Index';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Subject />
    </>
  );
};

export default App;
