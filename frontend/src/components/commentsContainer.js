// commentsContainer.js

import React from 'react';
import { connect } from 'react-redux';
import Comment from './comment';
import { getComments } from './../api/commentsApi';

class CommentsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showComments: false
    }
    
    this.styles = {
      title: {
        color: '#c7a0d0',
        textDecoration: 'underline',
        textDecorationStyle: 'double'
      }
    }
    getComments(props.id);
 }

  applyUpdate = (comment, comments) => {
    console.log('comments', comments);
    if(comment && comments) {
      comments = [].concat(comments).map((commentInMap) => {
        if(comment.id===commentInMap.id) { 
          return comment;
        } else {
          return commentInMap;
        }
      });
    }
    return comments;
  }

  filterComments = (comments) => {
    if(comments && comments === 'object') {
      if(comments.constructor === Array) {
        comments = this.props.comments.filter((comment) => {
          return comment.deleted === false;
        })
      } else {
        if(comments.deleted === true) comments = [];
      }
    }
    return comments;
  }

 render() {
  let { comment, comments } = this.props;
  if(comments) comments = JSON.parse(comments);
  comments = this.applyUpdate(comment, comments);
  comments = this.filterComments(comments);

  return (
   <div>
     <h1 className="uk-padding-small" style={this.styles.title}>
       Comments
     </h1>
     <hr/>
       { comments && comments.map((comment, key) => {
           return ( <Comment comment={comment} key={key}/> );
         })
       }
       { (!comments || comments.length < 1) &&
         <div className="uk-padding-small">
           No comments were found for this post. Be the first to create add a comment!
         </div>
       }
     </div>
    );
  }
}

function mapStateToProps({ commentsReducer }) {
  return {
    comment: commentsReducer['comment'],
    comments: commentsReducer['comments']
  };
}

export default connect(mapStateToProps)(CommentsContainer);
