import React, {useState} from "react";
import ReactDOM from "react-dom";

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	
	return (
		<div>
			<h1>Please Give Feedback this will be impotant to us, Thank you!</h1><br/>
			<button onClick = {() => setGood(good + 1)}>Good</button>
			<button onClick = {() => setNeutral(neutral + 1)}>Neutral</button>
			<button onClick = {() => setBad(bad + 1)}>Bad</button>
			<br/>
			<h1>Statistics</h1>
			<br/>
			<h3>Good Feedback: {good}</h3>
			<h3>Neutral Feedback: {neutral}</h3>
			<h3>Bad Feedback: {bad}</h3>
			<h3>All Feedbacks: {good + neutral + bad}</h3>
			<h3>Average: {(good - bad)/(good + neutral + bad)}</h3>
			<h3>Positive: {(good + neutral)/(good + neutral + bad)}</h3>
		</div>
	)
}

export default App;
