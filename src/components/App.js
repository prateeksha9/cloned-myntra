import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import updateProducts from '../action/products';
import { data } from '../db';

import FrontPage from './FrontPage';
import MainHeader from './MainHeader';
import SideBar from './SideBar';
import SpecificProduct from './SpecificProduct';

function App() {
  const products = useSelector((state) => state.posts.products);
  const searchedProduct = useSelector((state) => state.posts.search);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateProducts(data));
  }, []);

  return (
    <Router>
      <div className="App">
        <MainHeader />
        {/* {showBag && <Bag />} */}
        <Routes>
          <Route
            path="/cloned-myntra"
            element={
              <FrontPage products={products} searchProducts={searchedProduct} />
            }
          />
          <Route
            path="/"
            element={
              <FrontPage products={products} searchProducts={searchedProduct} />
            }
          />
          {/* <Route
            path="/product/:id"
            element={<SpecificProduct products={products} />}
          /> */}
          <Route path="/product/:id" element={<SpecificProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
