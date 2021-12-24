import { ADD_TO_CART, REMOVE_FROM_CART } from './actionType';

// define all the required actions to manage the cart state
export function extendCart(newIteminCart) {
  return {
    type: ADD_TO_CART,
    newIteminCart,
  };
}

export function reduceCart(id) {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
}
