// subNagivation.js

import { connect } from 'react-redux';
import React from 'react';
import { getCategories } from './../../api/categoriesApi';

class SubNavigation extends React.Component {
  constructor(props) {
    super(props);
    getCategories();
  } 
  
  render() {
    const { categories } = this.props;
    
    return (
      <div data-uk-dropdown="pos: bottom-right" id="sub-nav">
        <ul className="uk-nav uk-dropdown-nav">
          <li><a href="/" className="uk-nav-header">Show All Categories</a></li>
          <li className="uk-nav-divider"></li>
          { categories && JSON.parse(categories).categories.map((element, key) => {  
              return (
                <li key={key}>
                  <a href={"/category?"+element.path}>{element.name}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps ({ categoriesReducer }) {
  return { categories : categoriesReducer['categories'] };
}

export default connect(mapStateToProps)(SubNavigation);
