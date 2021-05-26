// eslint-disable-next-line no-use-before-define
import React from 'react';
// eslint-disable-next-line no-use-before-define
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Header from './components/Molecules/Header/index';
import Subject from './components/Molecules/Subject/index';

export const themeTypography = createMuiTheme({
  typography: {
    fontFamily: 'Open Sans',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themeTypography}>
      <CssBaseline />
      <Header />
      <Subject />
    </ThemeProvider>
  );
};

export default App;
