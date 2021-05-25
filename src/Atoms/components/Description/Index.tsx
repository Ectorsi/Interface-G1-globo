// eslint-disable-next-line no-use-before-define
import React from 'react';
import { MuiThemeProvider, Typography } from '@material-ui/core';
import useStyles, { themeTypography } from './styles';

const Description: React.FC = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={themeTypography}>
      <Typography className={classes.description} variant="body2">
        Suspeita é de que a explosão aconteceu em um depósito de nitrato de
        amônio, um tipo de fertilizante, na zona portuária de Beirute.
      </Typography>
    </MuiThemeProvider>
  );
};

export default Description;
