// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const Label: React.FC = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.label} variant="caption">
      Cenário de destruição
    </Typography>
  );
};

export default Label;
