// delete.js

import React from 'react';

const Delete = ({ deleteComponent, id }) => {
 
  return (
    <span>
      <span data-uk-icon="icon: trash" 
            onClick={() => deleteComponent(id)}></span>
    </span>
  );
}

export default Delete;
