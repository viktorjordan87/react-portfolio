import React, { useState, useMemo, useRef } from "react";
import "./Debounce.scss";
import TextField from "@mui/material/TextField";
import { Category } from "@mui/icons-material";
import axios from "axios";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

const Debounce = () => {
	/* Count renders */
	const renderCounter = useRef(0);
	renderCounter.current = renderCounter.current + 1;

	/* Search box states */
	const [localSearch, setLocalSearch] = useState("");

	/* Result images */
	const [images, setImages] = useState([]);

	const postPerPage = 20;
	const page = 1;

	/* Set Message */
	const [message, setMessage] = useState("");

	const handleRequest = async ({ name, value }) => {
		// const pixabayapiurl = `https://pixabay.com/api/?key=11196981-ec80531d27bb3005fa73ef618&q=${value}&per_page=${postPerPage}&page=${page}`;
		/* use the name variable for sg if you have more textfield/inputfield */
		// /* Get pictures */
		// await axios
		// 	.get(pixabayapiurl)
		// 	.then((response) => {
		// 		const data = response.data.hits;
		// 		//setImages(data);
		// 		console.log(data);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	};

	const debounce = () => {
		let timeoutID;
		return (e) => {
			setLocalSearch(e.target.value);
			clearTimeout(timeoutID);
			timeoutID = setTimeout(() => {
				//handleRequest({ name: e.target.name, value: encodeURIComponent(e.target.value) });
				setMessage(e.target.value);
			}, 1200);
		};
	};

	/* Do not run the debounce after component is loaded initially, for first time. Only run if some typing happened in the textfield. useMemo helps us that at initial run create the memoized function without run it at starting */
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const optimizedDebounce = useMemo(() => debounce(), []);

	return (
		<ThemeProvider theme={darkTheme}>
			<section className="debounce-container">
				<h3>
					Debounce function: Let's say you are searching pictures, and you start to write the keyword into the textfield,thne you have two options when to want
					to handle the request to an API:
				</h3>
				<ol>
					<li>
						Start the request after press Enter or press a button, means to submit the form. That means you can write as much as many characters into the input,
						the api request doesn't start until you do not decide.
					</li>
					<li>
						Start the request after every type into the input field happens. As we can know this could result for the backend a lot of unnecessary request call.
						More user means more request, that could after a couple more could result a big load on the server. This second option is more user friendly,
						because the user can see the result instantly, but on the otherhand cost us a bigger server. To solve this problem we can use the debounce function.
					</li>
				</ol>
				<h3>
					The debounce function purpose is to start the request only after the user finished type one distinctive word, and not after every character. So I set
					the timer 1,2 sec. That means if between two typing more than 1,2second happens then the request submitted.{" "}
				</h3>
				<TextField id="standard-basic" label="Standard" name="search" variant="filled" value={localSearch} onChange={optimizedDebounce} />
				<br />
				<br />
				<h1 className="message">Submitted request: {message}</h1>
			</section>
		</ThemeProvider>
	);
};

export default Debounce;
