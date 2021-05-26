// eslint-disable-next-line no-use-before-define
import React from 'react';
import { ButtonBase } from '@material-ui/core';
import useStyles from './styles';
import Label from '../../Atoms/Label/index';
import Title from '../../Atoms/Title/index';
import Description from '../../Atoms/Description/index';

const Subject: React.FC = () => {
  const classes = useStyles({});

  return (
    <ButtonBase className={classes.container} disableTouchRipple>
      <Label />
      <Title />
      <Description />
    </ButtonBase>
  );
};

export default Subject;
