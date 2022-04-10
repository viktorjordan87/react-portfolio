import React from "react";
import "./ErrorFallback.scss";
import { Button } from "@mui/material";

function ErrorFallback({ error, resetErrorBoundary }) {
	return (
		<div className="error-fallback-container" role="alert">
			<h2>ErrorFallback component</h2>
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
			<Button variant="contained" onClick={resetErrorBoundary}>
				Try again
			</Button>
		</div>
	);
}

export default ErrorFallback;
