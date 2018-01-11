// nagivation.js

import React from 'react';
import CreateEditModal from './../shared-components/createEditModal';
import { createPost } from './../../api/postsApi';
import { connect } from 'react-redux';
import { getCategories } from './../../api/categoriesApi';
import Icons from 'uikit/dist/js/uikit-icons';
import SubNavigation from './subNavigation';
import UIkit from 'uikit';
import 'uikit/dist/css/uikit.min.css';

UIkit.use(Icons);

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    getCategories();
    
    this.styles = {
      header: {
        color: '#457baf'
      },
      navbar: {
        boxShadow: 'rgb(167, 167, 167) 2px 2px 4px 1px'
      }
    }
  }

  render() {
    const { categories } = this.props;
    
    return (
      <div>
        <nav className="uk-navbar-container uk-margin uk-padding-small" 
             data-uk-navbar 
             style={this.styles.navbar}>
          <div className="uk-navbar-item">
            <button data-uk-toggle="target: #sub-nav" data-uk-icon="icon: table">
            </button>
            <SubNavigation categories={categories}/>
          </div>
      
          <div className="uk-navbar-center">
            <h1 style={this.styles.header}>Feed</h1>
          </div>

          <div className="uk-navbar-right uk-navbar-item">
            <div className="uk-padding-small">
              <button data-uk-toggle="target: #modal_" data-uk-icon="icon: plus">
              </button>
              <CreateEditModal categories={categories} component='' createComponent={createPost}/>
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

function mapStateToProps ({ categoriesReducer }) {
  return { categories : categoriesReducer['categories'] };
}

export default connect(mapStateToProps)(Navigation);
