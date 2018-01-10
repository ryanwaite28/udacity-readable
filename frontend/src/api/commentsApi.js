// commentsApi.js

import { 
  createdComment,
  createdCommentFailure,
  deletedComment,
  deletedCommentFailure,
  postedCommentVote, 
  postedCommentVoteFailure, 
  retrievedComments,
  retrievedCommentsFailure,
  updatedComment, 
  updatedCommentFailure
} from './../actions/commentsActions';

const baseUrl =  `${process.env.REACT_APP_BACKEND}`;
const uuid = require('uuid/v1');

const credentials = {
  credentials: 'include'
};

const headers = { 
  'Authorization': 'whatever-you-want', 
  'Content-Type': 'application/json' 
};

export const createComment = (author, body, id, title) => {
  const url = baseUrl + '/comments/';
  fetch(url, { body: JSON.stringify({
                author,
                body,
                id: uuid(),
                timestamp: Date.now(),
                parentId: id,
              }),
               credentials, 
               headers, 
               method: 'POST'
             } 
       ).then((response) => response.json()
       .then((json) => createdComment(json) )
       .catch((errors) =>  createdCommentFailure(errors) ));
}

export const deleteComment = (id) => {
  const url = baseUrl + '/posts/' + id;
  fetch(url, { credentials, headers, method: 'DELETE'} 
       ).then((response) => response.json()
       .then((json) => deletedComment(json) )
       .catch((errors) =>  deletedCommentFailure(errors) ));
}

export const editComment = (body, id, title) => {
  const url = baseUrl + '/posts/' + id;
  fetch(url, { body: JSON.stringify({ title, body }),
               credentials, 
               headers, 
               method: 'PUT'
             } 
       ).then((response) => response.json()
       .then((json) => updatedComment(json) )
       .catch((errors) =>  updatedCommentFailure(errors) ));
}

export const getComments = (id) => {
  const url = baseUrl + '/posts/' + id + '/comments';
  fetch(url, { credentials, headers } 
       ).then((response) => response.json()
       .then((json) => retrievedComments(json) )
       .catch((errors) => retrievedCommentsFailure(errors) ));
}

export const vote = (id, vote) => {
  const url = baseUrl + '/posts/' + id;
  fetch(url, { body: JSON.stringify({ option: vote }),
               credentials, 
               headers, 
               method: 'POST'
             } 
       ).then((response) => response.json()
       .then((json) => postedCommentVote(json) )
       .catch((errors) =>  postedCommentVoteFailure(errors) ));
}