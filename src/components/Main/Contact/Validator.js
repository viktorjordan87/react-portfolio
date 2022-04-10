import React, { useState } from "react";
import "./Validator.scss";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";

/* SVG */
import { ReactComponent as BubbleLogo } from "./bubble.svg";

/* Pictures */
import goodRobot from "../../../images/robot.webp";
import badRobot from "../../../images/robor_killer.webp";

/* Components */
import Picture from "../Picture/Picture";

const Validator = ({isBot, setIsBot}) => {
	return (
		<div className="validator">
			<Picture webSrc={isBot ? badRobot : goodRobot} />
			<div className="bubble-and-text">
				<BubbleLogo />
				<p>Are you a bot?</p>
			</div>
			<FormGroup className="validator-form">
				<FormControlLabel
					control={
						<Checkbox
							sx={{
								color: grey[50],
								"&.Mui-checked": {
									color: grey[50],
								},
							}}
						/>
					}
					label="Yes"
					onChange={() => setIsBot(!isBot)}
				/>
				<FormControlLabel
					control={
						<Checkbox
							sx={{
								color: grey[50],
								"&.Mui-checked": {
									color: grey[50],
								},
							}}
						/>
					}
					label="No"
				/>
			</FormGroup>
		</div>
	);
};

export default Validator;
