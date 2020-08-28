import React from 'react';
import './App.scss';
import Header from './containers/header/header';
import Results from './containers/results/results';
import Footer from './containers/footer/footer';
import ErrorBoundary from './utils/errorBoundary/errorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header/>
        <Results/>
      </ErrorBoundary>
      <Footer/>
    </div>
  );
}

export default App;
