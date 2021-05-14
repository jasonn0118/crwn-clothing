import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
//When debugging our redux code.
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

//Create a Store.
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);