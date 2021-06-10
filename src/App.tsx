// eslint-disable-next-line no-use-before-define
import React from 'react';
// eslint-disable-next-line no-use-before-define
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

import Home from './Pages/Home/Index';

export const themeTypography = createMuiTheme({
  typography: {
    fontFamily: 'Open Sans',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themeTypography}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
};

export default App;
