import React from 'react';
import style from './App.module.scss';
import Header from './containers/header/header';
import Results from './containers/results/results';
import Footer from './containers/footer/footer';
import ErrorBoundary from './utils/errorBoundary/errorBoundary';
import NotFoundError from './components/404/404';
import { BrowserRouter as Router, Switch ,Route, StaticRouter } from "react-router-dom";

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
