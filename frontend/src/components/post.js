// Post.js

import React from 'react';
import { connect } from 'react-redux';
import { deletePost, editPost, vote } from './../api/postsApi';
import DropDownInfo from './shared-components/dropDownInfo';
import DropDownModify from './shared-components/dropDownModify';

class Post extends React.Component {
  constructor(props) {
    super(props);
    
    this.styles = {
      post: {
        width: '75%',
        boxShadow: '2px 2px 4px 1px #9a9898'
      },
      postTitle: {
        color: 'dimgray'
      }
    }
    this.fetchedPost = props.fetchedPost;
  }
  
  render() {
    let { post } = this.props;
    if(typeof post === 'string') {
      post = JSON.parse(post);
    } else if(!post) {
      post = this.fetchedPost;
    }
    
    return (
      <div>
        { post && !post.deleted &&
          <div className="uk-card uk-card-body-small uk-background-muted uk-panel uk-align-center uk-padding-small" 
               style={this.styles.post}>
            <div className="uk-header">
              <h3 className="uk-card-title" style={this.styles.postTitle}>
                {post.title}
              </h3>
            </div>
            <div className="uk-content">
              <p>{post.body}</p>
            </div>
            <ul className="uk-subnav uk-subnav-divider uk-flex-center">
              <li><DropDownInfo component={post}/></li>
              <li><DropDownModify component={post} 
                                  deleteComponent={deletePost} 
                                  editComponent={editPost}
                                  vote={vote}/></li>
              <li>
                <a className='uk-text-meta' 
                   href={`category?${post.category}/post_id&${post.id}`} 
                   data-uk-icon="icon: more">
                </a>
              </li>
            </ul>
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.postsReducer['post']
  };
}

export default connect(mapStateToProps)(Post);
