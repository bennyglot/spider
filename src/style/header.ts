import { makeStyles } from '@material-ui/core/styles';

export type loginHeaderRoot = {
  flexGrow: number;
}

export const loginHeader = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },  
    title: {
      flexGrow: 1,
    },
  }));    