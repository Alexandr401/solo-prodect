const React = require('react');

function StarsRating({ estimation }) {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= estimation ? 'star-ok' : 'star-no'}>
          {i <= estimation ? '★' : '★'}
        </span>
      );
    }
    return <span>{stars}</span>;
  }
  
module.exports = StarsRating;