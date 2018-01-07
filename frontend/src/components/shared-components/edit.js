// edit.js

import React from 'react';
import CreateEditModal from './createEditModal';

const Edit = ({ component, editComponent }) => {

  this.getId = () => {
    let id = '';
    if(component) id = component.id;
    return id;
  }
  
  return (
    <div>
      <div>
        <button data-uk-toggle={"target: #modal_" + this.getId()}
                data-uk-icon="icon: pencil"
                type="button">
        </button>
        <CreateEditModal component={component}  editComponent={editComponent}/>
      </div>
    </div>
  );
}

export default Edit;
