/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Button, useMediaQuery } from '@material-ui/core';
import React from 'react';
import Title from '../../Atoms/Title';

import { useStyles } from './styles';

type ContentModalProps = {
  handleOpen(): void;
  videoPath: string;
  title: string;
};
const ContentModal: React.FC<ContentModalProps> = ({
  handleOpen,
  title,
  videoPath,
}) => {
  const classes = useStyles();

  return (
    <Box data-testid="ContentModal" className={classes.wrappContentModal}>
      <Button data-testid="BtnCloseModal" className={classes.closeModal} />

      <Title text={title} isWhite />
      <video className={classes.videoContentModal} controls>
        <source
          src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"
          type="video/mp4"
        />
      </video>
    </Box>
  );
};

export default ContentModal;
