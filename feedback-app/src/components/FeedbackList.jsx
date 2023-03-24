import React from 'react'
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

export default function FeedbackList({ feedback, handleDelete }) {
    console.log(feedback);

    // no feedback messaging
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }

// version without animation
  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        ))}
    </div>
  )

// return (
//     <div className='feedback-list'>
//             <AnimatePresence>
//                 {
//                     feedback.map((item) => (
//                         <motion.div
//                             key={item.id}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                         >
//                             <FeedbackItem
//                                 key={item.id}
//                                 item={item}
//                                 handleDelete={handleDelete} />
//                         </motion.div>
//                     ))
//                 }
//             </AnimatePresence>
//     </div>
//   )
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