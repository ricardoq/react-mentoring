import React from 'react';
import loadable from '@loadable/component';
import './App.scss';
import NotFoundError from './components/404/404';
import { BrowserRouter as Router, Switch ,Route } from "react-router-dom";

const Header = loadable(() => import('./containers/header/header'));
const Results = loadable(() => import('./containers/results/results'));
const Footer = loadable(() => import('./containers/footer/footer'));
const ErrorBoundary = loadable(() => import('./utils/errorBoundary/errorBoundary'));

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route path={['/', '/film/:movieId?', '/search/:query']} exact>
              <Header/>
              <Results/>
            </Route>
            <Route component={NotFoundError} status={404}/>
          </Switch>
        </Router>
      </ErrorBoundary>
      <Footer/>
    </div>
  );
}

export default App;
