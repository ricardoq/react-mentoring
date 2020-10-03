import React, {useState} from 'react';
import './App.scss';
import Header from './containers/header/header';
import Results from './containers/results/results';
import Footer from './containers/footer/footer';
import ErrorBoundary from './utils/errorBoundary/errorBoundary';
import NotFoundError from './components/404/404';
import { MovieContext } from './utils/contexts/movieContext'
import { BrowserRouter as Router, Switch ,Route } from "react-router-dom";

function App() {
  const [movieId, setMovieId] = useState(null);
  const changeMovie = (value) => {
    setMovieId(value)
  }

  return (
    <div className="App">
      <ErrorBoundary>
        <MovieContext.Provider value={{movieId, changeMovie}}>
          <Router>
            <Switch>
              <Route path={['/', '/film/:id?', '/search/:query']} exact>
                <Header/>
                <Results/>
              </Route>
              <Route component={NotFoundError} status={404}/>
            </Switch>
          </Router>
        </MovieContext.Provider>
      </ErrorBoundary>
      <Footer/>
    </div>
  );
}

export default App;
