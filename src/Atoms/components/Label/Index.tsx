// eslint-disable-next-line no-use-before-define
import React from 'react';
import { MuiThemeProvider, Typography } from '@material-ui/core';
import useStyles, { themeTypography } from './styles';

const Label: React.FC = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={themeTypography}>
      <Typography className={classes.label} variant="caption">
        Cenário de destruição
      </Typography>
    </MuiThemeProvider>
  );
};

export default Label;
