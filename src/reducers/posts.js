import {
  UPDATE_PRODUCTS,
  SORT_PRODUCTS_HTL,
  SORT_PRODUCTS_LTH,
  SEARCH,
  SHOW_BAG,
  FILTER_PRODUCTS,
} from '../action/actionType';

const initialState = {
  products: [],
  islth: false,
  ishtl: false,
  search: [],
  showBag: false,
  filter: [],
  showFilter: false,
  isSearch: false,
};

// the function handles all states of posts

export default function posts(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return { ...state, products: action.products };

    case SORT_PRODUCTS_LTH:
      console.log('state.in sort', state);
      const sorted_lth = [...state.products];
      sorted_lth.sort((a, b) => (a.price > b.price ? 1 : -1));
      console.log('sorted', sorted_lth);
      return { ...state, islth: true, products: sorted_lth, isthl: false };

    case SORT_PRODUCTS_HTL:
      console.log('state.in sort', state);
      const sorted_htl = [...state.products];
      sorted_htl.sort((a, b) => (a.price < b.price ? 1 : -1));
      console.log('sorted', sorted_htl);
      return { ...state, islth: false, products: sorted_htl, isthl: true };

    case SEARCH:
      state.search = state.products.filter(
        (prod) =>
          prod.name.toLowerCase() === action.name.toLowerCase() ||
          prod.brand.toLowerCase() === action.name.toLowerCase() ||
          prod.category.toLowerCase() === action.name.toLowerCase() ||
          prod.for.toLowerCase() === action.name.toLowerCase() ||
          prod.color.toLowerCase() === action.name.toLowerCase()
      );
      console.log('searched products', state.search);
      return {
        ...state,
        isSearch: true,
      };

    case SHOW_BAG:
      return { ...state, showBag: !state.showBag };

    case FILTER_PRODUCTS:
      let showFilter;
      if (action.cat) {
        showFilter = state.products.filter((prod) => prod.for === action.cat);
      }
      if (action.selectedCategory) {
        if (action.cat) {
          showFilter = showFilter.filter(
            (prod) => prod.category === action.selectedCategory
          );
        } else {
          showFilter = state.products.filter(
            (prod) => prod.category === action.selectedCategory
          );
        }
      }
      if (action.selectedbrand.length > 0) {
        if (action.cat || action.selectedCategory) {
          showFilter = showFilter.filter((prod) => {
            for (let i = 0; i < action.selectedbrand.length; i++) {
              if (prod.brand === action.selectedbrand[i]) {
                return prod;
              }
            }
          });
        } else {
          showFilter = state.products.filter((prod) => {
            for (let i = 0; i < action.selectedbrand.length; i++) {
              if (prod.brand === action.selectedbrand[i]) {
                return prod;
              }
            }
          });
        }
      }
      console.log('showFilter', showFilter);
      return {
        ...state,
        filter: showFilter,
        showFilter: true,
        showBag: false,
        islth: false,
        ishtl: false,
        isSearch: false,
      };

    default:
      return state;
  }
}
