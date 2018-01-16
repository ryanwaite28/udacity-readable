// edit.js

import React from 'react';
import EditModal from './editModal';
import UIkit from 'uikit';

class Edit extends React.Component {

  handleShowModal = () => {
     UIkit.modal("#modal_" + this.props.component.id).toggle();
  }
  
render() {
  return (
    <span>
      <button data-uk-toggle={"target: #modifyDropDown_" + this.props.component.id}
              data-uk-icon="icon: pencil"
              onClick={() => this.handleShowModal()}
              type="button">
      </button>
      <EditModal body={this.props.component.body} 
                 id={this.props.component.id} 
                 title={this.props.component.title} 
                 editComponent={this.props.editComponent}/>
  </span>
  );
}
}

export default Edit;
