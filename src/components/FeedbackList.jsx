import React from 'react'
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackList() { 
    const { feedback } = useContext(FeedbackContext)


    // no feedback messaging
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }

// version without animation
  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} />
        ))}
    </div>
  )
}
