import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

//Combine one giant object.
export default combineReducers({
    user: userReducer
});