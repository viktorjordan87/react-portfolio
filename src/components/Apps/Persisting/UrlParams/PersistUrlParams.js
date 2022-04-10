import "./PersistUrlParams.scss";
import React, { useEffect, useState } from "react";
import qs from "qs";
import { createBrowserHistory } from "history";
import { Button } from "@mui/material";

function PersistUrlParams() {
	const [count, setCount] = useState(0);

	const history = createBrowserHistory();

	useEffect(() => {
		const filterParams = history.location.search.substring(1);
		const filtersFromParams = qs.parse(filterParams);
		if (filtersFromParams.count) {
			setCount(Number(filtersFromParams.count));
		}
	}, []);

	useEffect(() => {
		history.push(`?count=${count}`);
	}, [count]);

	const increaseCount = () => {
		return setCount(count + 1);
	};
	const decreaseCount = () => {
		return setCount(count - 1);
	};

	return (
		<div className="persisting-url">
			<h1>Persisting state with url parameters between page reloads</h1>
			<h2> Count: {count} </h2>
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

export default PersistUrlParams;
