import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

import FeedbackData from "./data/FeedbackData";

function App() {

    // app level state
    const [feedback, setFeedback] = useState(FeedbackData);
    // delete feedback
    const deleteFeedback = (id) => {
        console.log('App', id);
        // user confirms delete
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id ));
        }        
    }

    return (
        <>
        <Header />
        <div className="container">
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />    
        </div>
        </>
    )
}

export default App;