/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useCallback, useEffect, useState } from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ButtonBase, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import useStyles from './styles';

import Title from '../../Atoms/Title/index';

import Live from '../../Atoms/Live';
import PostDateTimeAndPlaceText from '../../Atoms/PostDateTimeAndPlaceText';
import Thumbnail from '../../Atoms/Thumbnail';
import ContentModal from '../ContentModal';
import useCheckImageExists from '../../../Utils/useCheckImageExists';

type Content = {
  section: string;
  summary: string;
  title: string;
  url: string;
};

type SingleSubject = {
  content: Content;
  type: string;
};

export type SubjectHorizontalProps = {
  inProgress?: boolean;
  title: string;
  label?: string;
  description?: string;
  duration: string;
  newsSource: string;
  link?: string;
  subjectType: 'SUBJECT' | 'SUBJECT_GROUP' | 'VIDEO';
  subjectGroup?: SingleSubject[];
  videoDuration?: number;
  videoPath?: string;
  imagePath: string;
};

const CardSubjectHorizontal: React.FC<SubjectHorizontalProps> = ({
  inProgress = false,
  title,
  description,
  duration,
  newsSource,
  link,
  subjectType = 'VIDEO',
  subjectGroup,
  videoDuration,
  videoPath,
  imagePath,
}) => {
  const { returnDefaultOrExistUrl, imageUrl } = useCheckImageExists();
  useEffect(() => {
    returnDefaultOrExistUrl(imagePath);
  }, [imagePath, returnDefaultOrExistUrl]);

  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:780px)');

  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const Subject = (
    <>
      <Box className={classes.container}>
        <Grid container className={classes.wrapper}>
          <Grid item xs={12} md={4}>
            <ButtonBase onClick={handleOpen} disableTouchRipple>
              <Thumbnail imagePath={imageUrl} />
            </ButtonBase>
            {!isDesktop && (
              <PostDateTimeAndPlaceText
                duration={duration}
                newsSource={newsSource}
              />
            )}
          </Grid>

          <Grid item xs={12} md={8} className={classes.contentWrapper}>
            {inProgress && <Live />}
            <div>
              <ButtonBase
                onClick={handleOpen}
                disableTouchRipple
                className={classes.btnTtitleModal}
              >
                <Title text={title} />
              </ButtonBase>
              {isDesktop && (
                <PostDateTimeAndPlaceText
                  duration={duration}
                  newsSource={newsSource}
                />
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );

  const SubjectGroup = (
    <>
      <Box className={classes.container}>
        <Grid container className={classes.wrapper}>
          <Grid item xs={12} md={4} className={classes.thumbnailWrapper}>
            <Link href={link}>
              <Thumbnail imagePath={imageUrl} />
            </Link>
            {!isDesktop && duration && (
              <PostDateTimeAndPlaceText
                duration={duration}
                newsSource={newsSource}
              />
            )}
          </Grid>

          <Grid item xs={12} md={8} className={classes.contentWrapper}>
            {inProgress && <Live />}
            <div>
              <Link href={link}>
                <Title text={title} />
              </Link>

              <ul className={classes.subjectGroupList}>
                {subjectGroup?.map((singleSubject) => (
                  <li>
                    <Link href={singleSubject.content.url}>
                      <Typography className={classes.subjectGroupListText}>
                        {singleSubject.content.title}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>

              {isDesktop && duration && (
                <PostDateTimeAndPlaceText
                  duration={duration}
                  newsSource={newsSource}
                />
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );

  // - Quando clica na thumbnail ou no titulo, abre a modal do video
  const Video = (
    <>
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {videoPath ? (
          <ContentModal
            title={title}
            videoPath={videoPath}
            handleOpen={handleOpen}
          />
        ) : (
          <div>Ops! houve um problema neste vídeo.</div>
        )}
      </Modal>
      <Box className={classes.container}>
        <Grid container className={classes.wrapper}>
          <Grid item xs={12} md={4} className={classes.thumbnailWrapper}>
            <ButtonBase onClick={handleOpen} disableTouchRipple>
              <Thumbnail videoDuration={videoDuration} imagePath={imageUrl} />
            </ButtonBase>
            {!isDesktop && duration && (
              <PostDateTimeAndPlaceText
                duration={duration}
                newsSource={newsSource}
              />
            )}
          </Grid>

          <Grid item xs={12} md={8} className={classes.contentWrapper}>
            {inProgress && <Live />}
            <div>
              <ButtonBase
                onClick={handleOpen}
                disableTouchRipple
                className={classes.btnTtitleModal}
              >
                <Title text={title} />
              </ButtonBase>

              <Typography className={classes.contentWrapperDescription}>
                {description}
              </Typography>

              {isDesktop && duration && (
                <PostDateTimeAndPlaceText
                  duration={duration}
                  newsSource={newsSource}
                />
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
  switch (subjectType) {
    case 'SUBJECT':
      return Subject;
    case 'SUBJECT_GROUP':
      return SubjectGroup;
    case 'VIDEO':
      return Video;
    default:
      return Subject;
  }
};

export default CardSubjectHorizontal;
