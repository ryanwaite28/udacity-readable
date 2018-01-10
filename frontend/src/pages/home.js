// home.js

import React from 'react';
import { connect } from 'react-redux';

import { getPosts } from './../api/postsApi';
import './pages.css';
import Post from './../components/post';
import SortBar from './../components/shared-components/sortBar';
import Navigation from './../components/shared-components/navigation';

class Home extends React.Component {
  constructor(props) {
    super(props)
    getPosts();
  }

  render() {
    const { posts } = this.props;
    
    return (
      <div className='postItem'>
        <Navigation />
        <SortBar components={posts}/>
        <h1>All Categories</h1>
        { posts && posts.map((post, key) => {
            return (<div key={key}><Post postFetched={post}/></div>);
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

export default connect(mapStateToProps)(Home);
