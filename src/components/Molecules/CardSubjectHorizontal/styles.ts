import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type StyleProp = {
  imageURL?: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '464px',
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
      justifyContent: (props: StyleProp) =>
        props.imageURL ? 'flex-end' : 'inherit',
      alignItems: 'start',
      flexDirection: 'column',
    },
  })
);

export default useStyles;
