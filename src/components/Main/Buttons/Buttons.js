import { Button } from "@mui/material";
import "./Buttons.scss";

import React from "react";

const OutlinedButton = ({ buttonText, href, isSubmit = false }) => {
	return (
		<Button className="rjs-button-outlined" variant="outlined" href={href} type={isSubmit ? "submit" : undefined}>
			{buttonText}
		</Button>
	);
};

export default OutlinedButton;
