import { makeStyles, Theme } from '@material-ui/core/styles';
import { TitleProps } from './index';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: '#C4170C',
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
