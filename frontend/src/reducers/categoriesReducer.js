// categoriesReducer.js

import { 
  GET_ALL_CATEGORIES, 
  GET_ALL_CATEGORIES_FAILURE 
} from './../utils/constants';

export default function categoriesReducer (state = {}, action) {
  const PREFIX = 'Reducer status: ';
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      console.log(PREFIX + 'Categories have been received.');
      return {
        ...state,
        categories: action.categories,
        isError: false
      }
    case GET_ALL_CATEGORIES_FAILURE:
      console.log(PREFIX + 'Categories were not received.');
      return {
        ...state,
        errors: action.errors,
        isError: true
      }
    default : 
      return state
  }
}