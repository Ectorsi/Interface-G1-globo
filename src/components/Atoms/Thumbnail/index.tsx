/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Box } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

import VideoDuration from '../VideoDuration';

type ThumbnailProps = {
  alt?: string;
  videoDuration?: number;
  imagePath: string;
};

const Thumbnail: React.FC<ThumbnailProps> = ({
  alt,
  videoDuration,
  imagePath,
}) => {
  const classes = useStyles();

  return (
    <Box data-testid="Thumbnail" className={classes.thumbWrapper}>
      {!!videoDuration && <VideoDuration videoDuration={videoDuration} />}

      <img className={classes.thumbImage} src={imagePath} alt={alt} />
    </Box>
  );
};

export default Thumbnail;
