import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({ handleAdd }) {

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

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

            handleAdd(newFeedback);

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