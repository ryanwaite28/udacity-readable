// categoriesReducer.js

const  GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
const  GET_ALL_CATEGORIES_FAILURE = 'GET_ALL_CATEGORIES_FAILURE';

export default function CategoriesReducer (state = [], action) {
  const PREFIX = 'Reducer status: ';
  console.log('State:' + state);
  console.log(JSON.stringify(action.categories));
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      console.log(PREFIX + 'Categories have been received');
       console.log('Categories:' + action.categories);
      return {
        ...state,
        categories: action.categories,
        isError: false
      }
    case GET_ALL_CATEGORIES_FAILURE:
      console.log(PREFIX + 'Categories were not received');
      return {
        ...state,
        errors: action.errors,
        isError: true
      }
    default : 
      return state
  }
}