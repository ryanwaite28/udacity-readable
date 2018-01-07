// nagivation.js

import React from 'react';
import CreateEditModal from './createEditModal';
import { createPost } from './../../api/postsApi';
import Icons from 'uikit/dist/js/uikit-icons';
import SubNavigation from './subNavigation';
import UIkit from 'uikit';
import 'uikit/dist/css/uikit.min.css';

UIkit.use(Icons);

class Navigation extends React.Component {
  
  styles = {
    header: {
      color: 'dodgerblue'
    },
    navbar: {
      boxShadow: '#4c7094 2px 2px 4px 1px'
    }
  }

  render() {
    return (
      <div>
        <nav className="uk-navbar-container uk-margin uk-padding-small" 
             data-uk-navbar 
             style={this.styles.navbar}>
          <div className="uk-navbar-item">
            <button data-uk-toggle="target: #sub-nav" data-uk-icon="icon: table">
            </button>
            <SubNavigation />
          </div>
      
          <div className="uk-navbar-center">
            <h1 style={this.styles.header}>Feed</h1>
          </div>

          <div className="uk-navbar-right uk-navbar-item">
            <div className="uk-padding-small">
              <button data-uk-toggle="target: #modal_" data-uk-icon="icon: plus">
              </button>
              <CreateEditModal post='' createComponent={createPost}/>
            </div>
            <div className="uk-padding-small">
              <a href="/manageCommentsPosts" style={{ color : '#666' }}>
                <span data-uk-icon="icon: user"></span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
