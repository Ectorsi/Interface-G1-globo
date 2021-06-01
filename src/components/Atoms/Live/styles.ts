/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '58px',
    height: '20px',

    background: '#FF0000',

    borderRadius: '3px',
    textAlign: 'center',
  },
  liveText: {
    fontWeight: 'bold',
    fontSize: '11px',
    color: '#fff',
  },
}));

export default useStyles;
