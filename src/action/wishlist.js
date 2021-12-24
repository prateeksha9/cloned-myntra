import { ADD_TO_WISHLIST } from './actionType';

export default function WishlistExtend(product) {
  return {
    type: ADD_TO_WISHLIST,
    product,
  };
}
