// nagivation.js

import React from 'react';
import AddCommentModal from './post-components/addPostModal';
import Icons from 'uikit/dist/js/uikit-icons';
import SubNavigation from './subNavigation';
import UIkit from 'uikit';
import 'uikit/dist/css/uikit.min.css';

UIkit.use(Icons);

class Navigation extends React.Component {
  
  render() {
    return (
      <div>
      <nav className="uk-navbar-container uk-margin uk-padding-small" data-uk-navbar>
        
        <div className="uk-navbar-item">
          <button data-uk-toggle="target: #sub-nav" data-uk-icon="icon: table"></button>
          <SubNavigation />
        </div>
      
        <div className="uk-navbar-center">
          <h1>Feed</h1>
        </div>

        <div className="uk-navbar-right">
          <div className="uk-navbar-item">
            <div className="uk-padding-small">
              <button data-uk-toggle="target: #add-post-modal" data-uk-icon="icon: plus"></button>
              < AddCommentModal />
            </div>
            <div className="uk-padding-small">
              <a href="/manageCommentsPosts" data-uk-icon="icon: user"></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    );
  }
}

export default Navigation;
