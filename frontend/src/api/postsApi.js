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

const baseUrl =  `${process.env.REACT_APP_BACKEND}`;
const uuid = require('uuid/v1');

const headers = { 
  'Authorization': 'whatever-you-want', 
  'Content-Type': 'application/json' 
};

export const createPost = (author, body, category, title) => {
  fetch(`${baseUrl}/posts`, { body: JSON.stringify({
                author,
                body,
                category,
                id: uuid(),
                timestamp: Date.now(),
                title,
              }),
               credentials: 'include', 
               headers, 
               method: 'POST'
             })
       .then((response) => response.json()
       .then((json) => createdPost(json) )
       .catch((errors) =>  createdPostFailure(errors) ));
}

export const deletePost = (component) => {
  fetch(`${baseUrl}/posts/${component.id}`, { 
                                    credentials: 'include', 
                                    headers, 
                                    method: 'DELETE' 
                                  })
       .then((response) => response.text()
       .then((data) => deletedPost(data) )
       .catch((errors) =>  deletedPostFailure(errors) ));
}

export const editPost = (body, id, title) => {
    fetch(`${baseUrl}/posts/${id}`, { body: JSON.stringify({ title, body }),
                 credentials: 'include', 
                 headers, 
                 method: 'PUT'
               })
         .then((response) => response.json()
         .then((json) => updatedPost(json) ))
         .catch((errors) =>  updatedPostFailure(errors) )
}

export const getPostId = (id) => {
    fetch(`${baseUrl}/posts/${id}`, { credentials: 'include', headers })
        .then((posts) => posts.json()
        .then((json) => receivedAllPosts(json) ))
        .catch((errors) => receivedAllPostsFailure(errors) )
}

export const getPosts = () => {
   fetch(`${baseUrl}/posts/`, { credentials: 'include', headers })
        .then((posts) => posts.json()
        .then((json) => receivedAllPosts(json) ))
        .catch((errors) => receivedAllPostsFailure(errors) )
}

export const getPostsCategory = (category) => {
    const categoryTerm = category.substring(category.indexOf('?'));
    fetch(`${baseUrl}/${categoryTerm}/posts/`, { credentials: 'include', headers })
        .then((posts) => posts.json()
        .then((json) => receivedAllPosts(json) ))
        .catch((errors) => receivedAllPostsFailure(errors) )
}
                
export const vote = (id, vote) => {
    fetch(`${baseUrl}/posts/${id}`, { body: JSON.stringify({ option: vote }),
                 credentials: 'include', 
                 headers, 
                 method: 'POST'
               })
         .then((response) => response.json()
         .then((json) => postedVote(json) ))
         .catch((errors) =>  postedVoteFailure(errors) )
}