// details.js

import React from 'react';
import Navigation from './../components/nav-components/navigation';
import './pages.css';

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
      </div>
    );
  }
}

export default Details;
