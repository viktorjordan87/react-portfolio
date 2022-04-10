import React from "react";
import { Button } from "@mui/material";
import "./BaseComponent.scss";

function BaseComponent({ baseImage, baseTitle, baseLorem, baseButton, ...otherprops }) {
	return (
		<div {...otherprops} className="base-box">
			<img className="base-image" src={baseImage} alt={baseTitle} />
			<h3 className="base-title">{baseTitle}</h3>
			<p className="base-lorem">{baseLorem}</p>
			<Button variant="contained" className="base-button">
				{baseButton}
			</Button>
		</div>
	);
}

export default BaseComponent;
