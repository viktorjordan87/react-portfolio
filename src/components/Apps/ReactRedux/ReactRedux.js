import React from "react";
import "./ReactRedux.scss";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./slice/counterSlice";
import { Button } from "@mui/material";

function ReactRedux() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className="react-redux-container">
			<h1>ReactRedux</h1>
			<div>
				<h2>React Redux counter</h2>
				<div className="redux-count-value">{count}</div>
				<Button aria-label="Increment value" variant="outlined" onClick={() => dispatch(increment())}>
					Increment
				</Button>
				<Button aria-label="Decrement value" variant="outlined" onClick={() => dispatch(decrement())}>
					Decrement
				</Button>
			</div>
		</div>
	);
}

export default ReactRedux;
