/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Box } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

import VideoDuration from '../VideoDuration';

type ThumbnailProps = {
  alt?: string;
  videoDuration?: number;
};

const Thumbnail: React.FC<ThumbnailProps> = ({ alt, videoDuration }) => {
  const classes = useStyles();

  return (
    <Box data-testid="Thumbnail" className={classes.thumbWrapper}>
      {!!videoDuration && <VideoDuration videoDuration={videoDuration} />}

      <img
        className={classes.thumbImage}
        src="https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg"
        alt={alt}
      />
    </Box>
  );
};

export default Thumbnail;
