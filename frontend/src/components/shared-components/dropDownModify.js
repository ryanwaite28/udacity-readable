// dropDownModify.js

import React from 'react';
import './../../styles/dropDownContainers.css';
import Delete from './../shared-components/delete';
import Edit from './../shared-components/edit';
import VoteScore from './../shared-components/voteScore';

//class DropDownModify extends React.Component {
//  constructor(props) {
//    super(props);
    
//    this.component = props.component;
//    this.deleteComponent = props.deleteComponent;
//    this.editComponent = props.editComponent; 
//    this.vote = props.vote;
//  }
  
const DropDownModify = ({ component, deleteComponent, editComponent, isDetailPage, vote }) => {
  
  return (
    <div>
      <span className='navIcon' data-uk-icon='icon: list' type='button'/>
      <div data-uk-dropdown='mode: click' id={'modifyDropDown_' + component.id}>
        <ul className='uk-nav uk-dropdown-nav list'>
          <li>
            <VoteScore id={component.id} vote={vote}/>
            <span className='text'>Vote</span>
          </li>
          <li>
             <Edit component={component} editComponent={editComponent}/>
             <span className='text'>Edit</span>
          </li>
          <li>
            <Delete component={component} deleteComponent={deleteComponent} isDetailPage={isDetailPage}/>
            <span className='text'>Delete</span> 
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropDownModify;
