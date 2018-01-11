// comment.js

import React from 'react';
import { deleteComment, editComment, vote } from './../api/commentsApi';
import DropDownInfo from './shared-components/dropDownInfo';
import DropDownModify from './shared-components/dropDownModify';

class Comment extends React.Component {

  styles = {
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

  render() {
    const { comment } = this.props;

    return (
      <div>
        { comment &&
          <div className="uk-card uk-card-body-small uk-background-muted uk-panel uk-align-center uk-padding-small" 
               style={this.styles.comment}>
            <div className="uk-content">
              <p>{comment.body}</p>
            </div>
            <ul className="uk-subnav uk-subnav-divider uk-flex-center">
              <li>
                <DropDownInfo component={comment}/>
              </li>
              <li>
                <DropDownModify component={Comment} 
                                deleteComponent={deleteComment} 
                                editComponent={editComment}
                                vote={vote}/>
              </li>
            </ul>
          </div>
        }
      </div>
    );
  }
}

export default Comment;
