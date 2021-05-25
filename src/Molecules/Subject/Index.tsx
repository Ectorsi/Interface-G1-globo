// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './styles';
import Label from '../../Atoms/components/Label/Index';
import Title from '../../Atoms/components/Title/Index';
import Description from '../../Atoms/components/Description/Index';

const Subject: React.FC = () => {
  const classes = useStyles({});
  return (
    <Box className={classes.container}>
      <Label />
      <Title />
      <Description />
    </Box>
  );
};

export default Subject;
