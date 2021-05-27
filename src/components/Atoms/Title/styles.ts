/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core/styles';
import { TitleProps } from './index';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: (props: TitleProps) => (props.isHighlight ? '#C4170C' : '#fff'),
    width: '95%',
    marginLeft: '10px',
    marginBottom: '25px',
    marginTop: '40px',
    fontWeight: 700,
    letterSpacing: -2.5,
    lineHeight: 1,
    fontSize: (props: TitleProps) => (props.isTitleLarge ? '40px' : '24px'),
  },
}));

export default useStyles;
