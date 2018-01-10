// commentsContainer.js

import React from 'react';
import Comment from './comment';
import { getComments } from './../api/commentsApi';

class CommentsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      comments: [],
      showComments: false
    }
    
    this.styles = {
      title: {
        color: 'peachpuff', 
        display: 'block',
        fontStyle: 'italic'
      }
    }
 }

 render() {
  return (
   <div>
     <button className="uk-padding-small"
             data-uk-icon="icon: comments" 
             data-uk-toggle={"target: #comments_" + this.props.id}
             type="button"
             onClick={() => getComments(this.props.id)}>
      </button>
    
      <div id={"comments_" + this.props.id} className="uk-modal-full uk-background-default" data-uk-modal="bg-close: false">
        <div className="uk-modal-dialog">
          <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
          <h1 className="uk-padding-small">
            All Comments for <span style={this.styles.title}>{this.props.title}</span>
          </h1>
          <hr/>
          { this.state.comments.map((comment, key) => {
              !comment.isDeleted &&
              return <Comment key={key} comment={comment}/>
            })
          }
          { (!this.state.comments || this.state.comments.length < 1) &&
             <div className="uk-padding-small">
               No comments were found for this post. Be the first to create a post!
             </div>
          }
        </div> 
      </div> 
    </div> );
  }
}

export default CommentsContainer;
