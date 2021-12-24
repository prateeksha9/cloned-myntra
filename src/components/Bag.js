import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reduceCart } from '../action/cart';

function Bag(props) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const removeFromCart = (id) => {
    dispatch(reduceCart(id));
  };
  console.log(cart);
  return (
    <div className="bag">
      {cart.map((cartItem) => (
        <div className="cardBag">
          <div className="cardBagLeft">
            <img src={cartItem.image} alt="product" className="cardImage" />
          </div>
          <div className="BagItemDetails">
            <div>
              <span>
                <strong>{cartItem.brand}</strong>
              </span>
            </div>
            <div style={{ marginBottom: 10 }}>
              <span>{cartItem.description}</span>
            </div>

            <span>Qty:1 </span>
            <span>Size: {cartItem.size}</span>

            <div>
              <span>Delivered By 29 Feb</span>
            </div>
          </div>
          <div className="bagAction">
            <button onClick={() => removeFromCart(cartItem.id)}>x</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bag;
