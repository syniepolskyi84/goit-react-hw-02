import './App.css'
import { useState, useEffect } from 'react';
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import Description from "../Description/Description";

export default function App() {

  const [feedbackCounts, setFeedbackCounts] = useState(() => {
    const savedFeedbackCounts = localStorage.getItem("feedback-counts")
    return savedFeedbackCounts !== null ? JSON.parse(savedFeedbackCounts) : { good: 0, neutral: 0, bad: 0}
  });

  function updateFeedback(feedbackType) {
    setFeedbackCounts(prevCounts => ({
      ...prevCounts,
      [feedbackType]: prevCounts[feedbackType] + 1
    }));
  }

  const resetFeedback = () => {
    setFeedbackCounts({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  useEffect(() => {
    localStorage.setItem("feedback-counts", JSON.stringify(feedbackCounts))
  }, [feedbackCounts])

  const totalFeedback = feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;
  const percentPositive = totalFeedback > 0 ? Math.round((feedbackCounts.good + feedbackCounts.neutral) / totalFeedback * 100) : 0;

  return (
    <>

    <Description header={"Sip Happens Café"} text={"Please leave your feedback about our service by selecting one of the options below."}/>

    <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback}/>

    {totalFeedback ? <Feedback feedbackCounts={feedbackCounts} totalFeedback={totalFeedback} percentPositive={percentPositive}/> : <Notification text={"No feedback yet"}/>}
   
    </>
  )
} 
