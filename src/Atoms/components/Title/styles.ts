import { createMuiTheme, makeStyles, Theme } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: '#C4170C',
    width: '95%',
    marginLeft: '10px',
    marginBottom: '25px',
    marginTop: '40px',
    fontSize: '40px;',
  },
}));

// export const themeTypography = createMuiTheme({
//   typography: {
//     fontFamily: 'Open Sans',
//     h2: {
//       fontWeight: 'bold',
//       lineHeight: 1.1,
//     },
//   },
// });

export default useStyles;
