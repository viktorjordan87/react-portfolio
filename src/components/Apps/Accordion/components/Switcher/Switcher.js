import React, { useContext } from "react";
import "./Switcher.scss";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { SwitcherContext } from "../../context/context";

function Switcher() {
	const { switchervalue, toggleSwitcher } = useContext(SwitcherContext);
	const changeContext = () => toggleSwitcher((e) => !e);

	return (
		<div className={`darkmode-switcher ${switchervalue ? "dark" : "light"}`} onClick={changeContext}>
			{switchervalue ? <DarkModeIcon /> : <LightModeIcon />}
		</div>
	);
}

export default Switcher;
