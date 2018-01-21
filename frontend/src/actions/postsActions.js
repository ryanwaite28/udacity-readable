// postActions.js

import { store } from '../store';

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
} from './../utils/constants';

export function createdPost (post, category) {
  return store.dispatch({
    type: CREATED_POST,
    post: post,
    category: category
  });
}

export function createdPostFailure (error) {
  return store.dispatch({
    type: CREATED_POST_FAILURE,
    error: error
  });
}

export function deletedPost (component) {
  return store.dispatch({
    type: DELETED_POST,
    post: component,
  });
}

export function deletedPostFailure (error) {
  return store.dispatch({
    type: DELETED_POST_FAILURE,
    error: error,
  });
}

export function receivedAllPosts (posts) {
  return store.dispatch({
    type: GET_ALL_POSTS,
    posts: posts
  });
}

export function receivedAllPostsFailure (error) {
  return store.dispatch({
    type: GET_ALL_POSTS_FAILURE,
    error: error
  });
}

export function postedVote (post) {
  return store.dispatch({
    type: POST_VOTE,
    post: post
  });
}

export function postedVoteFailure (error) {
  return store.dispatch({
    type: POST_VOTE_FAILURE,
    error: error
  });
}

export function updatedPost (post, category, details) {
  return store.dispatch({
    type: UPDATED_POST,
    post: post
  });
}

export function updatedPostFailure(error) {
  return store.dispatch({
    type: UPDATED_POST_FAILURE,
    error: error
  });
}