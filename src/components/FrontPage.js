import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import ProductCard from './ProductCard';
import SideBar from './SideBar';

function FrontPage(props) {
  const data = props.products;
  const searchedProducts = props.searchProducts;
  const isSearch = useSelector((state) => state.posts.isSearch);
  const showFilter = useSelector((state) => state.posts.showFilter);
  const filteredArray = useSelector((state) => state.posts.filter);
  console.log(isSearch);
  return (
    <div>
      <Header />
      <div className="frontPage">
        <SideBar />
        <div className="grid-container">
          {showFilter && filteredArray.length === 0 && (
            <div>No Product Found</div>
          )}
          {showFilter &&
            filteredArray.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          {isSearch && searchedProducts.length === 0 && (
            <div>No Matching Product Found</div>
          )}
          {isSearch &&
            searchedProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          {!isSearch &&
            !showFilter &&
            data.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
