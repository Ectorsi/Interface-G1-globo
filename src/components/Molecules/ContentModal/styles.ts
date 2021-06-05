import { createStyles, makeStyles, Theme } from '@material-ui/core';
import closeModal from '../../../assets/images/closeModal.svg';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrappContentModal: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        maxWidth: '808px',
      },
    },
    videoContentModal: {
      width: '100%',
    },
    closeModal: {
      backgroundImage: `url(${closeModal})`,

      backgroundRepeat: 'no-repeat',
      width: '20px',
      height: '20px',
      padding: 0,
      minWidth: 'inherit',
      position: 'absolute',
      top: '3%',
      right: 0,
      '& .MuiTouchRipple-root': {
        display: 'none',
      },
    },
  })
);
