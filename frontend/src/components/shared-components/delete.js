// delete.js

import React from 'react';

const Delete = ({ deleteComponent, id }) => {
   
  return (
    <span>
      <button data-uk-icon="icon: trash" 
              data-uk-toggle={"target: #modifyDropDown_" + id}
              onClick={() => deleteComponent(id)}>
      </button>
    </span>
  );
}

export default Delete;
