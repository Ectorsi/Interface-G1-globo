import React from 'react';

import { Box, Grid, useMediaQuery } from '@material-ui/core';
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
      {/* <Grid container spacing={3}>
          <Grid item xs={12}>
            
          </Grid>
       </Grid>    */}
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
      {/* <Grid container spacing={3}>
          <Grid item xs={12}>
            
          </Grid>
       </Grid>    */}
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
