// delete.js

import React from 'react';

class Delete extends React.Component {
  
  handleDelete = () => {
    this.props.deleteComponent(this.props.component);
    if (this.props.isDetailPage) window.location.href = '/';
  }

  render () {
    return (
      <span>
        <button data-uk-icon='icon: trash'  
                data-uk-toggle={'target: #modifyDropDown_' + this.props.component.id} 
                onClick={() => this.handleDelete()}>
        </button>
      </span>
    );
  }
}

export default Delete;
