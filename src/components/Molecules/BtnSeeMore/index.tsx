import { Box, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const BtnSeeMore: React.FC = () => {
  const classes = useStyles();

  return (
    <Box data-testid="BtnSeeMore" className={classes.container}>
      <Typography variant="button" className={classes.BtnSeeMoreText}>
        VEJA MAIS
      </Typography>
    </Box>
  );
};

export default BtnSeeMore;
