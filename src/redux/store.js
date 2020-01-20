import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

// const middlewares = [logger];
const middlewares = [];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

// stores the store in localStorage
export const persistor = persistStore(store);

export default { store, persistor };
