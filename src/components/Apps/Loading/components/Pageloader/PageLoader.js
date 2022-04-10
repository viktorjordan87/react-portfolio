import React, { useState } from "react";
import "./PageLoader.scss";

const PageLoader = ({ setTimeOutMilisecond = 0, enabled }) => {
	const [isPageLoading, setIsPageLoading] = useState(enabled);

	window.addEventListener("load", (event) => {
		setTimeout(() => {
			setIsPageLoading(false);
		}, setTimeOutMilisecond);
	});

	return (
		<div className={`page-loader ${isPageLoading ? "page-loading" : "page-loaded"}`}>
			<div className="loader-wrapper">
				<div className="loader"></div>
			</div>
		</div>
	);
};

export default PageLoader;
