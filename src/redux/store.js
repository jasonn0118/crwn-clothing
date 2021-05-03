import { createStore, applyMiddleware } from 'redux';
//When debugging our redux code.
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

//Create a Store.
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;