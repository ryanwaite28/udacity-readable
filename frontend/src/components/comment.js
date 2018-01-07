// comment.js

import React from 'react';
import { deleteComment, editComment, vote } from './../api/commentsApi';
import Delete from './shared-components/delete';
import Edit from './shared-components/edit';
import VoteScore from './shared-components/voteScore';

class Comment extends React.Component {
  
  state = {
    score: 0
  }

  styles = {
    comment: {
      width: '75%',
      boxShadow: '2px 2px 4px 1px #9a9898'
    },
    text: {
      color: 'rgb(128, 141, 230)',
      paddingLeft: 5, 
      textTransform: 'uppercase'
    }
  }

  componentDidMount = () => {
    const { comment } = this.props;
    if(comment && comment.voteScore) this.setState({ score : comment.voteScore });
  }

  render() {
    const { comment } = this.props;

    return (
      <div id={"comment_"+ comment.id} 
           className="uk-card uk-card-body-small uk-background-muted uk-panel uk-align-center uk-padding-small"
           style={this.styles.comment}>
        <div className="uk-content"><p>{comment.body}</p></div>
        <ul className="uk-subnav uk-subnav-divider uk-flex-center">
          <li>
            <span className="uk-text-meta" data-uk-icon="icon: user"/>
            <span style={this.styles.text}>{comment.author}</span>
          </li>
          <li>
            <span className="uk-text-meta" data-uk-icon="icon: calendar"/>
            <span style={this.styles.text}>{new Date(comment.timestamp).toUTCString()}</span>
          </li>
          <li>
            <VoteScore id={comment.id} handleVote={vote}/>
            <span className="uk-text-meta" style={this.styles.text}><span className="uk-badge">{this.state.score} votes</span></span>
          </li>
          <li>
            <Edit component={comment} handleEdit={editComment}/>
            <span style={{ paddingRight : 10 }}></span>
            <Delete id={comment.id} handleDelete={deleteComment}/>
          </li>
        </ul>
      </div>
    );
  }
}

export default Comment;
