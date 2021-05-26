// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

export type TitleProps = {
  isHighlight?: boolean;
  isWhiteColor?: boolean;
};

// eslint-disable-next-line react/prop-types
const Title: React.FC<TitleProps> = ({ isHighlight, isWhiteColor }) => {
  const props = {
    isHighlight,
    isWhiteColor,
  };
  const classes = useStyles(props);
  return (
    <Typography className={classes.title} variant="h2">
      Equipes buscam desaparecidos da explosão que matou mais de 100 e feriu 4
      mil no Líbano
    </Typography>
  );
};

export default Title;
