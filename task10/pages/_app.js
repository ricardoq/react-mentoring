import '../global-style/globals.css'
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { moviesReducer } from './utils/reducers/movies';
import thunk from 'redux-thunk';

const composeEnhancer = /*window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||*/ compose;

const store = createStore(
                moviesReducer,
                composeEnhancer(applyMiddleware(thunk))
                );

function MyApp({ Component, pageProps }) {
  return <React.StrictMode>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </React.StrictMode>;
  // return <Component {...pageProps} />
}

export default MyApp
