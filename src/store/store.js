// store.js
import { rootReducer } from './root-reducer';
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(
  persistConfig, 
  rootReducer
);

// Custom logger that filters persist actions
const customLogger = (store) => (next) => (action) => {
  if (!action.type.startsWith('persist/')) {
    console.group(action.type);
    console.log('Payload:', action.payload);
    console.log('State before:', store.getState());
    const result = next(action);
    console.log('State after:', store.getState());
    console.groupEnd();
    return result;
  }
  return next(action);
};

const middleWares = [
  import.meta.env.DEV && customLogger,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer = 
  (import.meta.env.DEV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
  compose;

export const store = createStore(
  persistedReducer,
  undefined,
  composeEnhancer(applyMiddleware(...middleWares))
);

export const persistor = persistStore(store);