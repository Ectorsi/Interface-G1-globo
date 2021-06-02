import { Box } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

type ThumbnailProps = {
  alt?: string;
};

const Thumbnail: React.FC<ThumbnailProps> = ({ alt }) => {
  const classes = useStyles();

  return (
    <Box data-testid="Thumbnail" className={classes.thumbWrapper}>
      <img
        className={classes.thumbImage}
        src="https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg"
        alt={alt}
      />
    </Box>
  );
};

export default Thumbnail;
