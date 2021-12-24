import { ADD_TO_WISHLIST } from '../action/actionType';

export default function wishlist(state = [], action) {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [action.product, ...state];

    default:
      return state;
  }
}
