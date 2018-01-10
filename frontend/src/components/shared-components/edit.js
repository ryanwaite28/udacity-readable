// edit.js

import React from 'react';
import CreateEditModal from './createEditModal';
import UIkit from 'uikit';

const Edit = ({ component, editComponent }) => {

  this.getId = () => {
    let id = '';
    if(component) id = component.id;
    return id;
  }
  
  this.handleShowModal = () => {
    UIkit.modal("#modal_" + this.getId()).toggle();
  }
  
  return (
    <span>
      <button data-uk-toggle={"target: #modifyDropDown_" + this.getId()}
              data-uk-icon="icon: pencil"
              onClick={() => this.handleShowModal()}
              type="button">
      </button>
    <CreateEditModal component={component}  editComponent={editComponent}/>
  </span>
  );
}

export default Edit;
