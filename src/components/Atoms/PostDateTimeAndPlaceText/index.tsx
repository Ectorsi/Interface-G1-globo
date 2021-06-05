/* eslint-disable import/no-duplicates */

import React from 'react';
import { Typography } from '@material-ui/core';
import { formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import useStyles from './styles';

type PostDateTimeAndPlaceTextProps = {
  duration: string;
  newsSource: string;
};

const PostDateTimeAndPlaceText: React.FC<PostDateTimeAndPlaceTextProps> = ({
  duration,
  newsSource,
}) => {
  const classes = useStyles();
  const today = new Date();
  today.setHours(today.getHours() - 3); // tratando o fuso horario

  let formatedDuration;

  const dateTime = new Date(duration);

  if (today && dateTime) {
    formatedDuration = formatDistance(today, dateTime, {
      locale: pt,
      addSuffix: true,
    });
  }

  return (
    <Typography
      data-testid="PostDateTimeAndPlaceText"
      className={classes.container}
      variant="body2"
    >
      {formatedDuration && <>{` ${formatedDuration} — ${newsSource}`}</>}
    </Typography>
  );
};

export default PostDateTimeAndPlaceText;
