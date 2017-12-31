// subNagivation.js

import { connect } from 'react-redux';
import React from 'react';

class SubNavigation extends React.Component {

  componentWillReceiveProps = (props, nextProps) => {
    console.log('here with:'+  props);
  }
  
  render() {
    return (
      <div data-uk-dropdown="pos: bottom-right" id="sub-nav">
        <ul className="uk-nav uk-dropdown-nav">
          <li><a href="/" className="uk-nav-header">Show All Categories</a></li>
          <li className="uk-nav-divider"></li>
          <li><a href="/category?">Category #</a></li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps ({ categoriesReducer }) {
  return { categoriesReducer : categoriesReducer };
}

export default connect(mapStateToProps)(SubNavigation);
