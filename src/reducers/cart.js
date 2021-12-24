import { ADD_TO_CART, REMOVE_FROM_CART } from '../action/actionType';

// the function handles all states of cart
export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      const index = state.findIndex(
        (prod) => prod.id === action.newIteminCart.id
      );

      if (index !== -1) {
        state[index].quantity = state[index].quantity + 1;
        return [...state];
      }
      return [action.newIteminCart, ...state];

    case REMOVE_FROM_CART:
      const array = state.filter((prod) => prod.id !== action.id);

      return array;

    default:
      return state;
  }
}
