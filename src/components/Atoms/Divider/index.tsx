import { Box } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Divider: React.FC = () => {
  const classes = useStyles();
  return <div data-testid="divider" className={classes.divider} />;
};

export default Divider;
