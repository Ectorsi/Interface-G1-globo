import { Box, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Live: React.FC = () => {
  const classes = useStyles();

  return (
    <Box data-testid="live" className={classes.container}>
      <Typography variant="button" className={classes.liveText}>
        AO VIVO
      </Typography>
    </Box>
  );
};

export default Live;
