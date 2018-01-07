// subNagivation.js

import { connect } from 'react-redux';
import React from 'react';
import { receivedCategories, receivedCategoriesFailure } from './../../actions/categoriesActions';

class SubNavigation extends React.Component {
  constructor() {
    super();
    
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_BACKEND}/categories`;
    console.log('fetching from url', url);
    fetch(url, { headers: { 'Authorization': 'whatever-you-want' },
                 credentials: 'include' } )
      .then( (res) => { return(res.text()) })
      .then((data) => {
        this.setState({ categories : JSON.parse(data).categories});
        receivedCategories(data);
      })
      .catch((errors) => receivedCategoriesFailure(errors));
  }
  
  render() {
    return (
      <div data-uk-dropdown="pos: bottom-right" id="sub-nav">
        <ul className="uk-nav uk-dropdown-nav">
          <li><a href="/" className="uk-nav-header">Show All Categories</a></li>
          <li className="uk-nav-divider"></li>
          { this.state.categories.map((element, key) => {  
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
  return { categoriesReducer : categoriesReducer };
}

export default connect(mapStateToProps)(SubNavigation);
