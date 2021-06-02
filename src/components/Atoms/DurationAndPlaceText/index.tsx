/* eslint-disable import/no-duplicates */

import React from 'react';
import { Typography } from '@material-ui/core';
import { formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import {} from 'date-fns-tz';
import useStyles from './styles';

type DurationAndPlaceTextProps = {
  duration: string;
  newsSource: string;
};

const DurationAndPlaceText: React.FC<DurationAndPlaceTextProps> = ({
  duration,
  newsSource,
}) => {
  const classes = useStyles();
  const today = new Date();
  today.setHours(today.getHours() - 3);

  const formatedDuration = formatDistance(today, new Date(duration), {
    locale: pt,
    addSuffix: true,
  });

  return (
    <Typography
      data-testid="DurationAndPlaceText"
      className={classes.container}
      variant="body2"
    >{` ${formatedDuration} — ${newsSource}`}</Typography>
  );
};

export default DurationAndPlaceText;
