import { v4 as uuidv4 } from "uuid";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";

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

    return  (
        <FeedbackProvider>
            <Router>
                <Header />

                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <FeedbackForm handleAdd={addFeedback} />
                                    <FeedbackStats />
                                    <FeedbackList handleDelete={deleteFeedback} />
                                </>
                            }
                        ></Route>

                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
      );
}

export default App;