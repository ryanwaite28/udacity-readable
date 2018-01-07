// rootReducer.js

import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import categoriesReducer from './categoriesReducer';
import commentsReducer from './commentsReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  routing: {routeReducer},
  categoriesReducer: categoriesReducer,
  commentsReducer: commentsReducer,
  postsReducer: postsReducer
})

export default rootReducer;
