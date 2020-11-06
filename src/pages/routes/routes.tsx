import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';

const Main = React.lazy(() => import('../../pages/main/main'));

const routes: RouteProps[] = [
  {
    path: '/',
    render: () => <Main />,
  },
];

/**
 * Generates Routes from routes data
 */
function getRoutes(): JSX.Element[] {
  return routes.map((route: RouteProps) => (
    <Route
      key={route.path as string}
      exact={true}
      path={route.path}
      render={route.render}
    />
  ));
}

/**
 * All Routes of app
 */
export const Routes: React.FunctionComponent = (): JSX.Element => (
  <React.Fragment>
    {getRoutes()}
  </React.Fragment>
);
