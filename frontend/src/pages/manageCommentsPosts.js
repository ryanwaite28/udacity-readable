// manageCommentsPosts.js

import React from 'react';
import Post from './../components/post';
import Navigation from './../components/shared-components/navigation';

const posts = ['post1', 'post2', 'post3'];

class ManageCommentsPosts extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
       
        <div className="uk-padding-small" style={{ textAlign: 'left' }}>
          <h3>My Posts</h3>
          <button className="uk-button-default uk-button-small " 
                  data-uk-toggle='target: #posts'> 
            Show/Hide Posts
          </button>
        </div>
        <div id="posts" className="uk-flex">
          { posts.map((post, key) => 
            <Post key={key} postTitle={post}/>
          )}
        </div>
        <hr/>
        <div div className="uk-padding-small" style={{ textAlign: 'left' }}>
          <h3>My Comments</h3>
          <button className="uk-button-default uk-button-small " 
                  data-uk-toggle='target: #posts'> 
            Show/Hide Comments
          </button>
        </div>
        <div id="comments" className="uk-flex">
          { posts.map((post, key) => 
            <Post key={key} postTitle={post}/>
          )}
        </div>
      </div>
    );
  }
}

export default ManageCommentsPosts;
