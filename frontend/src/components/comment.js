// comment.js

import React from 'react';
import { deleteComment, editComment, vote } from './../api/commentsApi';
import DropDownInfo from './shared-components/dropDownInfo';
import DropDownModify from './shared-components/dropDownModify';

const Comment = ({ comment }) => {

  this.styles = {
    comment: {
      width: '75%',
      boxShadow: '2px 2px 4px 1px #9a9898'
    },
    commentTitle: {
      color: 'dimgray'
    },
    text: {
      color: 'rgb(128, 141, 230)',
      paddingLeft: 5, 
      textTransform: 'uppercase'
    }
  }

   return (
    <div className='uk-card uk-card-body-small uk-background-muted uk-panel uk-align-center uk-padding-small' 
         style={this.styles.comment}>
      <div className='uk-content'>
        <p>{comment.body}</p>
      </div>
      <ul className='uk-subnav uk-subnav-divider uk-flex-center'>
        <li>
          <DropDownInfo component={comment}/>
        </li>
        <li>
          <DropDownModify component={comment} 
                          deleteComponent={deleteComment} 
                          editComponent={editComment}
                          vote={vote}/>
        </li>
      </ul>
    </div>
  );
}

export default Comment;
