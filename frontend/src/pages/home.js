// home.js

import React from 'react';
import Post from './../components/post-components/post';
import Navigation from './../components/navigation';

const posts = ['post1'];

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className='home'>
          { posts.map((post, key) => 
            <Post key={key} postTitle={post}/>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
