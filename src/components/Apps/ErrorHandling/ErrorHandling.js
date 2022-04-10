import React, { useState } from "react";
import "./ErrorHandling.scss";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback/ErrorFallback";
import FaultyComponent from "./components/FaultyComponent/FaultyComponent";

function ErrorHandling() {
	const [result, setResult] = useState([]);

	const sampleObject = [
		{ firstname: "Viktor", lastname: "Jordan" },
		{ firstname: "Michael", lastname: "Jordan" },
	];

	const generateError = () => {
		setResult(sampleObject);
	};

	const onResetFunction = () => {
		setResult([]);
		console.log("check");
	};

	return (
		<div className="error-handling-example">
			<h1>Error handling with react-error-boundary</h1>

			<ErrorBoundary FallbackComponent={ErrorFallback} onReset={onResetFunction}>
				<FaultyComponent result={result} generateError={generateError} />
			</ErrorBoundary>
		</div>
	);
}

export default ErrorHandling;
