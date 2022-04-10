import React, { useRef, useState, useEffect } from "react";
import "./Reference.scss";
import { Button, TextField } from "@mui/material";

function Reference() {
	/* Reference 1 */
	const buttonClicks = useRef(0);

	const countClicks = () => {
		buttonClicks.current++;
		console.log(`Click on the reference button ${buttonClicks.current}`);
	};

	/* Reference 2 */
	const stopWatchRef = useRef(0);
	const [time, setTime] = useState(0);

	useEffect(() => {
		return () => clearInterval(stopWatchRef.current);
	}, []);

	const startHandler = () => {
		if (stopWatchRef.current) {
			return;
		}
		stopWatchRef.current = setInterval(() => setTime((c) => c + 1), 1000);
	};
	const stopHandler = () => {
		clearInterval(stopWatchRef.current);
		stopWatchRef.current = 0;
	};
	const resetHandler = () => {
		clearInterval(stopWatchRef.current);
		stopWatchRef.current = 0;
		setTime(0);
	};

	/* Reference 3 */
	const accessDomElement = useRef();

	useEffect(() => {
		const buttonElement = accessDomElement.current;
		console.log(buttonElement);
	}, []);

	/* Reference 4 */
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<div className="reference-container">
			<h1>Reference examples</h1>

			<div className="reference-1">
				<h1>1.</h1>
				<h2>Count button clicks</h2>

				<p>
					Button is clicked {buttonClicks.current} times. This value won't change because reference value is synchronuus, means doesn't re-render the component,
					but avaialba immeadiately, see console log.
				</p>
				<Button variant="contained" onClick={countClicks}>
					Click on me
				</Button>
			</div>

			<div className="reference-2">
				<h1>2.</h1>
				<h2>Stopwatch example</h2>
				<h2 className="timer">Time: {time}</h2>
				<p>Use the reference to store the setInterval ID</p>
				<div className="reference-buttons">
					<Button variant="contained" onClick={startHandler}>
						Start
					</Button>
					<Button variant="contained" onClick={stopHandler}>
						Stop
					</Button>
					<Button ref={accessDomElement} variant="contained" onClick={resetHandler}>
						Reset
					</Button>
				</div>
			</div>

			<div className="reference-3">
				<h1>3.</h1>
				<h2>Use the reference to access DOM (node) element. See in the console the Reset button as DOM element.</h2>
			</div>

			<div className="reference-4">
				<h1>4.</h1>
				<h2>Use the reference to focus an input field after page load.</h2>
				<input ref={inputRef} type="text" />
			</div>
		</div>
	);
}

export default Reference;
