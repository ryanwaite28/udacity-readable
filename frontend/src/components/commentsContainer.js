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

 render() {
  const { comments } = this.props;
   
  return (
   <div>
     <h1 className="uk-padding-small" style={this.styles.title}>
       Comments
     </h1>
     <hr/>
       { comments && JSON.parse(comments).map((comment, key) => {
           if(!comment.isDeleted) {
             return ( <Comment key={key} comment={comment}/> );
           }
         })
       }
       { (!comments || JSON.parse(comments).length < 1) &&
         <div className="uk-padding-small">
           No comments were found for this post. Be the first to create a post!
         </div>
       }
     </div>
    );
  }
}

function mapStateToProps({ commentsReducer }) {
  return {
    comments: commentsReducer['comments']
  };
}

export default connect(mapStateToProps)(CommentsContainer);
