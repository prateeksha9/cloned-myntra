import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import WishlistExtend from '../action/wishlist';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function HoveredCard(props) {
  const product = props.product;

  const dispatch = useDispatch();
  const list = useSelector((state) => state.wishlist);
  const index = list.findIndex((prod) => prod.id === product.id);
  const [currentIndex, setCurrentIndex] = useState(1);
  // console.log(index, 'yktyfytugiu');

  const handleWishList = (product) => {
    dispatch(WishlistExtend(product));
  };

  setInterval(() => {
    if (currentIndex === product.image.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, 2000);

  return (
    <div>
      <Link to={`/product/${product.id}`} className="links">
        <img
          src={product.image[currentIndex]}
          className="productImage"
          alt="product"
        />
      </Link>

      <div className="productDetails productDetailsOnHover">
        <div>
          {index === -1 ? (
            <button onClick={() => handleWishList(product)}>WISHLIST</button>
          ) : (
            <button style={{ background: 'darkgrey' }}>WISHLISTED</button>
          )}
        </div>
        <Link to={`/product/${product.id}`} className="links">
          <div>
            {/* <span>{sizes}</span> */}
            {props.product.size.map((sizeC) => (
              <span>{sizeC} </span>
            ))}
          </div>
          <div>
            <span className="productPrice">Rs. {product.price}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HoveredCard;
