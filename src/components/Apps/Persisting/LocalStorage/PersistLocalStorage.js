import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "./PersistLocalStorage.scss";

function PersistLocalStorage() {
	const [count, setCount] = useState(0);

	/* LocalStorage item name */
	const localstoragekey = "persistingLocalStorage";

	/* Get value from LocalStora at initialization */
	useEffect(() => {
		setCount(JSON.parse(window.localStorage.getItem(localstoragekey)));
	}, []);

	/* Refresh value when the state changes */
	useEffect(() => {
		window.localStorage.setItem(localstoragekey, count);
	}, [count]);

	const increaseCount = () => {
		return setCount(count + 1);
	};

	const decreaseCount = () => {
		return setCount(count - 1);
	};

	return (
		<div className="persisting-localstsorage">
			<h1>Persisting state with localStorage between page reloads</h1>
			<h2>Count: {count}</h2>
			<div className="buttons-container">
				<Button variant="contained" onClick={decreaseCount}>
					-
				</Button>
				<Button variant="contained" onClick={increaseCount}>
					+
				</Button>
			</div>
		</div>
	);
}

export default PersistLocalStorage;
