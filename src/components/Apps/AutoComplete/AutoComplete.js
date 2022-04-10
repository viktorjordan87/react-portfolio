import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import films from "./datas";
import "./AutoComplete.scss";

function AutoComplete() {
	const [value, setValue] = useState([]);

	/* Search input value change */
	const handleAutoCompleteChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="autocomplete-container">
			<h1>Autocomplete with dropdown</h1>
			<Autocomplete
				disablePortal
				options={films}
				getOptionLabel={(option) => option.title}
				value={value}
				onChange={handleAutoCompleteChange}
				multiple
				sx={{ width: 600 }}
				renderInput={(params) => <TextField variant="filled" {...params} label="Select a film" />}
			/>
			<div className="autocomplete-results">
				<h2>Selected films alphabetically:</h2>
				<ul>
					{value
						/* Sort Alphabetically */
						//https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
						.sort((a, b) => {
							let fa = a.title.toLowerCase(),
								fb = b.title.toLowerCase();

							if (fa < fb) {
								return -1;
							}
							if (fa > fb) {
								return 1;
							}
							return 0;
						})
						/* Create new array */
						.map((film, index) => {
							return <li key={index}>{`${film.title} - ${film.year}`}</li>;
						})}
				</ul>
			</div>
		</div>
	);
}

export default AutoComplete;
