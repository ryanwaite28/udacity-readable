// details.js

import React from 'react';
import CommentsContainer from './../components/commentsContainer';
import Navigation from './../components/nav-components/navigation';
import PostContainer from './../components/postsContainer';
import './pages.css';

const Details = ({ match }) => {
  
  return (
    <div>
      <Navigation category={match.params.category} id={match.params.post_id}/>
      <PostContainer id={match.params.post_id} isDetailPage={true} />
      <CommentsContainer id={match.params.post_id} />
    </div>
  );
}

export default Details;
