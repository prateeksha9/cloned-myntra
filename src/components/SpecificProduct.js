import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { extendCart } from '../action/cart';
import WishlistExtend from '../action/wishlist';
import ZoomImage from './ZoomImage';
import { Popover } from '@material-ui/core';

function SpecificProduct(props) {
  const params = useParams();
  console.log('erfb', params);
  const dispatch = useDispatch();
  // const [showZoom, setShowZoom] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [image, setImage] = useState('');

  const posts = useSelector((state) => state.posts.products);
  const index = posts.findIndex((prod) => prod.id === params.id);
  const product = posts[index];

  const list = useSelector((state) => state.wishlist);
  const indexToWishlist = list.findIndex((prod) => prod.id === product.id);

  const cart = useSelector((state) => state.cart);
  const indexToCart = cart.findIndex((prod) => prod.id === product.id);
  console.log(indexToCart);
  // const CartSize = cart[indexToCart].size;

  // const handleZoom = (image) => {
  //   setShowZoom(!showZoom);
  //   setImage(image);
  // };

  const handleWishList = (product) => {
    dispatch(WishlistExtend(product));
  };

  const [selectedSize, setSelectedSize] = useState(0);

  const handleSize = (e) => {
    setSelectedSize(e.target.value);
    e.target.style.borderColor = '#FF527B';
  };
  const addToCart = () => {
    if (selectedSize === 0) {
      alert('select a size');
    } else {
      const newItemInTheCart = {
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        for: product.for,
        brand: product.brand,
        category: product.category,
        image: product.image[0],
        color: product.color,
        size: selectedSize,
      };
      console.log(selectedSize);
      dispatch(extendCart(newItemInTheCart));
    }
  };
  // console.log(product);
  return (
    <div>
      <div className="path">
        <span>
          Home/Clothing/Men Clothing/Shirts/
          <strong>
            {product.brand.toUpperCase()} Shirts - More By{' '}
            {product.brand.toUpperCase()}
          </strong>
        </span>
      </div>
      <div className="onlyProductContainer">
        <div className="left">
          <div className="imagesProductOnly">
            {product.image.map((image) => (
              <img
                className="imageSpecific"
                src={image}
                alt="product"
                onClick={(event) => {
                  setAnchorEl(event.currentTarget);
                  setImage(image);
                }}
              />
            ))}
          </div>
        </div>
        <div className="right">
          <div className="descAndBrand">
            <div>
              <span className="productBrand">
                <strong>{product.brand}</strong>
              </span>
            </div>
            <span>{product.description}</span>
          </div>
          <div className="descAndBrand">
            <div>
              <span className="productBrand">
                <strong>Rs. {product.price}</strong>
              </span>
            </div>
            <div>
              <span style={{ color: '#14958F' }}>
                <strong>inclusive of all taxes</strong>
              </span>
            </div>
            <div className="selectSize">
              <span>
                <strong>SELECT SIZE</strong>
              </span>
            </div>
            <div className="selectSize">
              {product.size.map((sizeC) => (
                <button onClick={handleSize} value={sizeC} key={sizeC}>
                  {sizeC}
                </button>
              ))}
            </div>
            <div className="productOnlyButton">
              {indexToCart === -1 ? (
                <button onClick={addToCart}>ADD TO BAG</button>
              ) : (
                <button style={{ background: '#FF527B' }}>GO TO BAG</button>
              )}

              {indexToWishlist === -1 ? (
                <button onClick={() => handleWishList(product)}>
                  WISHLIST
                </button>
              ) : (
                <button style={{ background: 'darkgrey' }}>WISHLISTED</button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Popover
        anchorEl={anchorEl}
        open={open}
        id={open ? 'simple-popover' : undefined}
        onClose={() => {
          setAnchorEl(null);
        }}
        transformOrigin={{
          horizontal: 'left',
          vertical: 'top',
        }}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'bottom',
        }}
      >
        <ZoomImage picture={image} />
      </Popover>
    </div>
  );
}

export default SpecificProduct;
