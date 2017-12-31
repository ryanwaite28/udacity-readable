// categoriesActions.js

import { store } from '../store';

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_ALL_CATEGORIES_FAILURE = 'GET_ALL_CATEGORIES_FAILURE';

export const GET_ALL_POSTS_CATEGORY = 'GET_ALL_POSTS_CATEGORY';

export function receivedCategories(categories) {
  console.log('received categories:' + categories);
  return store.dispatch({
    type: GET_ALL_CATEGORIES,
    categories: categories
  });
}

export function receivedCategoriesFailure(error) {
  return store.dispatch({
    type: GET_ALL_CATEGORIES_FAILURE,
    errors: error
  });
}

export function getAllPostsForCategory(posts, category) {
  return store.dispatch({
    type: GET_ALL_POSTS_CATEGORY,
    posts: posts,
    category: category
  });
}