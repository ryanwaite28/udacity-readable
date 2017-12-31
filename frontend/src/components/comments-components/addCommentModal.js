// addCommentForm.js

import React from 'react';

class AddCommentForm extends React.Component {
  render() {
    return (
        <div id="add-post-modal" data-uk-modal>
        <div className="uk-modal-dialog uk-modal-body">
          <button className="uk-modal-close-default" type="button" data-uk-close></button>
          <h2 className="uk-modal-title">Create A Post</h2>
          <form>
              <div className="uk-margin">
                Title: <input className="uk-input" type="text" placeholder="Input"/>
              </div>
              <div className="uk-margin">
                Content: <input className="uk-input" type="text" placeholder="Input"/>
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddCommentForm;
