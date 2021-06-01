/* eslint-disable react/prop-types */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './styles';
import ImageLogo from '../../../assets/images/logo.svg';
import ImageLogoMobile from '../../../assets/images/logo-mobile.svg';

type HeaderProps = {
  isMobile?: boolean;
};

const Header: React.FC<HeaderProps> = ({ isMobile = false }) => {
  const classes = useStyles();
  return (
    <Box data-testid="Header" className={classes.container}>
      {isMobile ? (
        <img src={ImageLogoMobile} alt="G1" />
      ) : (
        <img src={ImageLogo} alt="G1" />
      )}
    </Box>
  );
};

export default Header;
