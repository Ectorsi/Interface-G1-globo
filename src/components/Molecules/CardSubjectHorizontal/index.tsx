import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import useStyles from './styles';
import Label from '../../Atoms/Label/index';
import Title from '../../Atoms/Title/index';
import Description from '../../Atoms/Description/index';

export type SubjectProps = {
  title: string;
  label?: string;
  description?: string;
  imageURL?: string;
  isTextWhite?: boolean;
};

const CardSubjectHorizontal: React.FC<SubjectProps> = ({
  description,
  title,
  imageURL,
  label,
  isTextWhite,
}) => {
  const props = {
    imageURL,
  };
  const classes = useStyles(props);

  return (
    <ButtonBase className={classes.container} disableTouchRipple>
      {!!label && <Label text={label} />}
      <Title isHighlight isWhite={isTextWhite} text={title} />
      {!!description && <Description text={description} />}
    </ButtonBase>
  );
};

export default CardSubjectHorizontal;
