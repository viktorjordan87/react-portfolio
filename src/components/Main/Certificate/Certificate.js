import React from "react";
import Zoom from "../Zoom/Zoom";
import "./Certificate.scss";

const Certificate = ({ certificate }) => {
	return (
		<div className="certificate" key={certificate.id}>
			<Zoom alt={certificate.title} src={certificate.src} />
			<a href={certificate.href} target="_blank" rel="noreferrer">
				{certificate.title}
			</a>
		</div>
	);
};

export default Certificate;
