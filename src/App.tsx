// eslint-disable-next-line no-use-before-define
import React from 'react';
// eslint-disable-next-line no-use-before-define
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Header from './Molecules/Header/Index';
import Subject from './Molecules/Subject/Index';

export const themeTypography = createMuiTheme({
  typography: {
    fontFamily: 'Open Sans',
    h2: {
      fontWeight: 'bold',
      lineHeight: 1.1,
    },
  },
})

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
