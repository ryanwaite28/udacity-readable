// categoriesActions.js

import { store } from '../store';

import { 
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_FAILURE
} from './../utils/constants';

export function retrievedCategories(categories) {
  return store.dispatch({
    type: GET_ALL_CATEGORIES,
    categories: categories
  });
}

export function retrievedCategoriesFailure(errors) {
  return store.dispatch({
    type: GET_ALL_CATEGORIES_FAILURE,
    errors: errors
  });
}
