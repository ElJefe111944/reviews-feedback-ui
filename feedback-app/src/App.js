import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";

function App() {

    // app level state
    const [feedback, setFeedback] = useState(FeedbackData);
    // add feedback
    const addFeedback = (newFeedback) => {
        // add id to new feedback object 
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };
    // delete feedback
    const deleteFeedback = (id) => {
        // user confirms delete
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id ));
        }        
    }

    return (
        <>
        <Header />
        <div className="container">
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />    
        </div>
        </>
    )
}

export default App;