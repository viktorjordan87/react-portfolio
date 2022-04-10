import React from "react";
import "./Infobox.scss";

function Infobox({ title, text, link }) {
	return (
		<div className="infobox">
			<h4 className="infobox-title">{title}</h4>
			<p className="infobox-text">{text}</p>
			<a href={link} target="_blank" className="infobox-link" rel="noreferrer">
				{link}
			</a>
		</div>
	);
}

export default Infobox;
