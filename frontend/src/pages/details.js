// details.js

import React from 'react';
import CommentsContainer from './../components/commentsContainer';
import Navigation from './../components/nav-components/navigation';
import PostContainer from './../components/postsContainer';
import './pages.css';

const Details = () => {
  
  const URL = window.location.href; 
  const ID = URL.substring(URL.lastIndexOf('/') + 1);
  
  return (
    <div>
      <Navigation isDetailPage={true}/>
      <PostContainer id={ID} isDetailPage={true}/>
      <CommentsContainer id={ID}/>
    </div>
  );
}

export default Details;
