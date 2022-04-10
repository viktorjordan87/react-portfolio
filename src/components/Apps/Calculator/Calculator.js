import "./Calculator.scss";

import { Button } from "@mui/material";

import React, { useState } from "react";

const Calculator = () => {
	let [value, setValue] = useState("");
	let [result, setResult] = useState("");
	let [operation, setOperation] = useState("");

	const operator = {
		"+": function (a, b) {
			return a + b;
		},
		"-": function (a, b) {
			return a - b;
		},
		"*": function (a, b) {
			return a * b;
		},
		"/": function (a, b) {
			return a / b;
		},
	};

	const numberInput = (e) => {
		const number = e.target.value;
		setValue(value + number);
	};

	const operationAC = () => {
		setResult("");
		setValue("");
		setOperation("");
	};

	const operationAdd = () => {
		setResult(Number(result) + Number(value));
		setValue("");
		setOperation("+");
	};

	const operationSubstraction = () => {
		if (value === "") {
			setResult(Number(result) - Number(value));
		}
		setValue("");
		setOperation("-");
	};

	const operationMultiply = () => {
		if (value === "" && result === "") {
			setResult(Number(result) * Number(value));
		} else if (value !== "") {
			setResult(Number(value));
		}
		setValue("");
		setOperation("*");
	};

	const operationDivide = () => {
		if (value === "" && result === "") {
			setResult(Number(result) / Number(value));
		} else if (value !== "") {
			setResult(Number(value));
		}
		setValue("");
		setOperation("/");
	};

	const operationEqual = () => {
		setResult(operator[operation](Number(result), Number(value)));
		setValue("");
		setOperation("");
	};

	return (
		<div className="calculator-wrapper">
			<h1>My Calculator</h1>
			<div className="display">
				{operation}
				{value}
			</div>
			<div className="buttons">
				{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
					return (
						<Button key={num} variant="contained" value={num} onClick={numberInput}>
							{num}
						</Button>
					);
				})}
			</div>
			<div className="buttons">
				<Button variant="contained" value="AC" onClick={operationAC}>
					AC
				</Button>
				<Button variant="contained" value="+" onClick={operationAdd}>
					+
				</Button>
				<Button variant="contained" value="-" onClick={operationSubstraction}>
					-
				</Button>
				<Button variant="contained" value="*" onClick={operationMultiply}>
					*
				</Button>
				<Button variant="contained" value="/" onClick={operationDivide}>
					/
				</Button>
				<Button variant="contained" value="=" onClick={operationEqual}>
					=
				</Button>
			</div>
			<div className="result">
				<strong>Result:</strong>
				{result}
			</div>
		</div>
	);
};

export default Calculator;
