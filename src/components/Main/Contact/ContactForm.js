import React, { useState } from "react";
import { send } from "emailjs-com";
import "./ContactForm.scss";

import Validator from "./Validator";
import OutlinedButton from "../Buttons/Buttons";

const ContactForm = () => {
	/* If Yes checkbox is checked state, state lifted up from the Validator component*/
	const [isBot, setIsBot] = useState(false);

	/* Emailjs send method */
	const [toSend, setToSend] = useState({
		from_name: "",
		message: "",
		reply_to: "",
	});

	const onSubmit = (e) => {
		e.preventDefault();
		/* If isBot = false then email wcdill be send, otherwise isBot true, then see console message and don't use EmailJs */
		if (!isBot) {
			send("service_tlsjvih", "template_g8r1dr6", toSend, "q-lbUJfo-ZUM38fwt")
				.then((response) => {
					console.log("SUCCESS!", response.status, response.text);
				})
				.catch((err) => {
					console.log("FAILED...", err);
				});
			console.log("Email submited and sent");
		} else {
			console.log("You are a bad bot :)");
		}
	};

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};
	return (
		<form className="contactform" onSubmit={onSubmit}>
			<div className="name">
				<label htmlFor="from_name_id">Name/ Agency/ Company:</label>
				<input type="text" name="from_name" id="from_name_id" value={toSend.from_name} onChange={handleChange} />
			</div>
			<div className="reply">
				<label htmlFor="reply_to_id">Email:</label>
				<input type="text" name="reply_to" id="reply_to_id" value={toSend.reply_to} onChange={handleChange} />
			</div>
			<div className="message">
				<label htmlFor="message_id">Message:</label>
				<input type="text" name="message" id="message_id" value={toSend.message} onChange={handleChange} />
			</div>
			<Validator isBot={isBot} setIsBot={setIsBot} />
			<div className="submit">
				<OutlinedButton buttonText="Submit" isSubmit />
			</div>
		</form>
	);
};

export default ContactForm;
