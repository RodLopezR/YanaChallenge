import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares)),
);

// @ts-ignore
export const persistor = persistStore(store);
