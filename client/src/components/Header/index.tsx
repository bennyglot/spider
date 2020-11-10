/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { classesType } from '../../types/app';
import { MiniDrawer } from '../Drawer';
import { appProps } from '../../stores/app';
import { drawProps } from '../../stores/drawer';
import { useStores } from '../../hooks/use-stores';
import { useTranslation } from 'react-i18next';
import {LanguageSelect} from '../LanguageSelect';

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

const Header = observer(() => {

  const classes: classesType = useStyles();
  const { drawerStore, appStore } = useStores();

  const getHeaderByRule = (classes: classesType, AppStore: appProps, DrawStore: drawProps): JSX.Element => {
    const { isLoggedIn } = AppStore;
    const { toggleOpenState } = drawerStore;
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const {t, i18n} = useTranslation();
    
    const Login = t('Header.login')
    const Logout = t('Header.logout');
    const Main = t('Common.main');

    if (isLoggedIn) {
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
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => { toggleOpenState() }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {Main}
        </Typography>
        <LanguageSelect />
        <Button color="inherit">{Login}</Button>
      </Toolbar>
    }
  }

  return (
    <div className={classes.root}>
      <Fragment>
        <AppBar className={'aboveDrawer'}>
          {getHeaderByRule(classes, appStore, drawerStore)}
        </AppBar>
        <div className={'toolbarMargin'} />
      </Fragment>
      <MiniDrawer />
    </div>
  );
})

export default Header;