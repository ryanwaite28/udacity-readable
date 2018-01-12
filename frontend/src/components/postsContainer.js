// postContainer.js

import React from 'react';
import { connect } from 'react-redux';
import { getPostId, getPosts, getPostsCategory } from './../api/postsApi';
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
  
  applyUpdate = (post, posts) => {
    console.log('posts', posts);
    if(post && posts) {
      posts = [].concat(posts).map((postInMap) => {
        if(post.id===postInMap.id) { 
          return post;
        } else {
          return postInMap;
        }
      });
    }
    return posts;
  }

  getHeader = () => {
    let header = 'All Categories';
    if(this.props.category) header = this.props.category;
    return header;
  }

  filterPosts = (posts) => {
    if(posts && posts === 'object') {
      if(posts.constructor === Array) {
        posts = this.props.posts.filter((post) => {
          return post.deleted === false;
        })
      } else {
        if(posts.deleted === true) posts = [];
      }
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
        posts = [].concat(posts).sort((a, b) => { return b.voteScore - a.voteScore });
      } else if('Comments'===sortType) {
        posts = [].concat(posts).map((post) => { console.log(this.props.comments); });
      }
    }
    return posts;
  }

  render() {
    let { id, comments, post, posts } = this.props;
    posts  = this.applyUpdate(post, posts);
    posts  = this.filterPosts(posts);
    posts = this.sortPosts(posts);

    return (
      <div>
        <div> 
          { posts && posts.length > 1 && <SortBar components={posts} setSortType={this.setSortType}/> } 
        </div>
        <div className='postItem'>
          <h1>{this.getHeader()}</h1>
          { posts && posts.map((post, key) => {
              return (<div key={key}><Post isDetailPage={this.isDetailPage} fetchedPost={post}/></div>);
            })
          }
          { (!posts || posts.length < 1) &&  (
            ( id && <div>No posts with this id were found.</div> ) ||
            ( !id && <div>No posts were found. Be the first to create a post!</div> ))
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.commentsReducer['comments'],
    post: state.postsReducer['post'],
    posts: state.postsReducer['posts']
  };
}

export default connect(mapStateToProps)(PostContainer);
