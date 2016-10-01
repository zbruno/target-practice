import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';

export default function configureStore(initalState) {
  const logger = createLogger();
  const store = createStore(
    initalState,
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(browserHistory),
      logger
    )
  );

  return store;
}
