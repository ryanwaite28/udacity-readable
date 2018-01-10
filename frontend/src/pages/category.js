// category.js

import React from 'react';
import { connect } from 'react-redux';

import { getPostsCategory } from './../api/postsApi';
import './pages.css';
import Post from './../components/post';
import Navigation from './../components/shared-components/navigation';

class Category extends React.Component {
  constructor(props) {
    super(props);
    getPostsCategory(window.location.search.substring(1));
  }

  render() {
    const { posts } = this.props;
    
    return (
      <div className='postItem'>
        <Navigation />
        <h1>{this.category}</h1>
        { posts && posts.map((post, key) => {
            return ( <div key={key}><Post fetchedPost={post}/></div> )
          })
        }
        { (!posts || posts.length < 1) &&
           <div>No posts were found. Be the first to create a post!</div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.postsReducer['posts']
  };
}

export default connect(mapStateToProps)(Category);
