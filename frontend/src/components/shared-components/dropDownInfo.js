// dropDownInfo.js

import React from 'react';
import './../../styles/dropDownContainers.css';

const DropDownInfo = ({ component, styles, comments }) => {

  return (
    <div>
      <span className='navIcon' data-uk-icon='icon: info' type='button'/>
      <div data-uk-dropdown='mode: click'>
        <ul className='uk-nav uk-dropdown-nav list'>
          <li className='ul-position-left'>
            <span className='uk-text-meta' data-uk-icon='icon: user'/>
            <span className='text'>  {component.author}</span>
          </li>
          <li>
            <span className='uk-text-meta' data-uk-icon='icon: calendar'/>
            <span className='text'>  {new Date(component.timestamp).toUTCString()}</span>
          </li>
         { comments && comments.id === component.id &&
         <li>
            <span className='uk-text-meta' data-uk-icon='icon: comments'/>
            <span className='text'>  {comments.value} comments</span>
          </li>
          }
          <li>
            <span className='uk-badge'>  {component.voteScore} votes</span>
          </li>
        </ul>
      </div>
  </div>
  );
}

export default DropDownInfo;
