import { Box, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const NewsGroupers: React.FC = () => {
  const classes = useStyles();

  return (
    <Box data-testid="NewsGroupers" className={classes.container}>
      <Typography variant="button" className={classes.NewsGroupersText}>
        Agrupadores de Notícias
      </Typography>
    </Box>
  );
};

export default NewsGroupers;
