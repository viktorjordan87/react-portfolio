import React from "react";
import "./DetailsBox.scss";
import OutlinedButton from "../Buttons/Buttons";

function DetailsBox({ firstLine, secondLine, text, buttonText, href }) {
	return (
		<div className="details-box">
			<h2>{firstLine}</h2>
			<h3>{secondLine}</h3>
			<p>{text}</p>
			<OutlinedButton buttonText={buttonText} href={href} />
		</div>
	);
}

export default DetailsBox;
