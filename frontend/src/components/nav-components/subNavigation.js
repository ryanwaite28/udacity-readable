// subNagivation.js

import React from 'react';

const SubNavigation = ({ categories }) => {
  return (
    <div data-uk-dropdown="pos: bottom-right" id="sub-nav">
      <ul className="uk-nav uk-dropdown-nav">
        <li><a href="/" className="uk-nav-header">Show All Categories</a></li>
        <li className="uk-nav-divider"></li>
        { categories && JSON.parse(categories).categories.map((element, key) => {  
            return ( 
              <li key={key}><a href={`/category?${element.path}`}>{element.name}</a></li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default SubNavigation;
