// Post.js

import React from 'react';
import { connect } from 'react-redux';

import CommentsContainer from './commentsContainer';
import CreateEditModal from './shared-components/createEditModal';
import { createComment } from './../api/commentsApi';
import Delete from './shared-components/delete';
import { deletePost, editPost, vote } from './../api/postsApi';
import Edit from './shared-components/edit';
import VoteScore from './shared-components/voteScore';

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
      },
      text: {
        color: 'rgb(128, 141, 230)',
        paddingLeft: 5, 
        textTransform: 'uppercase'
      }
    }
  }
  
  render() {
    let { post, postUpdated } = this.props;
    if(postUpdated && postUpdated.id === post.id) post = postUpdated;
   
    return (
    <div className="uk-card uk-card-body-small uk-background-muted uk-panel uk-align-center uk-padding-small" 
         style={this.styles.post}>
        <div className="uk-header">
          <h3 className="uk-card-title" style={this.styles.postTitle}>
            {post.title}
          </h3>
        </div>
        <div className="uk-content"><p>{post.body}</p></div>
        <ul className="uk-subnav uk-subnav-divider uk-flex-center">
          <li>
             <span className="uk-text-meta" data-uk-icon="icon: user"/>
             <span style={this.styles.text}>{post.author}</span>
          </li>
          <li>
            <span className="uk-text-meta" data-uk-icon="icon: calendar"/>
            <span style={this.styles.text}>{new Date(post.timestamp).toUTCString()}</span>
          </li>
          <li>
            <VoteScore id={this.props.post.id} vote={vote}/>
            <span className="uk-text-meta">
              <span className="uk-badge">{post.voteScore} votes</span>
            </span>
          </li>
          <li>
            <button data-uk-toggle={"target: #modal_" + post.id}
                    data-uk-icon="icon: commenting">
            </button>
            <CreateEditModal handleCreate={createComment}/>
            <CommentsContainer id={post.id} title={post.title}/>
          </li>
          <li>
            <Edit component={post} editComponent={editPost}/>
            <span style={{ paddingRight : 10 }}></span>
            <Delete id={post.id} deleteComponent={deletePost}/>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postUpdated: state.postsReducer['post']
  };
}

export default connect(mapStateToProps)(Post);
