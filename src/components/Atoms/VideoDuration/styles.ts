/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  thumbPlayAndVideoDuration: {
    position: 'absolute',
    left: '24px',
    bottom: '24px',
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    '& img': {
      marginRight: '8px',
    },
  },
}));

export default useStyles;
