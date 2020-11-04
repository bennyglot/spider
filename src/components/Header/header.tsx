/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {IAppState,classesType} from '../../types/app';
import MiniDrawer from '../../components/Drawer/drawer';
import {appProps} from '../../stores/app';

const useStyles = makeStyles((theme) => ({
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

function Header({store}) {
  const classes: classesType = useStyles();
  const {AppStore, DrawerStore} = store;
debugger;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        {getHeaderByRule(store, classes, AppStore)}
      </AppBar>
      <MiniDrawer open={DrawerStore.isOpen} handleDrawerClose={DrawerStore.setOpen}/>
    </div>
  );
} 

const getHeaderByRule = (store:IAppState, classes:classesType, AppStore: appProps): JSX.Element => {
  const {isLoggedIn} = AppStore;
  const Login = 'login'
  const Logout = 'logout';
  const Main = 'main';

  if(isLoggedIn) {
    return <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {Main}
          </Typography>
          <Button color="inherit">{Logout}</Button>
        </Toolbar>
  } else {
    return <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {Main}
          </Typography>
          <Button color="inherit">{Login}</Button>
        </Toolbar>
  }
}

export default Header;