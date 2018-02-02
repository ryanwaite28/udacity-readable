// category.js

import React from 'react';
import Navigation from './../components/nav-components/navigation';
import './pages.css';

const NotFound = () => {
  return (
    <div>
      <Navigation />
      <p>The requested page was not found.</p>
    </div>
  );
}

export default NotFound;
