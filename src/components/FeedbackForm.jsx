import React from 'react'
import { useState, useEffect } from 'react'
import { useContext } from 'react';
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        // check item is to be edited
        if(feedbackEdit.edit === true){
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit]);

    const handleTextChange = (e) => {
        // validation
        if(text === ''){

            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length <= 10){

            setBtnDisabled(true);
            setMessage('Review must be at least 10 characters')            
        } else {
            
            setMessage(null);
            setBtnDisabled(false);
        }


        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback);
            } else {
                addFeedback(newFeedback);
            }
            
            setText(''); // clear text after submission
        }
    };

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate our services?</h2>
            {/* rating selectors go here */}
            <RatingSelect select={(rating) => { setRating(rating) }} />
            <div className="input-group">
                <input onChange={handleTextChange} type="text" value={text} name="review" id="review" placeholder='Write a review' />
                <Button isDisabled={btnDisabled} type="submit">Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm