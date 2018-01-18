// category.js

import React from 'react';
import Navigation from './../components/nav-components/navigation';
import PostContainer from './../components/postsContainer';
import './pages.css';

const Category = ({ match }) => {
  
  return (
    <div>
      <Navigation category={match.params.category} id={match.params.post_id} />
      <PostContainer category={match.params.category} />
    </div>
  );
}

export default Category;
