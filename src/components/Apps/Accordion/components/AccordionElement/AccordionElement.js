import React, { useState, useContext } from "react";
import "./AccordionElement.scss";

/* Accordion */
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

/* Context */
import { SwitcherContext } from "../../context/context";

function AccordionElement({ movie }) {
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const { switchervalue } = useContext(SwitcherContext);

	return (
		<div>
			<Accordion className={`accordion-element ${switchervalue ? "dark" : "light"}`} expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content">
					<Typography sx={{ width: "33%", flexShrink: 0 }}>{movie.title}</Typography>
					<Typography sx={{ color: "text.secondary" }}>{movie.genres.join(", ")}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>{movie.plot}</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export default AccordionElement;
