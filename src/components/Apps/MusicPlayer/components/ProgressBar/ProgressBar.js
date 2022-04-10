import React from "react";
import "./ProgressBar.scss";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function ProgressBar({ audioElement, useProgressBar, value }) {
	return (
		<div className="music-player-progressbar">
			<Box width={300}>
				<Slider
					size="small"
					max={audioElement.current.duration}
					value={value}
					aria-label="Small"
					valueLabelDisplay="auto"
				/>
			</Box>
		</div>
	);
}

export default ProgressBar;
