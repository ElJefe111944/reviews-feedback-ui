import React from 'react'
import { useState } from 'react'

export default function FeedbackItem() {
    // state
    const [rating, setRating] = useState(5);
    const [text, setText] = useState('This is an example of a feedback item.');

  return (
    <div className='card'>
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
    </div>
  )
}
