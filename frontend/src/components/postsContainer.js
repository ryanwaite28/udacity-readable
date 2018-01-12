// postContainer.js

import React from 'react';
import { connect } from 'react-redux';
import { getPostId, getPosts, getPostsCategory } from './../api/postsApi';
import { applyUpdate, filterComponents, isEmptyObject } from './../utils/helperMethods';
import Post from './post';
import SortBar from './sortBar';

class PostContainer extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      sort: 'Votes'
    }
     
    this.isDetailPage = props.isDetailPage;
    
    if(props.category) {
      getPostsCategory(props.category);
    } else if(props.id) {
      getPostId(props.id);
    } else {
      getPosts();
    }
  }
 
  getHeader = () => {
    let header = 'All Categories';
    if(this.props.category) header = this.props.category;
    return header;
  }

  setSortType = (event) => {
    if(event && event.target && event.target.value) {
      this.setState({ sort : event.target.value });
    }
  }

  sortPosts = (posts) => {
    const sortType = this.state.sort;
    if(sortType) {
       if('Date'===sortType) { 
        posts = [].concat(posts).sort((a, b) => { return b.timestamp - a.timestamp });
      } else if('Votes'===sortType) {
        posts = [].concat(posts).sort((a, b) => { return b.voteScore - a.voteScore });
      }
    }
    return posts;
  }

  render() {
    let { post, posts } = this.props;
    let hasPosts = false;

    if(posts) {
      posts  = applyUpdate(post, posts);
      posts  = filterComponents(posts);
      posts = this.sortPosts(posts);
      hasPosts = !isEmptyObject(posts);
    } else if(post) {
      post = applyUpdate(post, post);
      post = filterComponents(posts);
      hasPosts = true;
    }

    return (
      <div>
        <div> 
          { hasPosts && <SortBar components={posts} setSortType={this.setSortType}/> } 
        </div>
        <div className='postItem'>
          <h1>{this.getHeader()}</h1>
          { hasPosts && posts.map((post, key) => {
              return (
                <div key={key}>
                  <Post isDetailPage={this.isDetailPage} fetchedPost={post}/>
                </div>
              );
            })
          }
          { !hasPosts &&  (
            ( post && <div>No posts with this id were found.</div> ) ||
            ( !post && <div>No posts were found. Be the first to create a post!</div> ))
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ postsReducer }) {
  return {
    post: postsReducer['post'],
    posts: postsReducer['posts']
  };
}

export default connect(mapStateToProps)(PostContainer);
