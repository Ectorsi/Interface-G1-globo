/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Box, Typography } from '@material-ui/core';
import React, { useCallback } from 'react';

import useStyles from './styles';
import Play from '../../../assets/images/play.svg';

type VideoDurationProps = {
  videoDuration: number;
};

const VideoDuration: React.FC<VideoDurationProps> = ({ videoDuration }) => {
  const handleVideoDuration = useCallback((seconds: number): string => {
    const minutes = seconds / 60;
    const rminutes = Math.round(minutes);

    const hours = minutes / 60;
    const rhours = Math.floor(hours);

    const restMinutes = (hours - rhours) * 60;
    const restgMinutesOfHour = Math.round(restMinutes);

    if (rhours > 0) {
      if (restgMinutesOfHour > 0) {
        return `${rhours}h${restgMinutesOfHour}m`;
      }
      return `${rhours}h`;
    }
    return `${rminutes}m`;
  }, []);

  const classes = useStyles();

  return (
    <Box
      data-testid="VideoDuration"
      className={classes.thumbPlayAndVideoDuration}
    >
      <img src={Play} alt="Play" />

      <Typography>{`${handleVideoDuration(videoDuration)}`}</Typography>
    </Box>
  );
};

export default VideoDuration;
