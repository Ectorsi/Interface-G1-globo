import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';

import Title from '../../Atoms/Title/index';

import Live from '../../Atoms/Live';
import PostDateTimeAndPlaceText from '../../Atoms/PostDateTimeAndPlaceText';
import Thumbnail from '../../Atoms/Thumbnail';
/**
 * Matéria (pode ser inProgress ou não) 
    - Deve ter uma thumbnail
    - Deve ter um link na thumbnail e no titulo
    - Caso seja inProgress deve aparecer o componente live, caso não deve aparecer a label 
    - Deve ter um titulo
    - Deve ter um PostDateTimeAndPlaceText
 */
export type SubjectHorizontalProps = {
  inProgress?: boolean;
  title: string;
  label?: string;
  description?: string;
  duration: string;
  newsSource: string;
  link?: string;
  subjectType: 'SUBJECT' | 'SUBJECT_GROUP' | 'VIDEO';
};

const CardSubjectHorizontal: React.FC<SubjectHorizontalProps> = ({
  inProgress = false,
  title,
  duration,
  newsSource,
  link,
  subjectType = 'SUBJECT_GROUP',
}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:780px)');

  const Subject = (
    <>
      <Box className={classes.container}>
        <Grid container className={classes.wrapper}>
          <Grid item xs={12} md={4} className={classes.thumbnailWrapper}>
            <a href={link}>
              <Thumbnail />
            </a>
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
              <a href={link}>
                <Title text={title} />
              </a>
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
              <Thumbnail />
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
    default:
      return Subject;
  }
};

export default CardSubjectHorizontal;
