import '../global-style/globals.css'
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { moviesReducer } from './utils/reducers/movies';
import thunk from 'redux-thunk';

const composeEnhancer = compose;

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
