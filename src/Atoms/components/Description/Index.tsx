// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const Description: React.FC = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.description} variant="body2">
      Suspeita é de que a explosão aconteceu em um depósito de nitrato de
      amônio, um tipo de fertilizante, na zona portuária de Beirute.
    </Typography>
  );
};

export default Description;
