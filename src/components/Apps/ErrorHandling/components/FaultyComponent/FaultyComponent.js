import React from "react";
import { Button } from "@mui/material";

function FaultyComponent({ generateError, result }) {
	return (
		<>
			<h2>Get some value from an object property, which doesn't exist</h2>
			<Button variant="contained" onClick={generateError}>
				Generate error
			</Button>
			<div className="result">
				{result.map((res, index) => {
					return <p key={index}>{res.birth.join()}</p>;
				})}
			</div>
		</>
	);
}

export default FaultyComponent;
