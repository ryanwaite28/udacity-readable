// comments.js

import React from 'react';

class Comments extends React.Component {
  
  variable = "comment";

  render() {
    return (
      <div id={this.props.postTitle} data-uk-modal>
        <div className="uk-modal-dialog uk-modal-body">
          <button className="uk-modal-close-default" type="button" data-uk-close></button>
        </div>
    </div>
    );
  }
}

export default Comments;
