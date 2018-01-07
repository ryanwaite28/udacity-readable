// delete.js

import React from 'react';

const Delete = ({ deleteComponent, id }) => {
 
  return (
    <div>
      <button data-uk-icon="icon: trash" onClick={() => deleteComponent(id)}></button>
    </div>
  );
}

export default Delete;
