import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

export type TitleProps = {
  isHighlight?: boolean;
  isWhite?: boolean;
  text: string;
};

const Title: React.FC<TitleProps> = ({
  isHighlight = false,
  isWhite = false,
  text,
}) => {
  const classes = useStyles({ isHighlight, isWhite, text });
  return (
    <Typography data-testid="title" className={classes.title} variant="h2">
      {text}
    </Typography>
  );
};

export default Title;
