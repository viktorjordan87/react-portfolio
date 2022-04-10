import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Modal.scss";

function Modal({ closeModal, countryData }) {
	return (
		<div className="modal-contents">
			<CloseIcon className="close-button" onClick={closeModal} />
			<ul>
				<li>
					<b>Country common name: </b>
					{countryData.name.common}
				</li>
				<li>
					<b>Country official name: </b>
					{countryData.name.official}
				</li>
				<li>
					<b>Language(s): </b>
					{countryData.languages &&
						Object.entries(countryData.languages)?.map(([key, value]) => {
							return `${value}:${key}, `;
						})}
				</li>
				<li>
					<b>Country native name(s): </b>
					{Object.entries(countryData.name.nativeName).map(([key, value]) => {
						return `${key}: ${value.official} or `;
					})}
				</li>
				<li>
					<b>Border countries: </b>
					{countryData?.borders && countryData?.borders.join(" - ")}
				</li>
				<li>...etc</li>
			</ul>
		</div>
	);
}

export default Modal;
