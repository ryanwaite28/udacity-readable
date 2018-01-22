// postsApi.js

import { 
  createdPost,
  createdPostFailure,
  deletedPost,
  deletedPostFailure,
  postedVote, 
  postedVoteFailure, 
  receivedAllPosts,
  receivedAllPostsFailure,
  updatedPost, 
  updatedPostFailure
} from './../actions/postsActions';

import {
  baseUrl,
  headers,
  uuid
} from './../utils/config';

let credential = 'true';
if(baseUrl === `${process.env.REACT_APP_BACKEND}`) credential = 'include';

export const createPost = (author, body, category, title) => {
  fetch(`${baseUrl}/posts`, { body: JSON.stringify({
                author,
                body,
                category,
                id: uuid(),
                timestamp: Date.now(),
                title,
              }),
               headers, 
               credentials: credential,
               method: 'POST'
             })
       .then((response) => response.json()
       .then((json) => createdPost(json) )
       .catch((errors) =>  createdPostFailure(errors) ));
}

export const deletePost = (component) => {
  const url = baseUrl + '/posts/' + component.id;
  fetch(url, { credentials: credential, headers, method: 'DELETE'} )
       .then((response) => response.text()
       .then((data) => deletedPost(component) )
       .catch((errors) =>  deletedPostFailure(errors) ));
}

export const editPost = (body, id, title) => {
    fetch(`${baseUrl}/posts/${id}`, { body: JSON.stringify({ title, body }),
                 credentials: credential,
                 headers, 
                 method: 'PUT'
               })
         .then((response) => response.json()
         .then((json) => updatedPost(json) ))
         .catch((errors) =>  updatedPostFailure(errors) )
}

export const getPostId = (id) => {
    fetch(`${baseUrl}/posts/${id}`, { credentials: credential, headers })
        .then((posts) => posts.json()
        .then((json) => receivedAllPosts(json) ))
        .catch((errors) => receivedAllPostsFailure(errors) )
}

export const getPosts = () => {
   fetch(`${baseUrl}/posts/`, { credentials: credential, headers })
        .then((posts) => posts.json()
        .then((json) => receivedAllPosts(json) ))
        .catch((errors) => receivedAllPostsFailure(errors) )
}

export const getPostsCategory = (category) => {
    const categoryTerm = category.substring(category.indexOf('?'));
    fetch(`${baseUrl}/${categoryTerm}/posts/`, { credentials: credential, headers })
        .then((posts) => posts.json()
        .then((json) => receivedAllPosts(json) ))
        .catch((errors) => receivedAllPostsFailure(errors) )
}
                
export const vote = (id, vote) => {
    fetch(`${baseUrl}/posts/${id}`, { body: JSON.stringify({ option: vote }),
                 credentials: credential,                      
                 headers, 
                 method: 'POST'
               })
         .then((response) => response.json()
         .then((json) => postedVote(json) ))
         .catch((errors) =>  postedVoteFailure(errors) )
}