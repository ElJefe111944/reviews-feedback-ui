import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';

function FeedbackForm() {

    const [text, setText] = useState('');
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

  return (
    <Card>
        <form action="">
            <h2>How would you rate our services?</h2>
            {/* rating selectors go here */}
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