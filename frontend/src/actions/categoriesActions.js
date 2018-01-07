// categoriesActions.js

import { store } from '../store';

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_ALL_CATEGORIES_FAILURE = 'GET_ALL_CATEGORIES_FAILURE';

export function receivedCategories(categories) {
  return store.dispatch({
    type: GET_ALL_CATEGORIES,
    categories: categories
  });
}

export function receivedCategoriesFailure(errors) {
  return store.dispatch({
    type: GET_ALL_CATEGORIES_FAILURE,
    errors: errors
  });
}