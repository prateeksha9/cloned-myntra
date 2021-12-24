import React, { useState } from 'react';
import HoveredCard from './HoveredCard';
import Unhovered from './Unhovered';
function ProductCard(props) {
  const [isHovering, setHovering] = useState(false);
  const product = props.product;
  const handleMouseOver = () => {
    setHovering(true);
  };

  const handleMouseOut = () => {
    setHovering(false);
  };

  return (
    <div
      className="productcard"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {!isHovering ? (
        <Unhovered product={product} key={product.id} />
      ) : (
        <HoveredCard product={product} key={product.id} />
      )}
    </div>
  );
}

export default ProductCard;
