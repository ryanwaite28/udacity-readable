// subNagivation.js

import React from 'react';
import { Link } from 'react-router-dom';
const SubNavigation = ({ categories }) => {
  return (
    <div data-uk-dropdown='pos: bottom-right' id='sub-nav'>
      <ul className='uk-nav uk-dropdown-nav' id='nav-dropdown'>
        <li>
          <Link to='/' className='uk-nav-header'>Show All Categories</Link>
        </li>
        <li className='uk-nav-divider'></li>
        { categories && JSON.parse(categories).categories.map((element, key) => {  
            return ( 
              <li key={key}>
                <a href={`/${element.path}`}>{element.name}</a>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default SubNavigation;
