import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//below are the defined routes from route.js
import routes from './routes';
//below are the React Router object to tell react what component
//to render when url changes which is alerted by 'history' library that listens
//for url changes 
//browserHistory only deals with everything after '/'ie google.com/post/5
//only concerned with 'post/5' part. Do not confuse with History library!!!
import {Router,browserHistory} from 'react-router';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
