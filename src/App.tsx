// eslint-disable-next-line no-use-before-define
import React from 'react';
// eslint-disable-next-line no-use-before-define
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Header from './components/Molecules/Header/index';
import CardSubjectVertical from './components/Molecules/CardSubjectVertical/index';
import DurationAndPlaceText from './components/Atoms/DurationAndPlaceText';

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
      <CardSubjectVertical
        title={`
        Equipes buscam desaparecidos 
        da explosão que matou mais de 100 e feriu 4
        mil no Líbano
        `}
      />
    </ThemeProvider>
  );
};

export default App;
