import React from 'react';
import style from './App.module.scss';
import dynamic from "next/dynamic";
import { Switch ,Route, StaticRouter } from "react-router-dom";

const Header = dynamic(import('./containers/header/header'));
const Results = dynamic(import('./containers/results/results'));
const Footer = dynamic(import('./containers/footer/footer'));
const ErrorBoundary = dynamic(import('./utils/errorBoundary/errorBoundary'));
const NotFoundError = dynamic(import('./components/404/404'));

function App() {
  return (
    <div className={style.app}>
      <ErrorBoundary>
        <StaticRouter>
          <Switch>
            <Route path={['/', '/film/:movieId?', '/search/:query']} exact>
              <Header/>
              <Results/>
            </Route>
            <Route component={NotFoundError} status={404}/>
          </Switch>
        </StaticRouter>
      </ErrorBoundary>
      <Footer/>
    </div>
  );
}

export default App;
