import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useMediaQuery } from '@material-ui/core';
import useStyles from './styles';
import Label from '../../Atoms/Label/index';
import Title from '../../Atoms/Title/index';
import Description from '../../Atoms/Description/index';
import PostDateTimeAndPlaceText from '../../Atoms/PostDateTimeAndPlaceText';

export type SubjectProps = {
  title: string;
  label?: string;
  description?: string;
  imageURL?: string;
  isTextWhite?: boolean;
  duration: string;
  newsSource: string;
};

const CardSubjectVertical: React.FC<SubjectProps> = ({
  description,
  title,
  imageURL,
  label,
  isTextWhite,
  duration,
  newsSource,
}) => {
  const props = {
    imageURL,
  };
  const classes = useStyles(props);
  const isMobile = useMediaQuery('(max-width:780px)');
  return (
    <ButtonBase
      data-testid="Button-CardSubjectVertical"
      className={classes.container}
      disableTouchRipple
    >
      {!!label && <Label text={label} />}
      {description ? (
        <div className={classes.wrappTitleAndDescription}>
          <Title isHighlight isWhite={isTextWhite} text={title} />
          <Description text={description} />
        </div>
      ) : (
        <Title isHighlight isWhite={isTextWhite} text={title} />
      )}
      {isMobile && (
        <PostDateTimeAndPlaceText duration={duration} newsSource={newsSource} />
      )}
    </ButtonBase>
  );
};

export default CardSubjectVertical;
