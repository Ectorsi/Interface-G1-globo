import { ButtonBase, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const BtnSeeMore: React.FC = () => {
  const classes = useStyles();

  return (
    <ButtonBase data-testid="BtnSeeMore" className={classes.container}>
      <Typography variant="button" className={classes.BtnSeeMoreText}>
        VEJA MAIS
      </Typography>
    </ButtonBase>
  );
};

export default BtnSeeMore;
