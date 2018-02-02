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

import {
  baseUrl,
  headers,
  getCred,
  uuid
} from './../utils/config';

export const createComment = (author, body, id, title) => {
  const url = `${baseUrl}/comments`;
  fetch(url, { body: JSON.stringify({
                author,
                body,
                id: uuid(),
                timestamp: Date.now(),
                parentId: id,
              }),
               credentials: getCred(),
               headers, 
               method: 'POST'
             } 
       ).then((response) => response.json()
       .then((json) => createdComment(json) )
       .catch((errors) =>  createdCommentFailure(errors) ));
}

export const deleteComment = (component) => {
  const url = `${baseUrl}/comments/${component.id}`;
  fetch(url, { credentials: getCred(), headers, method: 'DELETE'} )
       .then((response) => response.text()
       .then((data) => deletedComment(data) )
       .catch((errors) =>  deletedCommentFailure(errors) ));
}

export const editComment = (body, id, title) => {
  const url = `${baseUrl}/comments/${id}`;
  fetch(url, { body: JSON.stringify({ title, body }),
               credentials: getCred(),
               headers, 
               method: 'PUT'
             } 
       ).then((response) => response.json()
       .then((json) => updatedComment(json) )
       .catch((errors) =>  updatedCommentFailure(errors) ));
}

export const getComments = (id) => {
  const url = `${baseUrl}/posts/${id}/comments}`;
  fetch(url, { credentials: getCred(), headers } 
       ).then((response) => { return response.text()})
       .then((json) => retrievedComments(json) )
       .catch((errors) => retrievedCommentsFailure(errors) );
}

export const vote = (id, vote) => {
  fetch(`${baseUrl}/comments/${id}`, { body: JSON.stringify({ option: vote }),
               credentials: getCred(),                        
               headers, 
               method: 'POST'
             } 
       ).then((response) => response.json()
       .then((json) => postedCommentVote(json) )
       .catch((errors) =>  postedCommentVoteFailure(errors) ));
}
