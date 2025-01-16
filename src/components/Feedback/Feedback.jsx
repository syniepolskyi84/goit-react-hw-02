import css from "./Feedback.module.css";

export default function Feedback(
    {feedbackCounts,
        totalFeedback,
        percentPositive
    }
) {
    return(
        <div className={css.pDiv}>
            <p>Good: {feedbackCounts.good}</p>
            <p>Neutral: {feedbackCounts.neutral}</p>
            <p>Bad: {feedbackCounts.bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive:  {percentPositive}%</p>
        </div>
    )
}