import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '464px',
      height: '426px',
      background: '#fff',
      padding: '15px',
      border: 'solid 1px #E1E1E1',
      borderRadius: '4px',
      margin: '0 40px',
      textAlign: 'left',
      textTransform: 'capitalize',
      display: 'block',
    },
  })
);

export default useStyles;
