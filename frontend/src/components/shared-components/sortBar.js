// sortBar.js

import React from 'react';

const SortBar = ({ components, sortComponents }) => {
 
  this.styles = {
    header: {
      color: '#6575b1', 
      display: 'inline',
      paddingRight: '10'
    }
  }

  return (
    <div>
      { components && components.length > 1 &&
        <div> 
          <h3 style={this.styles.header}>Sort By Number Of</h3>
          <select className="uk-select uk-form-small uk-form-width-small">
            <option>Comments</option>
            <option>Votes</option>
          </select> 
        </div>
      }
    </div>
  );
}

export default SortBar;