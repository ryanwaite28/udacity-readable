// category.js

import React from 'react';
import Navigation from './../components/nav-components/navigation';
import PostContainer from './../components/postsContainer';
import './pages.css';

const Category = () => {
  return (
    <div>
      <Navigation />
      <PostContainer category={window.location.search.substring(1)}/>
    </div>
  );
}

export default Category;
