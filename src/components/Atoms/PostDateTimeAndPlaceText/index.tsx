/* eslint-disable import/no-duplicates */

import React from 'react';
import { Typography } from '@material-ui/core';
import { formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { parseISO } from 'date-fns';
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
  console.log(today, 'TODAYYY');

  console.log(duration, 'durationnnnnnnnnnn');

  let formatedDuration;

  const dateTime = new Date(duration);

  const formatedCurrentDateTime = today.toString();
  // const formatedCurrentPostDateTime = dateTime;

  const currentDateTime = parseISO(formatedCurrentDateTime);
  // const currentPostDateTime = parseISO(dateTime.toString());
  // console.log(currentPostDateTime, 'currentPostDateTimeeeeeeee');
  console.log(dateTime, 'dateTimeeeeeeeeee');
  // console.log(formatedCurrentDateTime, 'formatedCurrentDateTime');
  // console.log(formatedCurrentPostDateTime, 'formatedCurrentPostDateTime');
  if (currentDateTime && dateTime) {
    formatedDuration = formatDistance(currentDateTime, dateTime, {
      locale: pt,
      addSuffix: true,
    });
  }
  // console.log(dateTime, 'dateTime');
  // console.log(formatedDuration, 'formatedDuration');

  return (
    <Typography
      data-testid="PostDateTimeAndPlaceText"
      className={classes.container}
      variant="body2"
    >
      {formatedDuration && <>{` ${formatedDuration} — ${newsSource}`}</>}
      {/* asfaasf */}
    </Typography>
  );
};

export default PostDateTimeAndPlaceText;
