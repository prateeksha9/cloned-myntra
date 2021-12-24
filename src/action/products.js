import {
  SORT_PRODUCTS_HTL,
  SORT_PRODUCTS_LTH,
  UPDATE_PRODUCTS,
  SEARCH,
  SHOW_BAG,
  FILTER_PRODUCTS,
} from './actionType';

// const products = require('../db');

export default function updateProducts(products) {
  return {
    type: UPDATE_PRODUCTS,
    products,
  };
}

export function filterAction(cat, selectedCategory, selectedbrand) {
  return {
    type: FILTER_PRODUCTS,
    cat,
    selectedCategory,
    selectedbrand,
  };
}

export function search(name) {
  return {
    type: SEARCH,
    name,
  };
}

export function actionToShowBag() {
  return {
    type: SHOW_BAG,
  };
}

export function highToLow() {
  return {
    type: SORT_PRODUCTS_HTL,
  };
}

export function lowToHigh() {
  return {
    type: SORT_PRODUCTS_LTH,
  };
}
