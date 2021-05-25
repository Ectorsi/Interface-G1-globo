import { createMuiTheme, makeStyles, Theme } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) => ({
  label: {
    color: '#333',
    width: '85%',
    marginLeft: '10px',
    fontSize: '16px;',
  },
}));

export const themeTypography = createMuiTheme({
  typography: {
    fontFamily: 'Open Sans',
    caption: {
      fontWeight: 600,
    },
  },
});

export default useStyles;
