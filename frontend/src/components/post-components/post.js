// post.js

import React from 'react';
import AddCommentModal from './../comments-components/addCommentModal';
import Comments from './../comments-components/comments';

class Post extends React.Component {

  render() {
    return (
      <div className="uk-card uk-card-body uk-padding-small">
        <div className="uk-header">
          <h3 className="uk-card-title">{this.props.postTitle}</h3>
        </div>
      
        <div className="uk-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      
        <div className="uk-footer uk-align-middle">
          <button data-uk-icon="icon: arrow-up"></button>
          <button data-uk-icon="icon: arrow-down"></button>
          <span className="uk-text-meta uk-padding-small"> Votes: 12345 </span>
      
          <button data-uk-toggle="target: #comment-modal" 
                  data-uk-icon="icon: comment">
          </button>
          <AddCommentModal />
          <span>       </span>
          <button className="uk-button-small uk-button-default"
                  data-uk-toggle={"target: #"+ this.props.postTitle +"; animation: uk-animation-fade"}
                  type="button">
            Show Comments
          </button>
        </div>
        <Comments postTitle={this.props.postTitle}/>
      </div>
    );
  }
}

export default Post;
