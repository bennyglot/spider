import { MuiThemeProvider } from '@material-ui/core';
import { Provider } from 'mobx-react';
import * as React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import Home from '../home/home';
import { storesContext } from '../../stores/index';
import { initI18Next } from '../../i18n';
import * as loglevel from 'loglevel';
import { muiTheme } from './mui-theme';

/** initialize i18n */
initI18Next()
  .catch((error) => {
    loglevel.error('Error in loading i18n', error);
  });

/**
 * App start from here
 * Basically it does all base configuration before rendering actual app
 */
export const App: React.FunctionComponent = (): JSX.Element => (
  <Provider {...storesContext}>
    <MuiThemeProvider theme={muiTheme}>
        <HashRouter>
          <Switch>
            <Home />
          </Switch>
        </HashRouter>
    </MuiThemeProvider>
  </Provider>
);
