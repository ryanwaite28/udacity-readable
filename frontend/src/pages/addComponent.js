// AddComponent.js

import React from 'react';
import AddContainer from './../components/addContainer';
import Navigation from './../components/nav-components/navigation';
import './pages.css';

const AddComponent = ({ history, match }) => {
  
  return (
    <div>
      <Navigation />
      <AddContainer category={match.params.category} 
                    id={match.params.post_id} 
                    url={match.url} />
    </div>
  );
}

export default AddComponent;
