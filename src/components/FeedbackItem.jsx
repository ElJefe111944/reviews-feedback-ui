import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import React from 'react'
import PropTypes from 'prop-types';
import Card from './shared/Card'
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackItem({ item }) {

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);  
 
  return (
    <Card reverse={true}>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
          <FaTimes color="aquamarine" />
        </button>
        <button onClick={() => editFeedback(item)} className="edit"> 
          <FaEdit />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.prototypes = {
    item: PropTypes.object.isRequired,
}
