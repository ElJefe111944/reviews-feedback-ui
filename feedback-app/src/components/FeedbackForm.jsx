import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';

function FeedbackForm() {

    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

  return (
    <Card>
        <form action="">
            <h2>How would you rate our services?</h2>
            {/* rating selectors go here */}
            <div className="input-group">
                <input onChange={handleTextChange} type="text" value={text} name="review" id="review" placeholder='Write a review' />
                <Button type="submit">Send</Button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm