import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import { persistReducer } from 'redux-persist';
// localStorage as default storage
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root', // start storing from the root of the store
  storage,
  // the name of the reducers we xant to store
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
