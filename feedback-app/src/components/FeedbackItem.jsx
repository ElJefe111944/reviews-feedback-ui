import React from 'react'
import PropTypes from 'prop-types';
import Card from './shared/Card'

export default function FeedbackItem({ item }) {


  return (
    <Card reverse={true}>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.prototypes = {
    item: PropTypes.object.isRequired,
}