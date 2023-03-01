import React from 'react'
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

export default function FeedbackList({ feedback }) {
    console.log(feedback);

    // no feedback messaging
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }

  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} />
        ))}
    </div>
  )
}

FeedbackList.prototypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}