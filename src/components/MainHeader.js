import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import updateProducts, { search } from '../action/products';

import Popover from '@material-ui/core/Popover';
import Bag from './Bag';

function MainHeader(props) {
  const dispatch = useDispatch();
  const [searchProducts, setSearchProducts] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const cart = useSelector((state) => state.cart);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      // alert(searchProducts);
      if (searchProducts !== '') {
        dispatch(search(searchProducts));
        setSearchProducts('');
      } else if (searchProducts !== '') {
        dispatch(updateProducts());
      }
    }
  };
  return (
    <div className="mainHeader">
      <div className="headerLogo">
        <Link to="/">
          <img
            src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png"
            alt="brand_logo"
            className="logo"
          />
        </Link>
      </div>
      <div className="navTo">
        <div>
          <span>
            <strong>MEN</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>WOMEN</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>KIDS</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>HOME & LIVING</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>BEAUTY</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>STUDIO</strong>
          </span>
        </div>
      </div>
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search for Products, Brands"
          onChange={(e) => setSearchProducts(e.target.value)}
          onKeyPress={(e) => handleSearch(e)}
        />
      </div>
      <div className="myIcons">
        <div className="singleIcon">
          <img
            src="https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-profile-line-black-icon-png-image_691051.jpg"
            alt="profile_icon"
            className="icon"
          />
          <span>
            <strong>Profile</strong>
          </span>
        </div>
        <div className="singleIcon">
          <img
            src="https://png.pngitem.com/pimgs/s/32-324323_heart-icon-free-vector-like-instagram-white-heart.png"
            alt="wishlist_icon"
            className="icon"
          />
          <span>
            <strong>Wishlist</strong>
          </span>
        </div>
        <div className="singleIcon">
          <img
            src="https://i.pinimg.com/originals/95/67/ba/9567bac44b90867dc730858c2c528f01.jpg"
            alt="bag_icon"
            className="icon"
            // onClick={showBag}
            onClick={(event) => {
              setAnchorEl(event.currentTarget);
            }}
          />
          <span
            // style={{ marginTop: -30, marginLeft: 25 }}
            className="cartLength"
          >
            {cart.length}
          </span>
          <span style={{ marginTop: 8 }}>
            <strong>Bag</strong>
          </span>
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
        <Bag />
      </Popover>
    </div>
  );
}

export default MainHeader;
