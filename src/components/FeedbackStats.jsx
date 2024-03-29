import React from 'react'
import { useContext } from 'react';
import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // calc ratings average
  let average = feedback.reduce((accumlator, currentValue) => {
    return accumlator + currentValue.rating 
  }, 0) / feedback.length;

  average = average.toFixed(1);

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats