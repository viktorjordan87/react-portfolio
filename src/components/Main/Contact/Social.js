import React from "react";
import "./Social.scss";

const Social = ({ name, link, mailTo }) => {
	return (
		<div className="social-element">
			<p className="social-platform-name">{name}</p>
			<a href={(mailTo ? "mailto:" : undefined) + link} className="social-platform-link">
				{link}
			</a>
		</div>
	);
};

export default Social;
