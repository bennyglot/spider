import { CircularProgress, CssBaseline } from '@material-ui/core';
import * as React from 'react';
import { Routes } from '../routes/routes';
import Header from '../../components/Header/header';

/**w
 * Home component, which basically to be shown always!
 */

 const home = () => {
  /** Renders home component */
  
  return (
    <div className={'continaer'}>
      <CssBaseline />
      <main className={'mainContent'}>
        <div className={'toolbar'} />
        <Header />
        <React.Suspense fallback={<CircularProgress className={'pageLoading'} />}>
          <div className={'innerWrapper'}>
            <Routes />
          </div>
        </React.Suspense>
      </main>
    </div>
  );
  }

  const Home = home;
  export default Home;
