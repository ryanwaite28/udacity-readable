// voteScore.js

import React from 'react';

class VoteScore extends React.Component { 
  
  render() {
    const { id, vote } = this.props;
    
    return (
      <span>
        <button data-uk-icon='icon: arrow-up'
                data-uk-toggle={'target: #modifyDropDown_' + id}
                onClick={() => vote(id, 'upVote')}>
        </button>  
        <button data-uk-icon='icon: arrow-down'
                data-uk-toggle={'target: #modifyDropDown_' + id}
                style={{ paddingRight: 10 }}
                onClick={() => vote(id, 'downVote')}>
        </button>
      </span>
    );
  }
}

export default VoteScore;
