// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './styles';
import ImageLogo from '../../../assets/images/logo.svg';

const Header: React.FC = () => {
  const classes = useStyles({});
  return (
    <Box className={classes.container}>
      <img src={ImageLogo} alt="G1" />
    </Box>
  );
};

export default Header;
