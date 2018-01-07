// voteScore.js

import React from 'react';

const VoteScore = ({ id, vote }) => {
 
  return (
    <div>
      <button data-uk-icon="icon: arrow-up" onClick={() => vote(id, 'upVote')}></button>  
      <button data-uk-icon="icon: arrow-down" 
              style={{ paddingRight: 10 }}
              onClick={() => vote(id, 'downVote')}>
      </button>
    </div>
  );
}

export default VoteScore;
