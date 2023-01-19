import { createContext } from "react";

export const switcher = true; //true means dark theme is active, false means lightt theme is active

export const SwitcherContext = createContext({
	switchervalue: switcher,
	toggleSwitcher: () => {},
});
