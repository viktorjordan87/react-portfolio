import React from "react";
import data from "../../store/db.json";
import AccordionElement from "../AccordionElement/AccordionElement";

function AccordionContainer() {
	var { movies } = data;

	return (
		<div className="accordion-contents">
			{movies.map((movie) => {
				return <AccordionElement key={movie.id} movie={movie} />;
			})}
		</div>
	);
}

export default AccordionContainer;
