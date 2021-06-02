import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',

      // height: '195px',
      height: 'auto',
      background: '#fff',

      // border: 'solid 1px #E1E1E1',
      borderRadius: '4px',
      textAlign: 'left',
      textTransform: 'capitalize',

      '& h2': {
        marginTop: '8px',
        marginBottom: '6px',
      },
    },
    wrapper: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column-reverse',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'inherit',
      },
    },
    thumbnailWrapper: {
      height: '100%',
    },
    contentWrapper: {
      [theme.breakpoints.up('md')]: {
        padding: '0 10px',
      },
    },
  })
);

export default useStyles;
