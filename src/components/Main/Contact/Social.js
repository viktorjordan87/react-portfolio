import React from "react";
import "./Social.scss";

const Social = ({ name, link, mailTo }) => {
	return (
		<div className="social-element">
			<p className="social-platform-name">{name}</p>
			<a href={(mailTo ? "mailto:" : "") + link} className="social-platform-link" target="_blank" rel="noreferrer">
				{link}
			</a>
		</div>
	);
};

export default Social;
