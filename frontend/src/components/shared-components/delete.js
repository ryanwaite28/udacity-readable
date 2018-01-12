// delete.js

import React from 'react';

const Delete = ({ component, deleteComponent }) => {
   
  return (
    <span>
      <button data-uk-icon="icon: trash" 
              data-uk-toggle={"target: #modifyDropDown_" + component.id}
              onClick={() => deleteComponent(component)}>
      </button>
    </span>
  );
}

export default Delete;
