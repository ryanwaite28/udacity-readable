// commentsActions.js

export const ADD_POST_COMMENT = 'ADD_POST_COMMENT';
export const DELETE_POST_COMMENT = 'DELETE_POST_COMMENT';
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const GET_POST_COMMENTS_WITH_ID = 'GET_POST_COMMENTS_WITH_ID';
export const POST_COMMENT_VOTE = 'POST_COMMENT_VOTE';
export const PUT_COMMENT_DETAILS = 'PUT_COMMENT_DETAILS';

export function addPostComment ({ post, comment }) {
  return {
    type: ADD_POST_COMMENT,
    post: post,
    comment: comment
  }
}

export function deletePostComment ({ post }) {
  return {
    type: DELETE_POST_COMMENT,
    post: post
  }
}

export function getPostComments ({ post, comments }) {
  return {
    type: GET_POST_COMMENTS,
    post: post,
    comments: comments
  }
}

export function getPostCommentsWithId ({ post, comments }) {
  return {
    type: GET_POST_COMMENTS_WITH_ID,
    post: post,
    comments: comments
  }
}

export function postCommentVote ({ comment, vote }) {
  return {
    type: POST_COMMENT_VOTE,
    comment: comment,
    vote: vote
  }
}

export function putCommentDetails ({ comment, details }) {
  return {
    type: PUT_COMMENT_DETAILS,
    comment: comment,
    details: details
  }
}