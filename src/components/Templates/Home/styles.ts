import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {},
    newsGroupWrapper: {
      marginTop: '10px',
    },
    wrappContainer: {
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '0px',
        paddingRight: '0px',
      },
      marginBottom: '30px',
    },
  })
);

export default useStyles;
