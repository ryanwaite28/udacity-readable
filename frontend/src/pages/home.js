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
    
    this.state = {
      sort: 'Comments'
    }
    getPosts();
  }
  
  filterPosts = (posts) => {
    if(posts) {
      posts = this.props.posts.filter((post) => {
        return post.deleted === false
      })
    }
    return posts;
  }

  setSortType = (event) => {
    if(event && event.target && event.target.value) {
      this.setState({ sort : event.target.value });
    }
  }

  sortPosts = (posts) => {
    const sortType = this.state.sort;
    if(sortType && posts) {
       if('Votes'===sortType) { 
        posts = [].concat(posts).sort((a, b) => { return a.voteScore - b.voteScore });
      } else if('Comments'===sortType) {
        console.log('comments');
      }
    }
    return posts;
  }

  render() {
    let { posts } = this.props;
    posts  = this.filterPosts(posts);
    posts = this.sortPosts(posts);
    
    return (
      <div className='postItem'>
        <Navigation />
        <SortBar components={posts} setSortType={this.setSortType}/>
        <h1>All Categories</h1>
        { posts && posts.map((post, key) => {
            return (<div key={key}><Post fetchedPost={post}/></div>);
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
