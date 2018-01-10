// dropDownModify.js

import React from 'react';
import './../../styles/dropDownContainers.css';
import Delete from './../shared-components/delete';
import Edit from './../shared-components/edit';
import VoteScore from './../shared-components/voteScore';

const DropDownModify = ({ component, deleteComponent, editComponent, vote }) => {
 
  return (
    <div>
      <span className="navIcon" data-uk-icon="icon: list" type="button"/>
      <div data-uk-dropdown="mode: click" id={"modifyDropDown_" + component.id}>
        <ul className="uk-nav uk-dropdown-nav list">
          <li>
            <VoteScore id={component.id} vote={vote}/>
            <span className="text">Vote</span>
          </li>
          <li>
             <Edit component={component} editComponent={editComponent}/>
             <span className="text">Edit</span>
          </li>
          <li>
            <Delete id={component.id} deleteComponent={deleteComponent}/>
            <span className="text">Delete</span> 
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropDownModify;
