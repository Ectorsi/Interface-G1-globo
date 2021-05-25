import { createMuiTheme, makeStyles, Theme } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) => ({
  description: {
    color: '#000',
    width: '95%',
    marginLeft: '10px',
    fontSize: '16px;',
  },
}));

export const themeTypography = createMuiTheme({
  typography: {
    fontFamily: 'Open Sans',
    body2: {
      lineHeight: 1.3,
    },
  },
});

export default useStyles;
