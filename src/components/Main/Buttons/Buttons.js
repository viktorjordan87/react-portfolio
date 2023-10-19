import { Button } from "@mui/material";
import "./Buttons.scss";

import React from "react";

const OutlinedButton = ({ buttonText, href, isSubmit = false, target = false }) => {
	return (
		<>
			{!target ? (
				<Button
					className="rjs-button-outlined"
					variant="outlined"
					href={href}
					type={isSubmit ? "submit" : undefined}
				>
					{buttonText}
				</Button>
			) : (
				<a
					target="_blank"
					className="rjs-button-outlined"
					variant="outlined"
					href={href}
					type={isSubmit ? "submit" : undefined}
					rel="noreferrer"
				>
					{buttonText}
				</a>
			)}
		</>
	);
};

export default OutlinedButton;
