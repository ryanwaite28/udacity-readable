// nagivation.js

import React from 'react';
import { connect } from 'react-redux';
import { getCategories } from './../../api/categoriesApi';
import Icons from 'uikit/dist/js/uikit-icons';
import { Link } from 'react-router-dom';
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
    const { categories, isDetailPage } = this.props;
    
    let path = "/add";
    if(isDetailPage) {
      const URL = window.location.href;
      const BASE_URL = window.location.origin;
      const firstSlash = URL.substring(URL.indexOf(BASE_URL) + BASE_URL.length + 1);                
      const category = firstSlash.substring(0, URL.indexOf('/') - 1 );
      path = "/add/" + category;
    }
    
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
                <Link to={{ pathname: path, params: { dropDown: categories }}} style={{ color: 'gray' }}>
                  <span data-uk-icon="icon: plus"/>
                </Link>
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
