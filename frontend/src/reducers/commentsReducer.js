// commentsReducer.js

import { applyUpdate } from './../utils/helperMethods';
import {
  COMMENT_VOTE,
  COMMENT_VOTE_FAILURE,
  CREATED_COMMENT, 
  CREATED_COMMENT_FAILURE,
  DELETED_COMMENT,
  DELETED_COMMENT_FAILURE,
  GET_COMMENTS, 
  GET_COMMENTS_FAILURE,
  UPDATED_COMMENT,
  UPDATED_COMMENT_FAILURE
} from './../utils/constants'

function CommentsReducer (state = [], action) {
  const PREFIX = 'Reducer status: ';
  switch (action.type) {
      case COMMENT_VOTE:
      console.log(PREFIX + 'Comment received vote.');
      return {
        ...state,
        comments: applyUpdate(action.comment, state.comments),
        isError: false
      }
    case COMMENT_VOTE_FAILURE:
      console.log(PREFIX + 'Comment did not receive vote.');
      return {
        ...state,
        errors: action.errors,
        isError: true
      }
    case CREATED_COMMENT:
      console.log(PREFIX + 'Comment was created.');
      let newComments = state.comments;
      
      if(newComments) { 
        newComments = newComments.concat(action.comment) ;
      } else { 
        newComments = [].concat(action.comment) ;
      };
      
      return {
        ...state,
        comments: newComments,
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
        comments: applyUpdate(JSON.parse(action.comment), state.comments),
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
        comments: JSON.parse(action.comments),
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
        comments: applyUpdate(action.comment, state.comments),
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