import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';

import userReducer from './user/user.reducer';

//Combine one giant object.
export default combineReducers({
    user: userReducer,
    cart: cartReducer
});