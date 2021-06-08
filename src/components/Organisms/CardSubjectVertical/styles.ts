import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type StyleProp = {
  imageURL?: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      height: '426px',
      [theme.breakpoints.down('sm')]: {
        height: '100%',
      },
      background: '#fff',
      backgroundImage: (props: StyleProp) => `url(${props.imageURL})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      padding: '15px',
      border: 'solid 1px #E1E1E1',
      borderRadius: '4px',
      textAlign: 'left',
      textTransform: 'capitalize',
      display: 'flex',
      justifyContent: (props: StyleProp) =>
        props.imageURL ? 'flex-end' : 'space-between',
      alignItems: 'start',
      flexDirection: 'column',

      '& h2': {
        [theme.breakpoints.down('sm')]: {
          fontSize: '20px',
          letterSpacing: '-0.72px',
          lineHeight: '24px',
        },
      },
      '& > p': {
        [theme.breakpoints.down('sm')]: {
          fontSize: '12px',
        },
      },
      '& p': {
        [theme.breakpoints.down('sm')]: {
          fontSize: '16px',
        },
      },
    },
    wrappTitleAndDescription: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      flex: 1,
      padding: '40px 0',

      [theme.breakpoints.down('sm')]: {
        padding: 0,
      },
    },
  })
);

export default useStyles;
