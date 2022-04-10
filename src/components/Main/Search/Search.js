import React from "react";
import "./Search.scss";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

/* States and correspondings functions lifted up into the Main component */

function Search({ value, options, handleAutoCompleteChange }) {
	return (
		<div className="search-box">
			<Autocomplete
				disablePortal
				options={options}
				/* State 1 */
				value={value}
				onChange={handleAutoCompleteChange}
				multiple
				sx={{ width: 400 }}
				renderInput={(params) => <TextField variant="filled" {...params} label="start typing" />}
			/>
		</div>
	);
}

export default Search;
