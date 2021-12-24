import React from 'react';
import { useDispatch } from 'react-redux';
import { highToLow, lowToHigh } from '../action/products';

function Header() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const sortBy = e.target.value;
    console.log(sortBy);
    if (sortBy === 'htl') {
      dispatch(highToLow());
    } else if (sortBy === 'lth') {
      dispatch(lowToHigh());
    }
  };
  return (
    <div className="header">
      <div className="HeadCategory">
        <span>
          Home/<strong>Shirts</strong>
        </span>
      </div>
      <div className="HeadCategory">
        <span>
          <strong>Shirts for men</strong>
        </span>
      </div>
      <div className="thirdHeader">
        <div>
          <span>
            <strong>FILTERS</strong>
          </span>
        </div>
        <div>
          <span>Bundles</span>
          <span style={{ marginLeft: 10 }}>Size</span>
        </div>
        <div className="dropdownSec">
          <select id="dropdown" onChange={handleChange}>
            <option value="N/A">Sort By: Recommended</option>
            <option value="htl">Price: High To Low</option>
            <option value="lth">Price: Low To High</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
