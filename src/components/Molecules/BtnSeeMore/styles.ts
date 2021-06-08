/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    height: '48px',

    background: '#C4170C',

    borderRadius: '3px',
    textAlign: 'center',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderBottom: ' solid 2px #9D120A',
  },
  BtnSeeMoreText: {
    fontWeight: 'bold',
    fontSize: '14px',
    letterSpacing: '-0.5px',
    color: '#fff',
  },
}));

export default useStyles;
