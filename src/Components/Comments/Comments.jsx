import React from 'react';
import PropTypes from 'prop-types';

import './Comments.scss';

export const Comments = ({ comments }) => {
  
  return (
    <>
      <div className="comments">
        {comments.length !== 0 ? (
          <ul className='comments__list'>
            {comments.map(comment => (
              <li key={comment.id} className="comments__items">
                <p className="comments__description">
                  {comment.description}
                </p>
                <p className="comments__date">
                  {comment.date}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          'There is no comments yet'
        )}
      </div>
    </>
  )
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      date: PropTypes.string,
    })
  ).isRequired
}
