// postActions.js

export const CREATE_NEW_POST = 'CREATE_NEW_POST';
export const DELETE_POST = 'DELETE_POST';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const POST_VOTE_DETAILS = 'POST_VOTE_DETAILS';
export const PUT_POST_DETAILS = 'PUT_POST_DETAILS';

export function createNewPost ({ post, category }) {
  return {
    type: CREATE_NEW_POST,
    post: post,
    category: category
  }
}

export function deletePost ({ posts }) {
  return {
    type: DELETE_POST,
    posts: posts,
  }
}

export function getAllPosts ({ posts }) {
  return {
    type: GET_ALL_POSTS,
    posts: posts
  }
}

export function getPostComments ({ post, comments }) {
  return {
    type: GET_POST_COMMENTS,
    post: post,
    comments: comments
  }
}

export function postVoteDetails ({ post, details }) {
  return {
    type: POST_VOTE_DETAILS,
    post: post,
    details: details
  }
}

export function putPostDetails ({ post, category, details }) {
  return {
    type: PUT_POST_DETAILS,
    post: post,
    details: details
  }
}