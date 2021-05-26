// eslint-disable-next-line no-use-before-define
import React from 'react';
import { ButtonBase } from '@material-ui/core';
import useStyles from './styles';
import Label from '../../Atoms/components/Label/Index';
import Title from '../../Atoms/components/Title/Index';
import Description from '../../Atoms/components/Description/Index';

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
