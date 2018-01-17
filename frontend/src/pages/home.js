// home.js

import React from 'react';
import Navigation from './../components/nav-components/navigation';
import PostContainer from './../components/postsContainer';
import './pages.css';

const Home = () => {
  return (
    <div>
      <Navigation />
      <PostContainer />
    </div>
  );
}

export default Home;
