// Post.js

import React from 'react';
import { deletePost, editPost, vote } from './../api/postsApi';
import DropDownInfo from './shared-components/dropDownInfo';
import DropDownModify from './shared-components/dropDownModify';

const Post = ({ category, fetchedPost, isDetailPage, post }) => {

  this.styles = {
    post: {
      width: '75%',
      boxShadow: '2px 2px 4px 1px #9a9898'
    },
    postTitle: {
      color: 'dimgray'
    }
  }
  
  if(typeof fetchedPost === 'string') fetchedPost = JSON.parse(fetchedPost);
  
  return (
    <div className='uk-card uk-card-body-small uk-background-muted uk-panel uk-align-center uk-padding-small'
         style={this.styles.post}>
      <div className='uk-header'>
        <h3 className='uk-card-title' style={this.styles.postTitle}>
          {fetchedPost.title}
        </h3>
      </div>
      <div className='uk-content'>
        <p>{fetchedPost.body}</p>
      </div>
      <ul className='uk-subnav uk-subnav-divider uk-flex-center'>
        <li>
          <DropDownInfo component={fetchedPost}/>
        </li>
        <li>
          <DropDownModify component={fetchedPost}
                          deleteComponent={deletePost} 
                          editComponent={editPost}
                          isDetailPage={isDetailPage}
                          vote={vote}/>
        </li>
        { !isDetailPage && 
          <li>
            <a className='uk-text-meta' 
               href={`${fetchedPost.category}/${fetchedPost.id}`} 
               data-uk-icon='icon: more'>
            </a>
          </li>
        }
      </ul>
    </div>
  );
}

export default Post;
