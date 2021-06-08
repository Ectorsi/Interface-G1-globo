/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    height: '246px',

    background: '#EFEFEF',

    borderRadius: '3px',
    textAlign: 'center',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  NewsGroupersText: {
    fontSize: '18px',
    lineHeight: '25px',
    color: '#666',
    textTransform: 'inherit',
    padding: '0 100px',
    textAlign: 'initial',
  },
}));

export default useStyles;
