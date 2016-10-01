import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';

import configureStore from './store/configureStore';
import appContainer from './containers/_appContainer';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const appTemplate = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/app' component={appContainer} />
    </Router>
  </Provider>
);

render(appTemplate, document.getElementById('target-practice-app'));
