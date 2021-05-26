// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const Title: React.FC = () => {
  const classes = useStyles();
  return (
   
      <Typography className={classes.title} variant="h2">
        Equipes buscam desaparecidos da explosão que matou mais de 100 e feriu 4
        mil no Líbano
      </Typography>
 
  );
};

export default Title;
