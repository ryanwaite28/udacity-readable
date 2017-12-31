// rootReducer.js

import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import CategoriesReducer from './categoriesReducer';
import CommentsReducer from './commentsReducer';
import PostsReducer from './postsReducer';

const rootReducer = combineReducers({
  routing: {routeReducer},
  CategoriesReducer: CategoriesReducer,
  CommentsReducer: CommentsReducer,
  PostsReducer: PostsReducer
})

export default rootReducer;
