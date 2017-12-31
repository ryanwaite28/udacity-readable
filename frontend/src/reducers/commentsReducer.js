// commentsReducer.js

import {
  GET_ALL_POSTS,
} from './../actions/postsActions'

function CommentsReducer (state = [], action) {
  const { day, recipe, meal } = action

  switch (action.type) {
    case GET_ALL_POSTS :
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: recipe.label,
        }
      }
    default :
      return state
  }
}

export default CommentsReducer;