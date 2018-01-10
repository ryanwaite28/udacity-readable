// details.js

import React from 'react';
import Navigation from './../components/shared-components/navigation';
import SortBar from './../components/shared-components/sortBar';

class Details extends React.Component {
  constructor(props) {
  super(props);
  this.id = window.location.search.substring(1);
}

  render() {
    console.log(this.id);
    return (
      <div>
        <Navigation/>
        <SortBar/>
      </div>
    );
  }
}

export default Details;
