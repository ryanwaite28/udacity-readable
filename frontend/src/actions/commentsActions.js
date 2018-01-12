// commentsActions.js

import { store } from '../store';

export const COMMENT_VOTE = 'COMMENT_VOTE';
export const COMMENT_VOTE_FAILURE = 'COMMENT_VOTE_FAILURE';

export const CREATED_COMMENT = 'CREATED_COMMENT';
export const CREATED_COMMENT_FAILURE = 'CREATED_COMMENT_FAILURE';

export const DELETED_COMMENT = 'DELETED_COMMENT';
export const DELETED_COMMENT_FAILURE = 'DELETED_COMMENT_FAILURE';

export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE';

export const UPDATED_COMMENT = 'UPDATED_COMMENT';
export const UPDATED_COMMENT_FAILURE = 'UPDATED_COMMENT_FAILURE';

export function createdComment (comment) {
  return store.dispatch({
    type: CREATED_COMMENT,
    comment: comment
  });
}

export function createdCommentFailure (errors) {
  return store.dispatch({
    type: DELETED_COMMENT_FAILURE,
    errors: errors
  });
}

export function deletedComment (component) {
  return store.dispatch({
    type: DELETED_COMMENT,
    component: component
  });
}

export function deletedCommentFailure (errors) {
  return store.dispatch({
    type: DELETED_COMMENT_FAILURE,
    errors: errors
  });
}

export function postedCommentVote (comment) {
  return store.dispatch({
    type: COMMENT_VOTE,
    comment: comment
  });
}

export function postedCommentVoteFailure (error) {
  return store.dispatch({
    type: COMMENT_VOTE_FAILURE,
    error: error
  });
}

export function retrievedComments (comments) {
  return store.dispatch({
    type: GET_COMMENTS,
    comments: comments
  });
}

export function retrievedCommentsFailure (errors) {
  return store.dispatch({
    type: GET_COMMENTS_FAILURE,
    errors: errors
  });
}

export function updatedComment (comment) {
  return store.dispatch({
    type: UPDATED_COMMENT,
    comment: comment
  });
}

export function updatedCommentFailure (comment)  {
  return store.dispatch({
    type: UPDATED_COMMENT_FAILURE,
    comment: comment
  });
}