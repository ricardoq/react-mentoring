import React, {useState} from 'react';
import './App.scss';
import Header from './containers/header/header';
import Results from './containers/results/results';
import Footer from './containers/footer/footer';
import ErrorBoundary from './utils/errorBoundary/errorBoundary';
import { MovieContext } from './utils/contexts/movieContext'

function App() {
  const [movieId, setMovieId] = useState(null);
  const changeMovie = (value) => {
    setMovieId(value)
  }

  return (
    <div className="App">
      <ErrorBoundary>
        <MovieContext.Provider value={{movieId, changeMovie}}>
          <Header/>
          <Results/>
        </MovieContext.Provider>
      </ErrorBoundary>
      <Footer/>
    </div>
  );
}

export default App;
