import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers/index';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'] // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store)

export {store, persistor};