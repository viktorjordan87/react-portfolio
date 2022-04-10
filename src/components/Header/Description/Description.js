import React from "react";
import { ReactComponent as ReactLogo } from "./logo.svg";
import "./Decriptions.scss";

function Description() {
	return (
		<div className="rjs-description">
			<ReactLogo />
			<p className="title">Reactjs Front-end Developer</p>
			<p className="name">Viktor Jordan</p>
		</div>
	);
}

export default Description;
