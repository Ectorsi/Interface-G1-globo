import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type StyleProp = {
  imageURL?: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      [theme.breakpoints.up('md')]: {
        // width: '464px',
        fontSize: '20px',
      },

      height: '426px',
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
    },
    wrappTitleAndDescription: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      flex: 1,
      padding: '40px 0',
    },
  })
);

export default useStyles;
