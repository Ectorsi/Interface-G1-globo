import { ButtonBase, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

type BtnSeeMoreProps = {
  onClick(): void;
};

const BtnSeeMore: React.FC<BtnSeeMoreProps> = ({ onClick }) => {
  const classes = useStyles();

  return (
    <ButtonBase
      data-testid="BtnSeeMore"
      className={classes.container}
      onClick={onClick}
    >
      <Typography variant="button" className={classes.BtnSeeMoreText}>
        VEJA MAIS
      </Typography>
    </ButtonBase>
  );
};

export default BtnSeeMore;
