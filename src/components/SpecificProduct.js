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
  const [currentOnMobile, setCurrentImageOnMobile] = React.useState(0);
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

  const moveBack = () => {
    if (currentOnMobile === 0) {
      setCurrentImageOnMobile(0);
    } else {
      setCurrentImageOnMobile(currentOnMobile - 1);
    }
  };

  const moveForward = () => {
    if (currentOnMobile === product.image.length - 1) {
      setCurrentImageOnMobile(product.image.length - 1);
    } else {
      setCurrentImageOnMobile(currentOnMobile + 1);
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
          <div
            className="imagesProductOnlyMobile"
            style={{
              backgroundImage: `url(${product.image[currentOnMobile]})`,
              objectFit: 'fill',
            }}
          >
            <div>
              <button className="mobileActionButton" onClick={moveBack}>
                <img
                  className="mobileAction"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPGyYrlBxgA19xTMU9P43Heh1AJDGoIsqIcQM0yUNWYP5T1YSrteA_5e4KqlniNSxFFg&usqp=CAU"
                />
              </button>
            </div>
            <div>
              <button className="mobileActionButton" onClick={moveForward}>
                <img
                  className="mobileAction"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU00BpM9tQWmL5mNv-Jizd86Bp34QT3mWNEQ&usqp=CAU"
                />
              </button>
            </div>
          </div>
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
                <button onClick={addToCart}>
                  <img
                    src="https://i.pinimg.com/originals/95/67/ba/9567bac44b90867dc730858c2c528f01.jpg"
                    alt="bag_icon"
                    className="icon"
                    style={{
                      marginTop: 2,
                      height: 20,
                      width: 20,
                    }}
                  />

                  <span
                    style={{ marginLeft: 8, fontSize: 14, fontWeight: 'bold' }}
                  >
                    ADD TO BAG
                  </span>
                </button>
              ) : (
                <button style={{ background: '#FF527B' }}>
                  <span
                    style={{
                      marginRight: 8,
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}
                  >
                    GO TO BAG
                  </span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGZF5CiuGQqH51NhD5N2B1tEwU-Tm5LYQ1cby3-8C3Cl6dW56suySvFjOZZOAejfVCtTw&usqp=CAU"
                    alt="go_to_bag_icon"
                    className="icon"
                    style={{
                      marginTop: 2,
                      height: 20,
                      width: 20,
                    }}
                  />
                </button>
              )}

              {indexToWishlist === -1 ? (
                <button onClick={() => handleWishList(product)}>
                  <img
                    src="https://png.pngitem.com/pimgs/s/32-324323_heart-icon-free-vector-like-instagram-white-heart.png"
                    alt="wishlist_icon"
                    className="icon"
                    style={{
                      marginTop: 2,
                      height: 20,
                      width: 20,
                    }}
                  />
                  <span
                    style={{ marginLeft: 8, fontSize: 14, fontWeight: 'bold' }}
                  >
                    WISHLIST
                  </span>
                </button>
              ) : (
                <button style={{ background: 'darkgrey' }}>
                  <img
                    src="https://png.pngitem.com/pimgs/s/32-324323_heart-icon-free-vector-like-instagram-white-heart.png"
                    alt="wishlist_icon"
                    className="icon"
                    style={{ marginTop: 2, height: 20, width: 20 }}
                  />
                  <span
                    style={{ marginLeft: 8, fontSize: 14, fontWeight: 'bold' }}
                  >
                    WISHLISTED
                  </span>
                </button>
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
