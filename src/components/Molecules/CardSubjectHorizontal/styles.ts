import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: 'relative',
      width: '100%',

      // height: '195px',
      height: 'auto',
      background: '#fff',

      borderRadius: '4px',
      textAlign: 'left',
      textTransform: 'capitalize',

      display: 'flex',

      '& h2': {
        marginTop: '8px',
        marginBottom: '6px',
        letterSpacing: '-1.245px',
      },
      '& .MuiLink-underlineHover:hover': {
        textDecoration: 'none',
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
    contentWrapperDescription: {
      fontSize: '16px',
      lineHeight: '20px',
      color: '#555',
      letterSpacing: '-0.3px',
    },
    subjectGroupList: {
      color: '#C4170C',
      '& a': {
        color: '#C4170C',
      },
    },
    subjectGroupListText: {
      fontSize: '14px',
      lineHeight: '19px',
    },

    paper: {},
    CloseModal: {
      position: 'absolute',
      top: '30px',
      right: '30px',
    },
    btnTtitleModal: {
      textAlign: 'left',
      justifyContent: 'inherit',
    },
  })
);

export default useStyles;
