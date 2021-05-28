/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core/styles';
import { TitleProps } from '.';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: (props: TitleProps) => (props.isWhite ? '#fff' : '#C4170C'),
    textShadow: (props: TitleProps) =>
      props.isWhite ? '0px 1px 3px rgba(0, 0, 0, 0.8)' : 'inherit',
    width: '95%',
    marginLeft: '10px',
    marginBottom: '25px',
    marginTop: '40px',
    fontWeight: 700,
    letterSpacing: -2.5,
    lineHeight: 1,
    fontSize: (props: TitleProps) => (props.isHighlight ? '40px' : '24px'),
  },
}));

export default useStyles;
