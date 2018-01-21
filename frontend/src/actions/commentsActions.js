// commentsActions.js

import { store } from '../store';

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
} from './../utils/constants';

export function createdComment (comment) {
  return store.dispatch({
    type: CREATED_COMMENT,
    comment: comment
  });
}

export function createdCommentFailure (errors) {
  return store.dispatch({
    type: CREATED_COMMENT_FAILURE,
    errors: errors
  });
}

export function deletedComment (component) {
  return store.dispatch({
    type: DELETED_COMMENT,
    comment: component
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