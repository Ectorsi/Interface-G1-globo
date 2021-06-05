/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  thumbWrapper: {
    height: '100%',
    position: 'relative',
  },
  thumbImage: {
    width: '100%',
    height: '100%',

    objectFit: 'cover',

    borderRadius: '3px',
    textAlign: 'center',
  },
}));

export default useStyles;
