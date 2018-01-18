// sortBar.js

import React from 'react';

const SortBar = ({ components, setSortType }) => {
 
  this.styles = {
    header: {
      color: '#6575b1', 
      display: 'inline',
      paddingRight: 10
    }
  }

  return (
    <div className='uk-padding-small'> 
      <h3 style={this.styles.header}>Sort By Number Of</h3>
        <select className='uk-select uk-form-small uk-form-width-small'
                onChange={(event) => setSortType(event)}>
          <option>Date</option>
          <option>Votes</option>
     </select> 
   </div>
  );
}

export default SortBar;
