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
  getCred,
  uuid
} from './../utils/config';

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
               credentials: getCred(),
               method: 'POST'
             })
       .then((response) => response.json()
       .then((json) => createdPost(json) )
       .catch((errors) =>  createdPostFailure(errors) ));
}

export const deletePost = (component) => {
  const url = `${baseUrl}/posts/${component.id}`;
  fetch(url, { credentials: getCred(), headers, method: 'DELETE'} )
       .then((response) => response.text()
       .then((data) => deletedPost(component) )
       .catch((errors) =>  deletedPostFailure(errors) ));
}

export const editPost = (body, id, title) => {
    fetch(`${baseUrl}/posts/${id}`, { body: JSON.stringify({ title, body }),
                 credentials: getCred(),
                 headers, 
                 method: 'PUT'
               })
         .then((response) => response.json()
         .then((json) => updatedPost(json) ))
         .catch((errors) =>  updatedPostFailure(errors) )
}

export const getPostId = (id) => {
    fetch(`${baseUrl}/posts/${id}`, { credentials: getCred(), headers })
        .then((posts) => posts.json()
        .then((json) => receivedAllPosts(json) ))
        .catch((errors) => receivedAllPostsFailure(errors) )
}

export const getPosts = () => {
   fetch(`${baseUrl}/posts`, { headers })
        .then((posts) => posts.json()
        .then((json) => receivedAllPosts(json) ))
        .catch((errors) => receivedAllPostsFailure(errors) )
}

export const getPostsCategory = (category) => {
    const categoryTerm = category.substring(category.indexOf('?'));
    fetch(`${baseUrl}/${categoryTerm}/posts`, { credentials: getCred(), headers })
        .then((posts) => posts.json()
        .then((json) => receivedAllPosts(json) ))
        .catch((errors) => receivedAllPostsFailure(errors) )
}
                
export const vote = (id, vote) => {
    fetch(`${baseUrl}/posts/${id}`, { body: JSON.stringify({ option: vote }),
                 credentials: getCred(),                      
                 headers, 
                 method: 'POST'
               })
         .then((response) => response.json()
         .then((json) => postedVote(json) ))
         .catch((errors) =>  postedVoteFailure(errors) )
}
