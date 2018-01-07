// postActions.js

import { store } from '../store';

export const CREATED_POST = 'CREATED_POST';
export const CREATED_POST_FAILURE = 'CREATED_POST_FAILURE';

export const DELETED_POST = 'DELETED_POST';
export const DELETED_POST_FAILURE = 'DELETED_POST_FAILURE';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_POSTS_FAILURE = 'GET_ALL_POSTS_FAILURE';

export const POST_VOTE = 'POST_VOTE';
export const POST_VOTE_FAILURE = 'POST_VOTE_FAILURE';

export const UPDATED_POST = 'UPDATED_POST';
export const UPDATED_POST_FAILURE = 'UPDATED_POST_FAILURE';

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

export function deletedPost (posts) {
  return store.dispatch({
    type: DELETED_POST,
    posts: posts,
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