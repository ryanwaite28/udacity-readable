// edit.js

import React from 'react';
import CreateEditModal from './createEditModal';
import UIkit from 'uikit';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    
    this.component = props.component;
    this.id = '';
    if(this.component) this.id = props.component.id;
  }

  handleShowModal = () => {
     console.log(this.component)
     UIkit.modal("#modal_" + this.id).toggle();
  }
  
render() {
  return (
    <span>
      <button data-uk-toggle={"target: #modifyDropDown_" + this.id}
              data-uk-icon="icon: pencil"
              onClick={() => this.handleShowModal()}
              type="button">
      </button>
      <CreateEditModal component={this.component}  editComponent={this.props.editComponent}/>
  </span>
  );
}
}

export default Edit;
