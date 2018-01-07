// commentsReducer.js

import {
  CREATED_COMMENT, 
  CREATED_COMMENT_FAILURE,
  DELETED_COMMENT,
  DELETED_COMMENT_FAILURE,
  GET_COMMENTS, 
  GET_COMMENTS_FAILURE,
  UPDATED_COMMENT,
  UPDATED_COMMENT_FAILURE
} from './../actions/commentsActions'

function CommentsReducer (state = [], action) {
  const PREFIX = 'Reducer status: ';
  switch (action.type) {
    case CREATED_COMMENT:
      console.log(PREFIX + 'Comment was created.');
      return {
        ...state,
        comment: action.comment,
        isError: false
      }
    case CREATED_COMMENT_FAILURE: 
      console.log(PREFIX + 'Comment was not created.');
      return {
        ...state,
        errors: action.errors,
        isError: true
      }
    case DELETED_COMMENT:
      console.log(PREFIX + 'Comment was deleted.');
      return {
        ...state,
        isError: false
      }
    case DELETED_COMMENT_FAILURE: 
      console.log(PREFIX + 'Comment was not deleted.');
      return {
        ...state,
        errors: action.errors,
        isError: true
      }
    case GET_COMMENTS:
      console.log(PREFIX + 'Comments have been received.');
      return {
        ...state,
        comments: action.comments,
        isError: false
      }
    case GET_COMMENTS_FAILURE: 
      console.log(PREFIX + 'Comments have not been received.');
      return {
        ...state,
        errors: action.errors,
        isError: true
      }
    case UPDATED_COMMENT:
      console.log(PREFIX + 'Comment was updated.');
      return {
        ...state,
        comment: action.comment,
        isError: false
      }
    case UPDATED_COMMENT_FAILURE: 
      console.log(PREFIX + 'Comment was not updated.');
      return {
        ...state,
        errors: action.errors,
        isError: true
      }
    default :
      return state
  }
}

export default CommentsReducer;