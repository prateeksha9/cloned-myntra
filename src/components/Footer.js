import React, { useState } from 'react';
import { Popover } from '@material-ui/core';
import SideBar from './SideBar';
import { useDispatch } from 'react-redux';
import { highToLow, lowToHigh } from '../action/products';

function Footer(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
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
    <div className="footer">
      <div className="footerAction">
        <button
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
          }}
        >
          FILTER
        </button>
      </div>
      <div className="footerAction">
        {/* <button>SORT BY</button> */}
        <div className="dropdownSec">
          <select id="dropdown" onChange={handleChange}>
            <option value="N/A">Sort By: Recommended</option>
            <option value="htl">Price: High To Low</option>
            <option value="lth">Price: Low To High</option>
          </select>
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
        <SideBar />
      </Popover>
    </div>
  );
}

export default Footer;
