// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

type DescriptionProps = {
  text: string;
};

const Description: React.FC<DescriptionProps> = ({ text }) => {
  const classes = useStyles();
  return (
    <Typography
      data-testid="description"
      className={classes.description}
      variant="body2"
    >
      {text}
    </Typography>
  );
};

export default Description;
