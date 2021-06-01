// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

type LabelProps = {
  text: string;
};

const Label: React.FC<LabelProps> = ({ text }) => {
  const classes = useStyles();
  return (
    <Typography data-testid="label" className={classes.label} variant="caption">
      {text}
    </Typography>
  );
};

export default Label;
