// commentsContainer.js

import React from 'react';
import { applyUpdate, filterComponents, isEmptyObject } from './../utils/helperMethods';
import Comment from './comment';
import { connect } from 'react-redux';
import { getComments } from './../api/commentsApi';

class CommentsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.styles = {
      title: {
        color: '#c7a0d0',
        textDecoration: 'underline',
        textDecorationStyle: 'double'
      }
    }
    getComments(props.id);
 }

 render() {
  const { comments } = this.props;
   
  const hasComments = !isEmptyObject(comments);

  return (
   <div>
     <h1 className="uk-padding-small" style={this.styles.title}>
       Comments
     </h1>
     <hr/>
       { hasComments && comments.map((comment, key) => {
           return (
             <Comment comment={comment} key={key}/> 
           );
         })
       }
       { !hasComments &&
         <div className="uk-padding-small">
           No comments were found for this post. Be the first to create add a comment!
         </div>
       }
     </div>
    );
  }
}

function mapStateToProps({ commentsReducer }) {
  const { comment, comments } = commentsReducer;
  let newComments = comments;
   if(newComments) {
    newComments = JSON.parse(comments);
    if(comment) newComments = applyUpdate(JSON.parse(comment), newComments);
    newComments = filterComponents(newComments);
  }
  
  return {
    comments: newComments
  };
}

export default connect(mapStateToProps)(CommentsContainer);
