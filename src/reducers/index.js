import { combineReducers } from 'redux';
import posts from './posts';
import cart from './cart';
import wishlist from './wishlist';

//  combine both these reducers
export default combineReducers({
  posts,
  cart,
  wishlist,
});
