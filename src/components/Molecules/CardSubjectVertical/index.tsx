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

const CardSubjectVertical: React.FC<SubjectProps> = ({
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
    <ButtonBase
      data-testid="Button-CardSubjectVertical"
      className={classes.container}
      disableTouchRipple
    >
      {!!label && <Label data-testid="label" text={label} />}
      <Title
        data-testid="title"
        isHighlight
        isWhite={isTextWhite}
        text={title}
      />
      {!!description && (
        <Description data-testid="description" text={description} />
      )}
    </ButtonBase>
  );
};

export default CardSubjectVertical;
