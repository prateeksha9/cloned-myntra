import React from 'react';

function Unhovered(props) {
  const product = props.product;
  return (
    <div>
      <img src={product.image[0]} className="productImage" alt="product" />
      <div className="productDetails">
        <div>
          <span className="name">{product.brand.toUpperCase()}</span>
        </div>
        <div>
          <span>{product.description}</span>
        </div>
        <div>
          <span className="productPrice">Rs. {product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default Unhovered;
