// category.js

import React from 'react';
import Navigation from './../components/nav-components/navigation';
import PostContainer from './../components/postsContainer';
import './pages.css';

const Category = () => {
  
  const CATEGORY = window.location.search.substring(1);
  
  return (
    <div>
      <Navigation />
      <PostContainer isDetailPage={false} category={CATEGORY}/>
    </div>
  );
}

export default Category;
