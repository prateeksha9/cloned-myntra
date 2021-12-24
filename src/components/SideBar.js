import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterAction } from '../action/products';

function SideBar() {
  const brands = ['Lee', 'Levis', 'Parx', 'Zodiac', 'Arrow'];
  const gender = ['Men', 'Women', 'Boy', 'Girl'];
  const sleeve = ['Full Sleeve', 'Half Sleeve'];
  const [cat, setCat] = useState('');
  const [selectedbrand, setBrand] = useState([]);
  const [selectedCategory, setCategory] = useState('');
  const dispatch = useDispatch();
  const handleCategory1 = (e) => {
    setCat(e.target.value);
  };

  const handleBrand = (e) => {
    if (e.target.checked) {
      setBrand([...selectedbrand, e.target.value]);
    } else {
      const newBrand = selectedbrand.filter((elem) => elem !== e.target.value);
      setBrand(newBrand);
    }
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleShowFilter = () => {
    if (cat !== '' || selectedCategory !== '' || selectedbrand.length !== 0) {
      dispatch(filterAction(cat, selectedCategory, selectedbrand));
      setCat('');
      setCategory('');
      setBrand([]);
    }
    // alert(`${cat}, ${selectedbrand}, ${selectedbrand}`);
  };

  return (
    <div className="sideBar">
      <button className="filter" onClick={() => handleShowFilter()}>
        Apply Filter
      </button>
      <div className="category">
        <span className="name">BRAND</span>
        {brands.map((brand) => (
          <div className="sidebarOptions">
            <div>
              <input
                type="checkbox"
                className="checkBox"
                name="brand"
                value={brand}
                style={{ marginTop: '10px' }}
                onChange={(e) => handleBrand(e)}
              />
            </div>
            <div className="checkBox" style={{ marginTop: '5px' }}>
              <label htmlFor="brand">{brand}</label>
            </div>
          </div>
        ))}
      </div>
      <div className="category" onChange={(e) => handleCategory1(e)}>
        <span className="name">GENDER</span>
        {gender.map((color) => (
          <div className="sidebarOptions">
            <div>
              <input
                type="radio"
                className="checkBox"
                name="cat"
                value={color}
                style={{ marginTop: '10px' }}
              />
            </div>
            <div className="checkBox" style={{ marginTop: '5px' }}>
              <label htmlFor="cat">{color}</label>
            </div>
          </div>
        ))}
      </div>
      <div className="category" onChange={(e) => handleCategory(e)}>
        <span className="name">CATEGORY</span>
        {sleeve.map((sleeve) => (
          <div className="sidebarOptions">
            <div>
              <input
                type="radio"
                className="checkBox"
                name="category"
                value={sleeve}
                style={{ marginTop: '10px' }}
              />
            </div>
            <div className="checkBox" style={{ marginTop: '5px' }}>
              {/* {sleeve} */}
              <label htmlFor="category">{sleeve}</label>
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
