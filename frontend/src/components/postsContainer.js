// postContainer.js

import React from 'react';
import { connect } from 'react-redux';
import { getPostId, getPosts, getPostsCategory } from './../api/postsApi';
import { filterComponents } from './../utils/helperMethods';
import { Link } from 'react-router-dom';
import Post from './post';
import SortBar from './sortBar';

class PostContainer extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      sort: 'Date'
    }
     
    this.isDetailPage = props.isDetailPage;
    
    if (props.category) {
      getPostsCategory(props.category);
    } else if (props.id) {
      getPostId(props.id);
    } else {
      getPosts();
    }
  }
 
  getHeader = () => {
    let header = 'All Categories';
    if (this.props.category) header = this.props.category;
    return header;
  }

  setSortType = (event) => {
    if (event && event.target && event.target.value) {
      this.setState({ sort : event.target.value });
    }
  }

  sortPosts = (posts) => {
    const sortType = this.state.sort;
    if (sortType) {
       if ('Date' === sortType) { 
        posts = [].concat(posts).sort((a, b) => { return b.timestamp - a.timestamp });
      } else if ('Votes' === sortType) {
        posts = [].concat(posts).sort((a, b) => { return b.voteScore - a.voteScore });
      }
    }
    return posts;
  }

  render() {
    let { isDetailPage, posts } = this.props;
    
    if (posts) {
      posts  = filterComponents(posts);
      if (!isDetailPage) posts = this.sortPosts(posts);
      posts = [].concat(posts);
    }

   const hasPosts = (posts && posts.length > 0);

   // for detail page
   let postsComponents = [];
   if (hasPosts) {
     posts.map((post, key) => {
       return postsComponents.push(
         <div key={key}><Post isDetailPage={this.isDetailPage} fetchedPost={post}/></div>
       )}
     )
   }

  return (
    <div className='postItem'>
      { !isDetailPage && <h1>{this.getHeader()}</h1> }
        <div> 
          { hasPosts && posts.length > 1 &&
            <SortBar components={posts} setSortType={this.setSortType}/> 
          } 
        </div>
        { hasPosts && postsComponents}
        { !hasPosts && !this.isDetailPage && 
          <div className='uk-padding-small'>
           No posts were found.
           <span>  </span>
           <Link to={{ pathname: `/add/${this.props.category}` }}>
             Click here to create a post!
           </Link>
         </div>
        }
      </div>
    );
  }
}

function mapStateToProps({ postsReducer }) {
  return {
    posts:  postsReducer['posts']
  };
}

export default connect(mapStateToProps)(PostContainer);
