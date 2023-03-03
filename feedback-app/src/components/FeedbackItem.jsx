import { FaTimes } from "react-icons/fa";
import React from 'react'
import PropTypes from 'prop-types';
import Card from './shared/Card'

export default function FeedbackItem({ item }) {
  
  // close btn
  const handleClick = (id) => {
    console.log(id);
  }

  return (
    <Card reverse={true}>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleClick(item.id)} className="close">
          <FaTimes color="purple" />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.prototypes = {
    item: PropTypes.object.isRequired,
}
