import React, { useState, useMemo } from "react";
import "./Accordion.scss";
import Switcher from "./components/Switcher/Switcher";

import { SwitcherContext, switcher } from "./context/context";
import AccordionContainer from "./components/AccordionContainer/AccordionContainer";

function Accordion() {
	/* States */
	const [changeContextValue, setChangeContextValue] = useState(switcher);
	const value = useMemo(() => ({ switchervalue: changeContextValue, toggleSwitcher: setChangeContextValue }), [changeContextValue]);

	return (
		<>
			<SwitcherContext.Provider value={value}>
				<div className={`accordion-container ${value.switchervalue ? "dark" : "light"}`}>
					<h1>Accordion and darkomode switcher with Context</h1>
					<h2>The theme settings are placed into a Context object which can be changed.</h2>
					<Switcher />
					<AccordionContainer />
				</div>
			</SwitcherContext.Provider>
		</>
	);
}

export default Accordion;
