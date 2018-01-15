// postsReducer.js

import { 
  CREATED_POST,
  CREATED_POST_FAILURE,
  DELETED_POST,
  DELETED_POST_FAILURE,
  GET_ALL_POSTS, 
  GET_ALL_POSTS_FAILURE, 
  POST_VOTE, 
  POST_VOTE_FAILURE,
  UPDATED_POST,
  UPDATED_POST_FAILURE
} from './../actions/postsActions';

export default function postsReducer (state = {}, action) {
  const PREFIX = 'Reducer status: ';
  switch (action.type) {
    case CREATED_POST:
      console.log(PREFIX + 'Post was created.');
      return {
        ...state,
        post: action.post,
        isError: false
    }
    case CREATED_POST_FAILURE:
      console.log(PREFIX + 'Post was not created.');
      return {
        ...state,
        errors: action.errors,
        isError: true
      }
    case DELETED_POST:
      console.log(PREFIX + 'Post was deleted.');
      return {
        ...state,
        post: post,
        isError: false
      }
    case DELETED_POST_FAILURE:
      console.log(PREFIX + 'Post was not deleted.');
      return {
        ...state,
        errors: action.errors,
        isError: true
      }
    case GET_ALL_POSTS:
      console.log(PREFIX + 'Posts have been received.');
      return {
        ...state,
        posts: action.posts,
        isError: false
      }
    case GET_ALL_POSTS_FAILURE:
      console.log(PREFIX + 'Posts were not received.');
      return {
        ...state,
        errors: action.errors,
        isError: true
      }
     case POST_VOTE:
      console.log(PREFIX + 'Posts have received vote.');
      return {
        ...state,
        post: action.post,
        isError: false
      }
    case POST_VOTE_FAILURE:
      console.log(PREFIX + 'Post did not receive vote.');
      return {
        ...state,
        errors: action.errors,
        isError: true
      }
    case UPDATED_POST:
      console.log(PREFIX + 'Post was updated.');
      return {
        ...state,
        post: action.post,
        isError: false
      }
    case UPDATED_POST_FAILURE:
      console.log(PREFIX + 'Post was not updated.');
      return {
        ...state,
        errors: action.errors,
        isError: true
      }
    default : 
      return state
  }
}